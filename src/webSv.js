import express from 'express';
import { getLockerUnitInfo } from './lockerData';
import unlockUnit from './coinInsert/terminalInput';

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = 4200;
app.use(express.static(`${__dirname}/webComponents`));
app.get('/', (req, res, next) => {
  res.sendFile(`${__dirname}/webComponents/index.html`);
});


io.on('connection', (socket) => {
  getLockerUnitInfo().lockerInfo.unit.forEach((i) => {
    if (i.status === 'reserved') {
      // set initial state unit
      io.emit('reserved', i.no);
    }
  });

  socket.on('unlock', async (msg) => {
    const req = JSON.parse(msg);
    // reserve success checkPassword(msg)
    if (req.passcode === getLockerUnitInfo().lockerInfo.unit[parseInt(req.no, 10) - 1].passcode) {
      // insert coin
      await unlockUnit(100, 6);
      io.emit('unlock', req.no);
    }
  });
});
server.listen(port, () => console.log(`Web rdy port ${port}`));

export default io;

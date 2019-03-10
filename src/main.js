import ask from './coinInsert/terminalInput';
import mutateFreeUnit from './graphql/connect';
import calCoinChange from './coinchange';

const kafka = require('kafka-node');

const LOCKER1_TOPIC = 'locker-info';
const PARTITION_NUM = 0;

const { Consumer } = kafka;
const client = new kafka.KafkaClient({ 'kafkaHost': 'localhost:9092' });
const consumer = new Consumer(
  client,
  [
    { 'topic': LOCKER1_TOPIC, 'partition': PARTITION_NUM },
  ],
  {
    'autoCommit': true,
  },
);

consumer.on('message', (message) => {
  // TODO update interface user available/reserved
  // console.log(JSON.parse(message.value));
});

consumer.on('error', (err) => {
  console.log('Error:', err);
});

consumer.on('offsetOutOfRange', (err) => {
  console.log('offsetOutOfRange:', err);
});


const unlockUnit = async () => {
  const totolCost = 100;
  const totolCoinValue = await ask(totolCost);
  console.log(`Insert ${totolCoinValue} BAHT`);

  // success unlock
  mutateFreeUnit(6);
  console.log(`change coin :${JSON.stringify(calCoinChange(totolCoinValue - totolCost))}`);
};
unlockUnit(6);

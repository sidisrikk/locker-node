const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  'locker_no': parseInt(process.env.LOCKER_NO, 10),
};

// config.js
import { config } from 'dotenv';

config();
export default {
  'LOCKER_NO': parseInt(process.env.LOCKER_NO, 10) || 1,
};

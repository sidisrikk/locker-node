import ask from './coinInsert/terminalInput';

const kafka = require('kafka-node');

const LOCKER1_TOPIC = 'locker-unit';
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
  console.log(message);
  // ask();
});

consumer.on('error', (err) => {
  console.log('Error:', err);
});

consumer.on('offsetOutOfRange', (err) => {
  console.log('offsetOutOfRange:', err);
});

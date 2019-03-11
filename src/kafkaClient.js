import kafka from 'kafka-node';
import webSocket from './webSv';
import { setLockerUnitInfo } from './lockerData';


const LOCKER1_TOPIC = 'locker-info';
const PARTITION_NUM = 0;

const { Consumer } = kafka;
const client = new kafka.KafkaClient({ 'kafkaHost': 'localhost:9092' });
const offset = new kafka.Offset(client);


const kafkaClientStart = offset.fetchLatestOffsets([LOCKER1_TOPIC], (err, offsets) => {
  if (err) {
    console.log(`fail kafka client ${err}`);
    return;
  }
  let latest = 1;
  Object.keys(offsets[LOCKER1_TOPIC]).forEach((o) => {
    latest = offsets[LOCKER1_TOPIC][o] > latest ? offsets[LOCKER1_TOPIC][o] : latest;
  });
  const consumer = new Consumer(
    client,
    [
      {
        'topic': LOCKER1_TOPIC, 'partition': PARTITION_NUM, 'offset': latest - 1,
      },
    ],
    {
      'autoCommit': true,
      'fromOffset': true,
    },
  );
  console.log('kafka rdy');

  consumer.on('message', (message) => {
    // console.log(message.value);
    // TODO makesure right data format
    try {
      setLockerUnitInfo(JSON.parse(message.value));
      JSON.parse(message.value).lockerInfo.unit.forEach((i) => {
        webSocket.emit((i.status === 'reserved') ? 'reserved' : 'unlock', i.no);
      });
    } catch (error) {
      console.log(error);
    }
  });

  consumer.on('error', (err) => {
    console.log('Error:', err);
  });

  consumer.on('offsetOutOfRange', (err) => {
    console.log('offsetOutOfRange:', err);
  });
});

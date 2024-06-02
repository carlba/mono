import { Command } from '@commander-js/extra-typings';
import * as amqplib from 'amqplib';

new Command()
  .name('watch')
  .description('Watch MQ')
  .version('0.0.1')
  .argument('<queue>', 'The queue to watch')
  .option('-u, --uri <URI>', 'The AMPQ URI', 'amqp://localhost')
  .action(async (queue, options) => {
    const conn = await amqplib.connect(options.uri);
    const channel = await conn.createChannel();
    await channel.assertQueue(queue, { deadLetterExchange: 'dlx' });
    await channel.bindQueue(queue, 'pocketlaw', '');
    await channel.consume(queue, msg => {
      if (msg !== null) {
        console.log(msg.content.toString());
        channel.ack(msg);
      }
    });
  })
  .parse(process.argv);

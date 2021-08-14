import { DB } from './config/db';
import { connectionOptions } from './config/connectionOptions';
import { Run } from './run';

async function init() {
  try {
    const db = new DB(connectionOptions);
    await db.createDatabaseConnection();
    console.log('DB connected!');

    const run = new Run();
    await run.run();
  } catch (e) {
    console.error('DB connection Error: ', e);
  }
}

init();

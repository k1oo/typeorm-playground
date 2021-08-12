import { DB } from './config/db';
import { connectionOptions } from './config/connectionOptions';

async function init() {
  try {
    const db = new DB(connectionOptions);
    await db.createDatabaseConnection();
    console.log('DB connected!');
  } catch (e) {
    console.error('DB connection Error: ', e);
  }
}

init();

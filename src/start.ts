import { createDatabaseConnection } from './entities/db';

async function init() {
  try {
    await createDatabaseConnection();
    console.log('DB connected!')
  } catch (e) {
    console.error('DB connection Error: ', e);
  }
}

init();
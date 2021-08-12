import { createDatabaseConnection } from './entities/db';

async function init() {
  try {
    await createDatabaseConnection();
  } catch (e) {
    console.error('DB connection Error: ', e);
  }
}

init();
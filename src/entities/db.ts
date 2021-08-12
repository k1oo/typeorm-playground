import { ConnectionOptions, createConnection } from 'typeorm';
import { ENV } from '../../env';

const connectionOptions: ConnectionOptions = {
  entities: [
    'src/entities/*.model.ts',
  ],
  type: 'postgres',
  host: ENV.DB_HOST,
  port: 5432,
  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_NAME,
  synchronize: false,
  logging: true,
};

export async function createDatabaseConnection(): Promise<void> {
  try {
    await createConnection(connectionOptions);
  } catch (e) {
    console.error(e);
  }
}
import { ConnectionOptions } from 'typeorm';
import { ENV } from '../../env';

export const connectionOptions: ConnectionOptions = {
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

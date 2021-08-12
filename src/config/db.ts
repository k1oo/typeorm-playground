import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import * as fs from 'fs';

export class DB {
  private connection: Connection;

  constructor(private connectionOptions: ConnectionOptions) {
  }

  async createDatabaseConnection(): Promise<void> {
    try {
      this.connection = await createConnection(this.connectionOptions);
      await this.resetTables();
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  async resetTables() {
    try {
      fs.readdir('src/entities', (err, fileList) => {
        fileList.forEach(async file => {
          const entity = file.replace(/\..*/g, '') + 's';
          await this.connection.query(`DELETE FROM ${entity.toLowerCase()}`);
        });
      });
    } catch (e) {
      console.error(`resetTables Error: `, e);
      throw new Error(e);
    }
  }
}
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import * as fs from 'fs';
import * as randomstring from 'randomstring';

export class DB {
  private connection: Connection;

  constructor(private connectionOptions: ConnectionOptions) {
  }

  async createDatabaseConnection(): Promise<void> {
    try {
      this.connection = await createConnection(this.connectionOptions);
      await this.resetTables();
      await this.settingPostTables();
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
          await this.connection.query(`TRUNCATE TABLE ${entity.toLowerCase()} RESTART IDENTITY;`);
        });
      });
    } catch (e) {
      console.error(`resetTables Error: `, e);
      throw new Error(e);
    }
  }

  async settingPostTables() {
    try {
      for (let i = 0; i < 100; i++) {
        await this.connection.query(
          `INSERT INTO "posts" ("title", "body") 
          VALUES ('${randomstring.generate(10)}', '${randomstring.generate(30)}')`);
      }
    } catch (e) {
      console.error(e);
    }
  }
}
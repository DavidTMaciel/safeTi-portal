require('dotenv').config();
import { createConnection, Connection } from "mysql2/promise";
import { newDate } from "../../common/date";

class ClientMySQL {
  public static connection: Connection;
  public static errClientMySQL = false;
  public static connected = false;

  static async getConnection() {
    if (!this.connected) {
      await this.initializeMySQL();
    }
    return this.connection;
  }

  static async initializeMySQL() {
    this.connection = await this.createConnection();

    this.connection.on('error', (error: any) => {
      console.log(`[${newDate().toLocaleString()}] erro ao conectar ao MySQL: ${error.message}`);

      if (error.code === 'PROTOCOL_CONNECTION_LOST' || error.code === 'ER_CON_COUNT_ERROR') {
        this.errClientMySQL = true;
      }
    });

    this.connected = true;
  }

  static async createConnection() {
    return createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      port: parseInt(process.env.DATABASE_PORT || '3306', 10)
    });
  }
}

export {
  ClientMySQL
};

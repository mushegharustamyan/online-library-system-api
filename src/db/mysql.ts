import mysql from "mysql2/promise";
import { IConnectionSettings } from "../interfaces";
import app from "../utils/app";

class MySQLService {
  private connectionSettings: IConnectionSettings;

  constructor(connectionSettings: IConnectionSettings) {
    this.connectionSettings = connectionSettings;
  }

  public async connectionInit() {
    try {
      const { db, user, password, host } = this.connectionSettings;

      const connection = await mysql.createConnection({
        host,
        user,
        password,
        port: 3306,
        charset: "utf8",
      });

      await connection.query(`CREATE DATABASE IF NOT EXISTS ${db}`);
    } catch (e) {
      console.log(e);
    }
  }
}

const mysqlService = new MySQLService(app.getAppDBSettings());

export default mysqlService;

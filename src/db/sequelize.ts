import { Sequelize } from "sequelize";
import { IConnectionSettings } from "../interfaces";
import app from "../utils/app";

class MySequelize {
  private connectionSettings: IConnectionSettings;
  private sequelize: Sequelize | null;

  constructor(connectionSettings: IConnectionSettings) {
    this.connectionSettings = connectionSettings;
    this.sequelize = null;
  }

  public setConnectionSettings() {
    const { db, user, password, host } = this.connectionSettings;

    this.sequelize = new Sequelize(db, user, password, {
      host,
      dialect: "mysql",
    });

    return this.sequelize;
  }

  public getSequelize() {
    return this.sequelize;
  }
}

const dbSettings = app.getAppDBSettings();

const mySequelize = new MySequelize(dbSettings);
mySequelize.setConnectionSettings();
export default mySequelize;

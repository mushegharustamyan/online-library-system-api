import express from "express";
import { Application } from "express";
import { PingPongRouter } from "../routes/ping";
import { getEnv, getEnvPort } from "./reqReq";
import { IConnectionSettings } from "../interfaces";
import { dbConfig } from "../db/db.config";

class App {
  private app: Application;
  private environment: string;
  private dbSettings: IConnectionSettings;
  readonly port: number;

  constructor() {
    this.app = express();
    this.environment = process.env.NODE_ENV || "dev";
    this.port = getEnvPort() || 3000;
    this.dbSettings = this.getDBConfigs();
  }

  private configureRoutes(): void {
    const { app } = this;

    app.use("/ping", PingPongRouter);
  }

  private getDBConfigs(): IConnectionSettings {
    return dbConfig[this.environment];
  }

  public listen(port: number, callback?: () => void) {
    this.app.listen(
      port,
      callback || (() => console.log(`Server running on port ${port}`))
    );
  }

  public configureApp(): void {
    this.configureRoutes();
  }

  public getApp() {
    return this.app;
  }

  public getAppDBSettings() {
    return this.dbSettings;
  }
}

const app = new App();
app.configureApp();

export default app;

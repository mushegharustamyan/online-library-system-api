import express from "express";
import { Application } from "express";
import { PingPongRouter } from "../routes/ping";
import { getEnv, getEnvPort } from "./reqReq";
import { IConnectionSettings } from "../interfaces";

class App {
  private app: Application;
  private environment: string;
  private dbSettings: IConnectionSettings;
  readonly port: number;

  constructor() {
    this.app = express();
    this.environment = getEnv("NODE_ENV") || "prod";
    this.port = getEnvPort() || 3000;
    this.dbSettings = this.setDBSettings();
  }

  private configureRoutes(): void {
    const { app } = this;

    app.use("/ping", PingPongRouter);
  }

  private setDBSettings(): IConnectionSettings {
    if (this.environment !== "test") return this.getProdDBSettings();
    else return this.getTestDBSettings();
  }

  private getProdDBSettings(): IConnectionSettings {
    return {
      db: getEnv("DB_NAME"),
      user: getEnv("DB_USER"),
      password: getEnv("DB_PWD"),
      host: getEnv("DB_HOST"),
    };
  }

  private getTestDBSettings(): IConnectionSettings {
    return {
      db: getEnv("TEST_DB_NAME"),
      user: getEnv("TEST_DB_USER"),
      password: getEnv("TEST_DB_PWD"),
      host: getEnv("TEST_DB_HOST"),
    };
  }

  public listen(port: number, f: () => void) {
    this.app.listen(port, f);
  }

  public configureApp(): void {
    this.configureRoutes();
  }

  public getApp() {
    return this.app;
  }

  public getAppDBSetttings() {
    return this.dbSettings;
  }
}

const app = new App();
app.configureApp();

export default app;

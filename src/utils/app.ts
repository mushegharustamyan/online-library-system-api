import express from "express";
import { Application } from "express";
import { PingPongRouter } from "../routes/ping";

class App {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public configureApp() {
    const { app } = this;

    app.use("/ping", PingPongRouter);
  }

  public getApp() {
    return this.app;
  }

  public listen(port: number, f: () => void) {
    this.app.listen(port, f);
  }
}

const app = new App();
app.configureApp();

export default app;

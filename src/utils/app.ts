import { Application } from "express";
import { PingPongRouter } from "../routes/ping";

export const configureApp = (app: Application): void => {
  app.use("/ping", PingPongRouter);
};

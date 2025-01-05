import { Request, Response } from "express";
import { PingPongService } from "../services/ping";
import { sendResStatus } from "../utils/reqReq";

export class PingPongController {
  private service: PingPongService;

  constructor() {
    this.service = new PingPongService();
  }

  public pong = (_: Request, res: Response): void => {
    const message = this.service.pong();

    sendResStatus(res, 200, message);
  }
}

import express, { Router } from "express";

const router: Router = express.Router();

import { PingPongController } from "../controllers/ping";

const pingPongController = new PingPongController();

router.get("/", pingPongController.pong);

export { router as PingPongRouter };

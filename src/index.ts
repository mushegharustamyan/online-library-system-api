import express from "express";
import dotenv from "dotenv"
import { configureApp } from "./utils/app";
import { getEnv } from "./utils/reqReq";

const app = express();
dotenv.config()

configureApp(app);

const port = getEnv("PORT");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

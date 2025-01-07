import dotenv from "dotenv";
dotenv.config();
import { getEnvPort } from "./utils/reqReq";
import app from "./utils/app";

const port: number = getEnvPort() || 3000;

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});

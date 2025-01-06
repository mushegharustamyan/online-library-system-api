import dotenv from "dotenv";
import { getEnv } from "./utils/reqReq";
import app from "./utils/app";

dotenv.config();

const port: number = getEnv("PORT") || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

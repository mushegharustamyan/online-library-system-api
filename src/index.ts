import dotenv from "dotenv";
dotenv.config({ path: `${process.cwd()}/.env`, debug: true });

import app from "./utils/app";
import mySequelize from "./db/sequelize";
import mysqlService from "./db/mysql";

const { port } = app;
const sequelize = mySequelize.getSequelize();

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  await mysqlService.connectionInit();

  await sequelize?.sync();
});

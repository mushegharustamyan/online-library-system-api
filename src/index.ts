import dotenv from "dotenv";
dotenv.config();

import app from "./utils/app";
import mySequelize from "./db/sequelize";
import mysqlService from "./db/mysql-config";

const { port } = app;
const sequelize = mySequelize.getSequelize();

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  await mysqlService.connectionInit();

  await sequelize?.sync();
});

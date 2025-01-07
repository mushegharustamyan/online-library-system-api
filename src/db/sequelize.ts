import { Sequelize } from "sequelize";
import { getEnv } from "../utils/reqReq";

const DB_NAME = getEnv("DB_NAME");
const DB_USER = getEnv("DB_USER");
const DB_PWD = getEnv("DB_PWD");
const DB_HOST = getEnv("DB_HOST");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
  host: DB_HOST,
  dialect: "mysql",
});

export default sequelize;

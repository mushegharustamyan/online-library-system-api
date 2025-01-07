import { createConnection } from "mysql2";
import { getEnv } from "../utils/reqReq";

const connectionInit = async () =>
  new Promise((resolove, reject) => {
    const connection = createConnection({
      host: getEnv("DB_HOST"),
      user: getEnv("DB_USER"),
      password: getEnv("DB_PWD"),
      port: 3306,
      charset: "utf8",
    });

    connection.query("CREATE DATABASE IF NOT EXISTS library", (err, res) => {
      if (err) reject(err);

      resolove(res);
    });
  });

export default connectionInit;

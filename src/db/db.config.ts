import { getEnv } from "../utils/reqReq";

export const getDBConfig = (env: string) => {
  try {
    const dbConfigs = {
      dev: {
        db: getEnv("DB_NAME"),
        user: getEnv("DB_USER"),
        password: getEnv("DB_PWD"),
        host: getEnv("DB_HOST"),
      },
      test: {
        db: getEnv("TEST_DB_NAME"),
        user: getEnv("TEST_DB_USER"),
        password: getEnv("TEST_DB_PWD"),
        host: getEnv("TEST_DB_HOST"),
      },
    };

    return dbConfigs[env];
  } catch (e) {
    console.log(e);
  }
};

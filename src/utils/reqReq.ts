import { Response } from "express";

export const sendResStatus = (
  res: Response,
  status: number,
  message: string = ""
) => {
  if (message === "") {
    switch (status) {
      case 200:
        message = "Success";
        break;
      case 201:
        message = "Record created";
        break;
      case 202:
        message = "Waiting for approval";
        break;
      case 204:
        message = "Record deleted";
        break;
      case 400:
        message = "Missing required fileds";
        break;
      case 401:
        message = "Unauthorized";
        break;
      case 403:
        message = "Access denied";
        break;
      case 404:
        message = "Record not found";
        break;
      case 409:
        message = "Record already exists";
        break;
      case 500:
        message = "Internal server error";
        break;
      default:
        message = "Unknown error";
    }
  }

  res.statusMessage = message;
  res.status(status).send(message);
};

export const sendResBody = (
  res: Response,
  status: number = 200,
  body: object
) => {
  res.statusMessage = "success";
  res.status(status).json(body);
};

export const getEnvPort = (): number => {
  const port = parseInt(process.env.PORT || "3000", 10);

  if (!port) throw new Error(`Invalid port number`);

  return Number(process.env.PORT);
};

export const getEnv = (key: string): string => {
  if (!process.env[key]) throw new Error(`Missing environment variable ${key}`);

  return String(process.env[key]);
};

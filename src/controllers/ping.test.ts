import request from "supertest";
import app from "../utils/app";

describe("Ping Route", () => {
  it("Should return 'Pong' with status 200 when GET /ping is called", async () => {
    const server = app.getApp();

    const response = await request(server).get("/ping");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Pong");
  });
});

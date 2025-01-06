import { PingPongService } from "./ping";

describe("Ping Pong Service", () => {
  it("should return 'Pong' when pong() is called", () => {
    const service = new PingPongService();
    expect(service.pong()).toBe("Pong");
  });
});

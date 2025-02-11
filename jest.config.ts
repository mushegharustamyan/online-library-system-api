export default {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  setupFiles: ["./jest.setup.ts"],
};

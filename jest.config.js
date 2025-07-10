// jest.config.js
module.exports = {
  roots: ["<rootDir>/src/js"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testEnvironment: "jsdom"
};
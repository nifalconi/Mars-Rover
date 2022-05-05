module.exports = {
  moduleFileExtensions: ["js"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  coverageDirectory: "./coverage",
  collectCoverageFrom: ["src/**/*.js"],
  testRegex: "((\\.|/*.)(spec))\\.js?$",
  setupFilesAfterEnv: ["./setupTests.js"],
  coveragePathIgnorePatterns: [
    "index.js",
    "jest.config.js",
  ],
  testEnvironment: "jsdom",
  coverageThreshold: {
    global: {
      branches: 5,
      functions: 5,
      lines: 5,
    },
  },
};

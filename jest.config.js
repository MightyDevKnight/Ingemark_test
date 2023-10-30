module.exports = {
  modulePaths: ["<rootDir>/src", "node_modules"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass|jpg|jpeg|png)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  snapshotSerializers: ["@emotion/jest/serializer"],
  "transformIgnorePatterns": [],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          target: "es2021",
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};

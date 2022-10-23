const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testPathIgnorePatterns: [
    "/node_modules/",
    "__tests__/setupTests.ts",
    "/.next/",
    "/slices/",
    "/customtypes/",
    "/.slicemachine/",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(scss|css|sass)": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*spec.tsx",
    "!src/**/_document.tsx",
    "!src/**/_app.tsx",
  ],
  coverageReporters: ["lcov", "json"],
};

module.exports = async () => {
  const asyncConfig = createJestConfig(customJestConfig);
  const config = await asyncConfig();
  const transformIgnorePatterns = ["node_modules/(?!axios)/"];
  return { ...config, transformIgnorePatterns };
};


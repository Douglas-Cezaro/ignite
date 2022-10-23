module.exports = {
  testIgnorePatterns: [
    "/node_modules/",
    "/.next/",
    "/slices/",
    "/customtypes/",
    "/.slicemachine/",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
};


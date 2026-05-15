module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'babel-jest',
  },
  testMatch: ['**/src/**/*.spec.(ts|tsx)'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: ['**/src/**/*.{ts,tsx}', '!**/src/**/*.spec.{ts,tsx}', '!**/node_modules/**'],
  moduleNameMapper: {
    '\\.module\\.css$': '<rootDir>/jest.styleMock.js',
    '\\.css$': '<rootDir>/jest.styleMock.js',
  },
};

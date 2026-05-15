/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

export default {
  testEnvironment: 'jsdom',
  displayName: 'web',
  collectCoverage: false,
  coverageDirectory: './coverage/',
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.spec.{ts,tsx}', '!**/*.stories.{ts,tsx}'],
  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      {
        configFile: '../../.babelrc.js',
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.module\\.css$': path.resolve(__dirname, '../../jest.styleMock.js'),
    '\\.css$': path.resolve(__dirname, '../../jest.styleMock.js'),
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};

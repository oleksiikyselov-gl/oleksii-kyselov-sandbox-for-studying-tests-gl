export default {
  testEnvironment: 'jsdom',
  displayName: 'authorization',
  collectCoverage: false,
  coverageDirectory: './coverage/',
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.spec.{ts,tsx}', '!**/*.stories.{ts,tsx}'],
  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      {
        configFile: '../../../.babelrc.js',
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

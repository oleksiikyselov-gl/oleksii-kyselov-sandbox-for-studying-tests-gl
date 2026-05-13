export default {
  testEnvironment: 'jsdom',
  displayName: 'authorization',
  collectCoverage: true,
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
    '^@ex-tope-nt/icons$': '@ex-tope-nt/icons/mocks',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: './coverage/',
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.spec.{ts,tsx}', '!**/*.stories.{ts,tsx}'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

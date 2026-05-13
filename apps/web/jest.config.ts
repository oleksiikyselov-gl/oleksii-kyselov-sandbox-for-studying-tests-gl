import config from '../../packages/jest-preset/jest.config';
import type { Config } from 'jest';

const jestConfig: Config = {
  ...config,
  rootDir: '.',
  setupFilesAfterEnv: ['./src/jest.setup.js'],
};

export default jestConfig;

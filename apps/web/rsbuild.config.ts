import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: './src/index.tsx',
    },
  },
  output: {
    assetPrefix: '/oleksii-kyselov-sandbox-for-studying-tests-gl/',
  },
});

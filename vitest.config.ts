import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['packages/create-cap/**/*.test.(ts|tsx)'],
    testTimeout: 20000,
    coverage: {
      reporter: ['lcov', 'text'],
    },
  },
  esbuild: {
    target: 'node14',
  },
});

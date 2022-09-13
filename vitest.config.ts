import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['packages/cli/**/*.test.(ts|tsx)'],
    testTimeout: 20000,
    coverage: {
      reporter: ['lcov'],
    },
  },
  esbuild: {
    target: 'node14',
  },
});

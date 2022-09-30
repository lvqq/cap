import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['packages/create-cap/**/*.test.(ts|tsx)'],
    testTimeout: 30000,
    coverage: {
      reporter: ['lcov', 'text'],
    },
    globalSetup: ['./scripts/vitestGlobalSetup.ts'],
  },
  esbuild: {
    target: 'node14',
  },
});

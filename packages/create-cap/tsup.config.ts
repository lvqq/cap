import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['bin/cap.ts'],
  format: ['esm'],
  target: 'node18',
});

import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['bin/cap.ts'],
  format: ['cjs'],
  target: 'node14',
});

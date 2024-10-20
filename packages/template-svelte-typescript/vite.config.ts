/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), svelteTesting()],
  test: {
    testTimeout: 20000,
    environment: 'jsdom',
  },
});

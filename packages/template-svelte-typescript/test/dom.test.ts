import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import App from '../src/App.svelte';

describe('dom-test', () => {
  test('app', () => {
    render(App);
    expect(screen.getByText('Vite + Svelte')).toBeDefined();
  });
});

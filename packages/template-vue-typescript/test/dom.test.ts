import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import App from '../src/App.vue';

describe('dom-test', () => {
  test('app', () => {
    render(App);
    expect(screen.getByText('Vite + Vue')).toBeDefined();
  });
});

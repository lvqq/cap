import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('dom-test', () => {
  test('app', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeDefined();
  });
});

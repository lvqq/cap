import { describe, expect, test } from 'vitest';
import { a } from '../src';

describe('unit-test', () => {
  test('index', () => {
    expect(a).toBe(1);
  });
});

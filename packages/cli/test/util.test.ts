import { describe, expect, Mock, test, vi } from 'vitest';
import { Log } from '../src/utils';

describe('util-test', () => {
  test('Log', () => {
    expect(Log.fail('test for log fail')).toBe(undefined);
    expect(Log.success('test for log success')).toBe(undefined);
    expect(Log.info('test for log info')).toBe(undefined);
    expect(Log.warn('test for log warn')).toBe(undefined);
  });
});

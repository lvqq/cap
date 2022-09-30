import { describe, expect, test, vi } from 'vitest';
import { Log } from '../src/utils';

describe('util-test', () => {
  test('Log', () => {
    expect.assertions(4);

    const LogFailSpy = vi.spyOn(Log, 'fail');
    Log.fail('test for log fail');
    expect(LogFailSpy).toHaveBeenCalled();

    const LogSuccessSpy = vi.spyOn(Log, 'success');
    Log.success('test for log success');
    expect(LogSuccessSpy).toHaveBeenCalled();

    const LogInfoSpy = vi.spyOn(Log, 'info');
    Log.info('test for log info');
    expect(LogInfoSpy).toHaveBeenCalled();

    const LogWarnSpy = vi.spyOn(Log, 'warn');
    Log.warn('test for log warn');
    expect(LogWarnSpy).toHaveBeenCalled();
  });
});

import { describe, expect, test, vi } from 'vitest';
import { existsSync, promises as fs } from 'node:fs';
import path from 'node:path';
import { Log, cp } from '../src/utils';

const cwd = process.cwd();

describe('util-test', () => {
  test('Log', () => {
    expect.assertions(4);

    const LogErrorSpy = vi.spyOn(Log, 'error');
    Log.error('test for log error');
    expect(LogErrorSpy).toHaveBeenCalled();

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

  test('cp', async () => {
    await fs.mkdir(path.join(cwd, 'output/copy/dir'), { recursive: true });
    await fs.writeFile('output/copy/test.js', 'hello world!', 'utf-8');
    await fs.writeFile('output/copy/dir/test.js', 'hello world!', 'utf-8');
    await cp(path.join(cwd, 'output/copy'), path.join(cwd, 'output/paste'));
    expect(existsSync(path.join(cwd, 'output/paste/test.js'))).toBeTruthy();
    expect(existsSync(path.join(cwd, 'output/paste/dir/test.js'))).toBeTruthy();
  });

  test('cp failed', async () => {
    await expect(
      cp(path.join(cwd, 'output/not_exist_path'), path.join(cwd, 'output/paste'))
    ).rejects.toThrowError(/no such file or directory/);
  });
});

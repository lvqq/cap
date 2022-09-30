import { describe, expect, test, vi } from 'vitest';
import axios from 'axios';
import { create } from '../src';

vi.mock('axios', () => ({
  default: {
    get: vi.fn().mockRejectedValue(new Error('test message')),
  },
}));
vi.mock('fs', () => ({
  default: {
    promises: {
      rm: vi.fn(),
      mkdir: vi.fn(),
      readFile: vi.fn(() => ''),
      writeFile: vi.fn(),
    },
    existsSync: vi.fn(() => true),
  },
}));

describe('create-error-test', () => {
  test('create-repeat', async () => {
    expect.assertions(1);
    const axiosSpy = vi.spyOn(axios, 'get');
    await create('output', { template: 'ts' });
    expect(axiosSpy).toHaveBeenCalledTimes(0);
  });

  test('create-fetch-template-failed', async () => {
    expect.assertions(1);
    const axiosSpy = vi.spyOn(axios, 'get');
    await create('output', { force: true, template: 'ts' });
    expect(axiosSpy).toHaveBeenCalledTimes(1);
  });
});

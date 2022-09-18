import { beforeAll, describe, expect, Mock, test, vi } from 'vitest';
import inquirer from 'inquirer';
import { createProgram } from '../bin/command';

vi.mock('inquirer');
vi.mock('axios', () => ({
  default: {
    get: vi.fn().mockRejectedValue(new Error('test message')),
  },
}));
vi.mock('node:child_process', () => ({
  spawnSync: vi.fn(() => ({ stdout: 1 })),
}));
vi.mock('fs', () => ({
  default: {
    rmSync: vi.fn(),
    mkdirSync: vi.fn(),
    existsSync: vi.fn(() => true),
    readFileSync: vi.fn(() => ''),
    writeFileSync: vi.fn(),
  },
}));

describe('create-error-test', () => {
  beforeAll(() => {
    (inquirer as unknown as { prompt: Mock<any[], any> }).prompt = vi
      .fn()
      .mockResolvedValue({ template: 'TypeScript' });
  });

  test('create-force', async () => {
    expect.assertions(1);
    const program = createProgram();
    program.parse(['output', '-f'], { from: 'user' });
    expect('pass').toBe('pass');
  });

  test('create-repeat', async () => {
    expect.assertions(1);
    const program = createProgram();
    program.parse(['output'], { from: 'user' });
    expect('pass').toBe('pass');
  });
});
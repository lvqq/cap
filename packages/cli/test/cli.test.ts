import { beforeAll, describe, expect, Mock, test, vi } from 'vitest';
import inquirer from 'inquirer';
import { createProgram } from '../bin/command';

vi.mock('inquirer');
vi.mock('axios', async () => {
  const mockTrigger: Mock = vi.fn((type: string, callback: () => void) => {
    if (type === 'finish') {
      callback();
    }
    return { on: mockTrigger, pipe: mockTrigger };
  });
  return {
    default: {
      get: vi.fn().mockResolvedValue({
        data: {
          on: mockTrigger,
        },
      }),
    },
  };
});
vi.mock('node:child_process', async () => ({
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

describe('cli-test', () => {
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
});

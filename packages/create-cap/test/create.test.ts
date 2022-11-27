import { beforeAll, describe, expect, Mock, test, vi } from 'vitest';
import inquirer from 'inquirer';
import fs from 'node:fs';
import { create } from '../src';

vi.mock('inquirer');

const testDir = './output/force';
const betaDir = './output/beta';

describe('create-test', () => {
  beforeAll(async () => {
    (inquirer as unknown as { prompt: Mock<any[], any> }).prompt = vi
      .fn()
      .mockResolvedValue({ template: 'ts' });
  });

  test('create-force', async () => {
    expect.assertions(1);
    await create(testDir, { force: true });
    expect(fs.existsSync(`${testDir}/package.json`)).toBeTruthy();
  });

  test('create-beta', async () => {
    expect.assertions(1);
    await create(betaDir, { force: true, beta: true });
    expect(fs.existsSync(`${betaDir}/package.json`)).toBeTruthy();
  });
});

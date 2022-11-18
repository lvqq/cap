import { describe, expect, test } from 'vitest';
import fs from 'node:fs';
import { create } from '../src';

const testDir = {
  ts: './output/template.ts',
  'react-ts': './output/template.react-ts',
  'vue-ts': './output/template.vue-ts',
  'svelte-ts': './output/template.svelte-ts',
};

describe('create-template-test', () => {
  test('ts', async () => {
    expect.assertions(2);
    await create(testDir.ts, { force: true, template: 'ts' });
    expect(fs.existsSync(`${testDir.ts}/package.json`)).toBeTruthy();
    expect(fs.existsSync(`${testDir.ts}/.gitignore`)).toBeTruthy();
  });

  test('react-ts', async () => {
    expect.assertions(2);
    await create(testDir['react-ts'], { force: true, template: 'react-ts' });
    expect(fs.existsSync(`${testDir['react-ts']}/package.json`)).toBeTruthy();
    expect(fs.existsSync(`${testDir['react-ts']}/.gitignore`)).toBeTruthy();
  });

  test('vue-ts', async () => {
    expect.assertions(2);
    await create(testDir['vue-ts'], { force: true, template: 'vue-ts' });
    expect(fs.existsSync(`${testDir['vue-ts']}/package.json`)).toBeTruthy();
    expect(fs.existsSync(`${testDir['vue-ts']}/.gitignore`)).toBeTruthy();
  });

  test('svelte-ts', async () => {
    expect.assertions(2);
    await create(testDir['svelte-ts'], { force: true, template: 'svelte-ts' });
    expect(fs.existsSync(`${testDir['svelte-ts']}/package.json`)).toBeTruthy();
    expect(fs.existsSync(`${testDir['svelte-ts']}/.gitignore`)).toBeTruthy();
  });
});

import { describe, expect, test } from 'vitest';
import fs from 'node:fs';
import { create } from '../src';

const testDir = {
  ts: './output/template-ts',
  'react-ts': './output/template-react-ts',
  'vue-ts': './output/template-vue-ts',
  'svelte-ts': './output/template-svelte-ts',
};

describe('create-template-test', () => {
  test('ts', async () => {
    const dir = testDir.ts;
    expect.assertions(4);
    await create(dir, { force: true, template: 'ts' });
    expect(fs.existsSync(`${dir}/package.json`)).toBeTruthy();
    expect(fs.existsSync(`${dir}/.gitignore`)).toBeTruthy();
    const packageJson = await import(`${dir}/package.json`);
    expect(packageJson.version).toEqual('0.0.0');
    expect(packageJson.scripts.prepare).toEqual('husky install');
  });

  test('react-ts', async () => {
    const dir = testDir['react-ts'];
    expect.assertions(4);
    await create(dir, { force: true, template: 'react-ts' });
    expect(fs.existsSync(`${dir}/package.json`)).toBeTruthy();
    expect(fs.existsSync(`${dir}/.gitignore`)).toBeTruthy();
    const packageJson = await import(`${dir}/package.json`);
    expect(packageJson.version).toEqual('0.0.0');
    expect(packageJson.scripts.prepare).toEqual('husky install');
  });

  test('vue-ts', async () => {
    const dir = testDir['vue-ts'];
    expect.assertions(4);
    await create(dir, { force: true, template: 'vue-ts' });
    expect(fs.existsSync(`${dir}/.gitignore`)).toBeTruthy();
    expect(fs.existsSync(`${dir}/package.json`)).toBeTruthy();
    const packageJson = await import(`${dir}/package.json`);
    expect(packageJson.version).toEqual('0.0.0');
    expect(packageJson.scripts.prepare).toEqual('husky install');
  });

  test('svelte-ts', async () => {
    const dir = testDir['svelte-ts'];
    expect.assertions(4);
    await create(dir, { force: true, template: 'svelte-ts' });
    expect(fs.existsSync(`${dir}/.gitignore`)).toBeTruthy();
    expect(fs.existsSync(`${dir}/package.json`)).toBeTruthy();
    const packageJson = await import(`${dir}/package.json`);
    expect(packageJson.version).toEqual('0.0.0');
    expect(packageJson.scripts.prepare).toEqual('husky install');
  });
});

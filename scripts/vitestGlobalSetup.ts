import fs from 'node:fs';
import path from 'node:path';

const testDir = path.resolve(process.cwd(), 'output');

export const setup = async () => {
  if (!fs.existsSync(testDir)) {
    await fs.promises.mkdir(testDir);
  }
};

export const teardown = async () => {
  if (fs.existsSync(testDir)) {
    await fs.promises.rm(testDir, { recursive: true });
  }
};

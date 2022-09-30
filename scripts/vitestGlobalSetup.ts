import fs from 'node:fs';

export const setup = async () => {
  if (!fs.existsSync('output')) {
    await fs.promises.mkdir('output');
  }
};

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const init = async () => {
  // init empty for .husky in template
  const pkgs = await fs.promises.readdir('./packages');
  pkgs
    .filter((dir) => dir.match(/template-.*/))
    .forEach((dir) => {
      const gitDir = path.join('packages', dir, '.git');
      if (!fs.existsSync(gitDir)) {
        fs.promises.mkdir(gitDir);
      }
    });
};

init();

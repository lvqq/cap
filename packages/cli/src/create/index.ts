import chalk from 'chalk';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';

import { GitIgnoreFile, TemplatesNameMap } from '../constants';
import { downloadFromNpmToDir, Log } from '../utils';
import { questionTemplate } from './inquirer';

export const create = async (dir: string, options: { force: boolean }) => {
  const { force } = options;
  const { template } = await questionTemplate();
  const templatePkg = TemplatesNameMap[template as keyof typeof TemplatesNameMap];
  if (fs.existsSync(dir)) {
    if (!force) {
      Log.fail(`Directory ${dir} already exists, please use anothor name or add --force option.`);
      return;
    }
    fs.rmSync(dir, { recursive: true });
  }
  fs.mkdirSync(dir);
  const spinner = ora(chalk.blueBright('Fetch template start')).start();
  try {
    await downloadFromNpmToDir(templatePkg, dir);
    const pkgPath = path.join(dir, 'package.json');
    if (fs.existsSync(pkgPath)) {
      // write .gitignore file
      fs.writeFileSync(path.join(dir, '.gitignore'), GitIgnoreFile);
      // handle package.json name/version
      const pkgText = fs.readFileSync(pkgPath);
      fs.writeFileSync(
        pkgPath,
        pkgText
          .toString()
          .replace(/"name": "(.*)"/g, ($1, $2) => $1.replace($2, dir))
          .replace(/"version": "(.*)"/g, ($1, $2) => $1.replace($2, '0.1.0'))
      );
      spinner.succeed(chalk.greenBright(`Install template success. Try the following steps:`));
      Log.info(`cd ${dir} & npm install`);
    } else {
      throw new Error('no package found');
    }
  } catch (e: any) {
    spinner.fail(chalk.redBright(`Fetch template failed, ${e.message}`));
  }
};

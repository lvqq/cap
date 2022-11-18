import chalk from 'chalk';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';
import { TemplatesNameMap } from './constants';
import type { TemplatesNameKey } from './constants';
import { downloadFromNpmToDir, Log, cp } from './utils';
import { questionTemplate } from './inquirer';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);
const cwd = process.cwd();

export const create = async (name: string, options?: { force?: boolean; template?: string }) => {
  const dir = path.resolve(cwd, name);
  const { force, template } = options || {};
  let templatePkg = '';
  if (template) {
    templatePkg = TemplatesNameMap[template as TemplatesNameKey];
  }
  if (!templatePkg) {
    const { template: templateAnswer } = await questionTemplate();
    templatePkg = TemplatesNameMap[templateAnswer as TemplatesNameKey];
  }
  if (fs.existsSync(dir)) {
    if (!force) {
      Log.error(`Directory ${name} already exists, please use anothor name or add --force option.`);
      return;
    }
    await fs.promises.rm(dir, { recursive: true });
  }
  await fs.promises.mkdir(dir);

  const spinner = ora(chalk.blueBright('Fetch template start')).start();
  try {
    await downloadFromNpmToDir(templatePkg, dir);
    const pkgPath = path.join(dir, 'package.json');
    if (fs.existsSync(pkgPath)) {
      // cp files under public directory
      await cp(path.resolve(__dirname, '../public'), dir);
      // handle package.json name/version
      const pkgText = await fs.promises.readFile(pkgPath);
      await fs.promises.writeFile(
        pkgPath,
        pkgText
          .toString()
          .replace(/"name": "(.*)"/g, ($1, $2) => $1.replace($2, name))
          .replace(/"version": "(.*)"/g, ($1, $2) => $1.replace($2, '0.0.0'))
      );
      spinner.succeed(chalk.greenBright(`Install template success. Try the following steps:`));
      Log.info(`\ncd ${name} \nnpm install`);
    } else {
      throw new Error('no package found');
    }
  } catch (e: any) {
    spinner.fail(chalk.redBright(`Fetch template failed, ${e?.message || e}`));
  }
};
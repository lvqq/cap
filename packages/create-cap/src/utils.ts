/* eslint-disable no-console */
import chalk from 'chalk';
import { spawnSync } from 'node:child_process';
import { existsSync, promises as fs, constants } from 'node:fs';
import path from 'node:path';
import axios from 'axios';
import tar from 'tar';
import merge from 'lodash.merge';

export class Log {
  static success(...message: string[]) {
    console.log(chalk.greenBright(...message));
  }

  static warn(...message: string[]) {
    console.log(chalk.yellowBright(...message));
  }

  static info(...message: string[]) {
    console.log(chalk.blueBright(...message));
  }

  static error(...message: string[]) {
    console.log(chalk.redBright(...message));
  }
}

export const isWin = process.platform === 'win32';

export const downloadFromNpmToDir = (pkg: string, dir: string, beta = false) =>
  new Promise<void>((resolve, reject) => {
    const result = spawnSync(
      'npm',
      ['view', `${pkg}@${beta ? 'beta' : 'latest'}`, 'dist.tarball'],
      {
        stdio: 'pipe',
        shell: isWin,
      },
    );
    if (result?.stdout) {
      const url = result.stdout.toString().trim();
      axios
        .get(url, { responseType: 'stream' })
        .then((res) => {
          const { data: zip } = res;
          zip
            .on('error', reject)
            .pipe(
              tar.x({
                C: dir,
                cwd: dir,
                strip: 1,
              }),
            )
            .on('finish', resolve);
        })
        .catch((e: unknown) => {
          reject(e);
        });
      return;
    }
    reject(new Error('no package found'));
  });

export const cp = async (source: string, target: string): Promise<void> => {
  const mode = constants.COPYFILE_FICLONE;
  try {
    if (!existsSync(target)) {
      await fs.mkdir(target, { recursive: true });
    }
    const sourceStat = await fs.stat(source);
    const targetStat = await fs.stat(target);
    if (targetStat.isDirectory()) {
      if (sourceStat.isFile()) {
        const basename = path.basename(source);
        await fs.copyFile(source, path.join(target, basename), mode);
        return;
      }
      if (sourceStat.isDirectory()) {
        const dirs = await fs.readdir(source);
        await Promise.all(
          dirs.map(async (dir) => {
            const subSource = path.join(source, dir);
            const subSourceStat = await fs.stat(subSource);
            if (subSourceStat.isFile()) {
              await cp(subSource, target);
              return;
            }
            if (subSourceStat.isDirectory()) {
              const subTarget = path.join(target, dir);
              if (!existsSync(subTarget)) {
                await fs.mkdir(subTarget, { recursive: true });
              }
              await cp(subSource, subTarget);
            }
          }),
        );
      }
    }
  } catch (e: any) {
    Log.error(`Copy paste failed, `, e);
    throw e;
  }
};

export const JSONParse = (str: string | null) => {
  try {
    return str ? JSON.parse(str) : str;
  } catch (e) {
    return str;
  }
};

export const setJsonFileFromDir = async (
  dir: string,
  configs: Record<string, unknown>,
): Promise<void> => {
  const file = await fs.readFile(dir, 'utf-8');
  const json = JSONParse(file.toString());
  const result = merge(json, configs);
  await fs.writeFile(dir, JSON.stringify(result, null, 2));
};

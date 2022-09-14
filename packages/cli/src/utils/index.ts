import chalk from 'chalk';
import { spawnSync } from 'node:child_process';
import axios from 'axios';
import tar from 'tar';

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

  static fail(...message: string[]) {
    console.log(chalk.redBright(...message));
  }
}

export const isWin = process.platform === 'win32';

export const downloadFromNpmToDir = (pkg: string, dir: string) =>
  new Promise<void>((resolve, reject) => {
    const result = spawnSync('npm', ['view', `${pkg}@latest`, 'dist.tarball'], {
      stdio: 'pipe',
      shell: isWin,
    });
    if (result?.stdout) {
      const url = result.stdout.toString().trim();
      axios
        .get(url, { responseType: 'stream' })
        .then(({ data: zip }) => {
          zip
            .on('error', reject)
            .pipe(
              tar.x({
                C: dir,
                strip: 1,
              })
            )
            .on('finish', resolve);
        })
        .catch((e: any) => {
          reject(e);
        });
      return;
    }
    reject(new Error('no package found'));
  });

import { Command } from 'commander';
import * as pkg from '../package.json';
import { create } from '../src';

const createProgram = () => {
  const program = new Command();

  program.version(pkg.version);
  program.usage('<command> [options]');

  program.arguments('<command>').action(() => program.outputHelp());

  program
    .command('create')
    .description('create awesome project by one line command ')
    .argument('<name>', 'Project name')
    .option('-f, --force', 'Force to create project which will delete exist directory', false)
    .action((name, options) => create(name, options));

  return program;
};

export { createProgram };

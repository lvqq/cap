import { Command } from 'commander';
import * as pkg from '../package.json';
import { create } from '../src';

const createProgram = () => {
  const program = new Command();

  program.version(pkg.version);
  program.usage('<name> [options]');

  program
    .description('create awesome project by one line of command ')
    .argument('<name>', 'Project name')
    .option('-f, --force', 'Force to create project which will delete exist directory', false)
    .option('-t, --template <template>', 'Create project from a template')
    .option('--beta', 'Create project from a template with beta tag', false)
    .action((name, options) => create(name, options));

  return program;
};

export { createProgram };

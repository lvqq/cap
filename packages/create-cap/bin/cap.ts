#!/usr/bin/env node
import { createProgram } from './command';

process.on('unhandledRejection', (err) => {
  throw err;
});

const program = createProgram();
program.parse(process.argv);

import inquirer from 'inquirer';
import { QuestionTemplatesNameMap } from '../constants';

export const questionTemplate = () =>
  inquirer.prompt([
    {
      name: 'template',
      message: 'Select a template',
      type: 'list',
      choices: Object.keys(QuestionTemplatesNameMap),
    },
  ]);

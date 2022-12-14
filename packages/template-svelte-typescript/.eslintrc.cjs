/* eslint-disable global-require */
module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'svelte3', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
  rules: {
    'prettier/prettier': 'error',
    'no-multiple-empty-lines': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
  },
};

[![npm version](https://img.shields.io/npm/v/@tooltik/create-cap.svg)](https://www.npmjs.com/package/@tooltik/create-cap) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/lvqq/cap/CI) [![Coverage Status](https://coveralls.io/repos/github/lvqq/cap/badge.svg?branch=main)](https://coveralls.io/github/lvqq/cap?branch=main) ![GitHub](https://img.shields.io/github/license/lvqq/cap)

# Guide
Cap means **create awesome project**, it has some common engineering configurations built in. You can create a project with one line of command.

# Usage
```bash
# npm
npm create @tooltik/cap my-cap-app

# yarn
yarn create @tooltik/cap my-cap-app

# pnpm
pnpm create @tooltik/cap my-cap-app
```

# Common configurations
- `TypeScript`
- `eslint`
- `prettier`
- `husky`
- `lint-staged`
- `vitest`
- `github workflow`

# Templates
We have two templates currently:
- TypeScript
- React + TypeScript

## TypeScript
Use `tsup` to build project using only `TypeScript`

## React + TypeScript
Use `vite` to build project using `React` and `TypeScript`

# Dev
Run the following script before your first install
```bash
pnpm run init
```

Then install
```bash
pnpm install
```

Link cli after build
```bash
pnpm build

cd packages/cli

pnpm link --global
```

Dev cli watch
```bash
pnpm dev
```

Run test
```bash
pnpm test
```

# License
[MIT](https://github.com/lvqq/cap/blob/main/LICENSE)
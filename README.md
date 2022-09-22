# cap

[![npm version](https://img.shields.io/npm/v/@tooltik/create-cap.svg)](https://www.npmjs.com/package/@tooltik/create-cap) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/lvqq/cap/CI) [![Coverage Status](https://coveralls.io/repos/github/lvqq/cap/badge.svg?branch=main)](https://coveralls.io/github/lvqq/cap?branch=main) ![GitHub](https://img.shields.io/github/license/lvqq/cap)

cap means **create awesome project**, it has some common engineering configurations built in. You can create a project with one line of command.

## Usage
```bash
# npm
npm create @tooltik/cap my-cap-app
# yarn
yarn create @tooltik/cap my-cap-app
# pnpm
pnpm create @tooltik/cap my-cap-app
```

You can also directly specify the template:

```bash
# npm
npm create @tooltik/cap my-cap-app --template ts
# yarn
yarn create @tooltik/cap my-cap-app --template ts
# pnpm
pnpm create @tooltik/cap my-cap-app --template ts
```
supported templates: `ts`, `react-ts`, `vue-ts`, `svelte-ts`

## Common configurations
- `TypeScript`
- `eslint`
- `prettier`
- `husky`
- `lint-staged`
- `vitest`
- `github workflow`

## Templates
We have three templates currently:

### ts
Use `tsup` to build project using only `TypeScript`

### react-ts
Use `vite` to build project using `React18` and `TypeScript`

### vue-ts
Use `vite` to build project using `Vue3` and `TypeScript`

### svelte-ts
Use `vite` to build project using `Svelte3` and `TypeScript`

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

cd packages/create-cap

pnpm link --global
```

Go back to root and run dev cli watch
```bash
pnpm dev-create
```

Make changes and run test
```bash
pnpm test
```

# License
[MIT](https://github.com/lvqq/cap/blob/main/LICENSE)
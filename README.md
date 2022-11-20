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
We have the following templates:

### ts
Use `tsup` to build project using only `TypeScript`

### react-ts
Use `vite` to build project using `React18` and `TypeScript`

### vue-ts
Use `vite` to build project using `Vue3` and `TypeScript`

### svelte-ts
Use `vite` to build project using `Svelte3` and `TypeScript`

# Development
Install with `--ignore-scripts` option or it will fail
```bash
pnpm install --ignore-scripts

# Or
pnpm run install
```

Link cli after build
```bash
pnpm build && pnpm --dir ./packages/create-cap link --global
```

Make changes, run build or watch mode
```bash
# run build
pnpm build-create

# run dev watch
pnpm dev-create
```

Run all test
```bash
pnpm test && pnpm test:template
```

# Publish
```bash
npm run publish --filter=<pkg>
```

# License
[MIT](https://github.com/lvqq/cap/blob/main/LICENSE)
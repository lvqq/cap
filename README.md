# cap

[![npm version](https://img.shields.io/npm/v/create-cap.svg)](https://www.npmjs.com/package/create-cap) ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/lvqq/cap/ci.yml?branch=main) [![Coverage Status](https://coveralls.io/repos/github/lvqq/cap/badge.svg?branch=main)](https://coveralls.io/github/lvqq/cap?branch=main) ![node-current (scoped)](https://img.shields.io/node/v/create-cap) ![GitHub](https://img.shields.io/github/license/lvqq/cap)

cap means **create awesome project**, it has some common engineering configurations built in. You can create a project with one line of command.

## Usage
```bash
# npm
npm create cap my-cap-app
# yarn
yarn create cap my-cap-app
# pnpm
pnpm create cap my-cap-app
```

You can also directly specify the template:

```bash
# npm
npm create cap my-cap-app --template react-ts
# yarn
yarn create cap my-cap-app --template react-ts
# pnpm
pnpm create cap my-cap-app --template react-ts
```

Supported templates: `ts`, `react-ts`, `vue-ts`, `svelte-ts`, `astro-ts`

## Common configurations
- `TypeScript`
- `ESLint`
- `Prettier`
- `Husky`
- `Lint-Staged`
- `Vitest`
- `Github Workflow`

## Templates
We have the following templates:

### ts
Use `tsup` to build project using only `TypeScript`

### react-ts
Use `vite` to build project using `React18` and `TypeScript`

### vue-ts
Use `vite` to build project using `Vue3` and `TypeScript`

### svelte-ts
Use `vite` to build project using `Svelte4` and `TypeScript`

# Development
First run install
```bash
pnpm install
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
## latest
```bash
pnpm -F=<pkg> publish
```

## beta
```bash
pnpm -F=<pkg> publish --tag beta
```

# License
[MIT](https://github.com/lvqq/cap/blob/main/LICENSE)

export const QuestionTemplatesNameMap = {
  TypeScript: '@tooltik/template-typescript',
  'React + TypeScript': '@tooltik/template-react-typescript',
  'Vue + TypeScript': '@tooltik/template-vue-typescript',
} as const;

export const CliTemplatesNameMap = {
  ts: '@tooltik/template-typescript',
  'react-ts': '@tooltik/template-react-typescript',
  'vue-ts': '@tooltik/template-vue-typescript',
} as const;

export const GitIgnoreFile = `
# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Coverage
coverage

# Compiled
build
dist

# Dependency directories
node_modules

# OS X temporary files
.DS_Store

# VSCode settings
.vscode
`;
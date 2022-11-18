export const TemplatesNameMap = {
  ts: '@tooltik/template-typescript',
  'react-ts': '@tooltik/template-react-typescript',
  'vue-ts': '@tooltik/template-vue-typescript',
  'svelte-ts': '@tooltik/template-svelte-typescript',
} as const;

export type TemplatesNameKey = keyof typeof TemplatesNameMap;

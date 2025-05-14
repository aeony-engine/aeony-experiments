import { defineConfig, globalIgnores } from 'eslint/config';
import aeonyConfig from '@aeony/eslint-config';

export default defineConfig([
  globalIgnores(['./dist/**', 'node_modules/**', 'eslint.config.mjs']),
  ...aeonyConfig,
  {
    rules: {
      'import/no-unresolved': [2, { ignore: ['\^love$', '\^love.'] }],
    },
  },
]);

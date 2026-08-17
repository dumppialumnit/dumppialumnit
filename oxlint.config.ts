import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'warn',
  },
  options: {
    typeAware: true,
  },
  rules: {
    'eslint/no-unused-vars': 'error',
  },
});

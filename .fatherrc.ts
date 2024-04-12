import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    transformer: 'esbuild',
  },
  cjs: {
    input: 'src',
    platform: 'node',
    transformer: 'esbuild',
  },
  prebundle: {},
  alias: {
    '@/': './src/',
  },
});

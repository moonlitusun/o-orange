import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'o-orange',
  hash: true,
  outputPath: 'dist',
  history: {
    type: 'hash',
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/ld/o-orange/',
  mode: 'doc',
  mfsu: {
    development : {
      output : "./.mfsu-dev",
    },
    // production : {
    //   output : "./.mfsu-prod",
    // }
  },
  favicon: './images/dz-logo.jpg',
  logo: './images/dz-logo.jpg',
});

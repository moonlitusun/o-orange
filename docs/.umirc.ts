import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'o-orange',
  hash: true,
  outputPath: 'dist',
  history: {
    type: 'hash',
  },
  publicPath: '/',
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

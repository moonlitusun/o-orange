import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'o-orange',
  hash: true,
  outputPath: 'dist',
  history: {
    type: 'hash',
  },
  publicPath: '/ld/o-orange/',
  mode: 'doc',
  mfsu: {
    development : {
      output : "./.mfsu-dev",
    },
    // production : {
    //   output : "./.mfsu-prod",
    // }
  },
  themeConfig: {
    repository: {
       url: '',
       branch: 'master',
       platform: 'github',
     },
   },
  favicon: './images/dz-logo.jpg',
  logo: './images/dz-logo.jpg',
});

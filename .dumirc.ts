import { defineConfig } from 'dumi';

const publicPath = process.env.NODE_ENV === 'development' ? '/' : '/ld/o-orange/';

export default defineConfig({
  publicPath,
  mfsu: false,
  hash: true,
  base: publicPath,
  outputPath: 'docs/dist',
  themeConfig: {
    name: 'o-orange',
    favicon: `${publicPath}images/dz-logo.jpg`,
    logo: `${publicPath}images/dz-logo.jpg`,
  },
});

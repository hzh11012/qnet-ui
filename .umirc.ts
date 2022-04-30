import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Qnet UI',
  mode: 'site',
  outputPath: 'doc-site',
  hash: true,
  history: {
    type: 'hash'
  },
  navs: [null],
  fastRefresh: {},
  publicPath: './'
});

import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Qnet UI',
  logo: 'https://ftp.qnets.cn/qnetui/ziran.png',
  favicon: 'https://ftp.qnets.cn/qnetui/ziran.png',
  mode: 'site',
  outputPath: 'doc-site',
  hash: true,
  history: {
    type: 'hash'
  },
  navs: [null],
  fastRefresh: {},
  publicPath: './',
  styles: [
    `
    .__dumi-default-layout-hero {
      background: url(https://ftp.qnets.cn/qnetui/bg.png) no-repeat 100% / cover !important;
    }`
  ]
});

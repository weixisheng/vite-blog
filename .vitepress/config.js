import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "hishion blog",
  description: "web front-end development engineer",
  base: '/vite-blog/',
  head: [
    ['link', { rel: 'icon', href: '/vite-blog/svg/favicon.svg' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', items: [
        { text: '前端基础', link: '/basic/' },
        { text: '小程序', link: '/mp/' },
        { text: 'Vue', link: '/vue/' },
        { text: 'uni-app', link: '/uni/life' },
        { text: 'SCSS/LESS', link: '/scss/' },
        { text: 'Git', link: '/git/' },
        { text: '前端编码规范', link: '/standard/' },
        { text: '工具', link: '/tool/' },
        { text: 'Linux', link: '/linux/' },
        { text: '网络', link: '/http/' },
        { text: 'GraphQL', link: '/graphql/' },
        { text: '其他', link: '/other/' },
      ] }
    ],

    sidebar: [
      {
        text: '前端基础',
        collapsed: true,
        items: [
          { text: '30秒能理解的代码', link: '/basic/index' },
          { text: '基础概念', link: '/basic/concept' }
        ]
      },
      {
        text: '小程序',
        collapsed: true,
        items: [
          { text: '小程序开发资料', link: '/mp/index' },
          { text: '小程序demo', link: '/mp/demo' },
        ]
      },
      {
        text: 'Vue',
        collapsed: true,
        items: [
          { text: 'Vue原理解析', link: '/vue/index' }
        ]
      },
      {
        text: 'SCSS/LESS',
        collapsed: true,
        items: [
          { text: 'scss/less编译', link: '/scss/index' },
          { text: 'sass相关', link: '/scss/about' }
        ]
      },
      {
        text: 'Git',
        collapsed: true,
        items: [
          { text: 'Git命令', link: '/git/index' },
          { text: 'Git提交规范', link: '/git/commit' },
          { text: '分支重命名', link: '/git/rename' },
          { text: 'Git emoji', link: '/git/emoji' },
        ]
      },
      {
        text: '前端规范',
        collapsed: true,
        items: [
          { text: '前端编码规范', link: '/standard/index' }
        ]
      },
      {
        text: '工具',
        collapsed: true,
        items: [
          { text: 'markdown语法', link: '/tool/index' },
          { text: 'VSCode', link: '/tool/vscode' },
          { text: 'HBuilder', link: '/tool/hbuilder' },
          { text: '扩展程序', link: '/tool/extensions' },
          { text: 'Cmder', link: '/tool/cmder' },
          { text: '镜像', link: '/tool/mirror' },
          { text: 'npm发包', link: '/tool/npm' },
          { text: '自定义脚手架', link: '/tool/cli' },
          { text: '字体文件转base64', link: '/tool/iconfont' },
          { text: '自动cmd命令', link: '/tool/autocmd' },
          { text: 'yarn命令', link: '/tool/yarn' },
          { text: 'package version说明', link: '/tool/package-version' },
          { text: '移动端调试工具', link: '/tool/debug' },
        ]
      },
      {
        text: 'Linux知识',
        collapsed: true,
        items: [
          { text: 'linux命令', link: '/linux/index' },
          { text: '安装nodejs', link: '/linux/node' },
          { text: 'Linux实用命令', link: '/linux/useful-command' },
        ]
      },
      {
        text: '网络知识',
        collapsed: true,
        items: [
          { text: 'GET和POST的区别', link: '/http/index' },
          { text: '加速Github访问', link: '/http/accelerate' },
          { text: 'HTTP缓存', link: '/http/cache' },
          { text: 'HTTP2', link: '/http/http2' },
        ]
      },
      {
        text: 'GraphQL',
        collapsed: true,
        items: [
          { text: 'GraphQL知识', link: '/graphql/index' }
        ]
      },
      {
        text: '其他',
        collapsed: true,
        items: [
          { text: '驾照', link: '/other/index' },
          { text: '英语俗语', link: '/other/english' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/weixisheng' }
    ],
    search: {
      provider: 'local'
    }
  }
})

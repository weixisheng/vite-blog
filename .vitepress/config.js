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
          { text: 'scss/less编译', link: '/scss/index' }
        ]
      },
      {
        text: 'Git',
        collapsed: true,
        items: [
          { text: 'git基础', link: '/git/index' }
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
          { text: 'markdown语法', link: '/tool/index' }
        ]
      },
      {
        text: 'Linux知识',
        collapsed: true,
        items: [
          { text: 'linux命令', link: '/linux/index' }
        ]
      },
      {
        text: '网络知识',
        collapsed: true,
        items: [
          { text: 'GET和POST的区别', link: '/http/index' }
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
          { text: '驾照', link: '/other/index' }
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

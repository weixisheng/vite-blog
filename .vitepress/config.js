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
        { text: '前端基础', link: '/docs/basic/' },
        { text: '小程序', link: '/docs/mp/' },
        { text: 'Vue', link: '/docs/vue/' },
        { text: 'uni-app', link: '/docs/uni/life' },
        { text: 'SCSS/LESS', link: '/docs/scss/' },
        { text: 'Git', link: '/docs/git/' },
        { text: '前端编码规范', link: '/docs/standard/' },
        { text: '工具', link: '/docs/tool/' },
        { text: '工具', link: '/docs/AI/' },
        { text: 'Linux', link: '/docs/linux/' },
        { text: '网络', link: '/docs/http/' },
        { text: 'GraphQL', link: '/docs/graphql/' },
        { text: '其他', link: '/docs/other/' },
      ] }
    ],

    sidebar: [
      {
        text: '前端基础',
        collapsed: true,
        items: [
          { text: '30秒能理解的代码', link: '/docs/basic/index' },
          { text: '基础概念', link: '/docs/basic/concept' },
          { text: 'JavaScript设计模式', link: '/docs/basic/design-patterns' },
          { text: 'JS 面试题', link: '/docs/basic/this-scope' },
          { text: '字符串截取三把斧', link: '/docs/basic/string-slice' },
          { text: '数字精度', link: '/docs/basic/number' },
          { text: 'new操作符', link: '/docs/basic/custom-new' },
          { text: '防抖和节流', link: '/docs/basic/debounce-throttle' },
          { text: '创建对象', link: '/docs/basic/object' },
          { text: '继承', link: '/docs/basic/prototype' },
          { text: 'this对象', link: '/docs/basic/this' },
          { text: '手写原生方法', link: '/docs/basic/custom-function' },
          { text: '浏览器输入URL过程', link: '/docs/basic/url-render' },
          { text: '代码简洁之道', link: '/docs/basic/clean-code' },
          { text: '脚本延迟', link: '/docs/basic/script-defer-async' }
        ]
      },
      {
        text: '小程序',
        collapsed: true,
        items: [
          { text: '小程序开发资料', link: '/docs/mp/index' },
          { text: '小程序demo', link: '/docs/mp/demo' },
          { text: '小程序自定义tabbar', link: '/docs/mp/custom-tabbar' },
          { text: '小程序画布应用', link: '/docs/mp/canvas' },
          { text: '小程序云函数', link: '/docs/mp/cloud' },
          { text: '小程序API Mock', link: '/docs/mp/mock' },
          { text: '获取系统栏信息', link: '/docs/mp/getSystemInfo' },
          { text: 'uni-app生命周期', link: '/docs/uni/life' },
          { text: 'uni cli模式配置eslint', link: '/docs/uni/eslint' },
          { text: '滚动到顶部', link: '/docs/uni/tabbar-top' },
          { text: '卡片式轮播图之小程序实现', link: '/docs/uni/swiper' },
          { text: '拖拽客服组件', link: '/docs/uni/custom-service' }
        ]
      },
      {
        text: 'Vue',
        collapsed: true,
        items: [
          { text: 'Vue原理解析', link: '/docs/vue/index' },
          { text: 'Vue规范指南', link: '/docs/vue/guide' }, 
          { text: '自动加载文件', link: '/docs/vue/auto' }, 
          { text: 'Vue插槽', link: '/docs/vue/slot' }, 
          { text: 'Vue优化', link: '/docs/vue/optimizing' }, 
          { text: 'Vue Element table二次封装', link: '/docs/vue/table' }, 
          { text: '卡片式轮播图之后台实现', link: '/docs/vue/swiper' }, 
          { text: 'Vue项目配置eslint', link: '/docs/vue/eslint' },
        ]
      },
      {
        text: 'SCSS/LESS',
        collapsed: true,
        items: [
          { text: 'scss/less编译', link: '/docs/scss/index' },
          { text: 'sass相关', link: '/docs/scss/about' }
        ]
      },
      {
        text: 'Git',
        collapsed: true,
        items: [
          { text: 'Git命令', link: '/docs/git/index' },
          { text: 'Git提交规范', link: '/docs/git/commit' },
          { text: '分支重命名', link: '/docs/git/rename' },
          { text: 'Git emoji', link: '/docs/git/emoji' },
        ]
      },
      {
        text: '前端规范',
        collapsed: true,
        items: [
          { text: '前端编码规范', link: '/docs/standard/index' }
        ]
      },
      {
        text: '工具',
        collapsed: true,
        items: [
          { text: 'markdown语法', link: '/docs/tool/index' },
          { text: 'VSCode', link: '/docs/tool/vscode' },
          { text: 'HBuilder', link: '/docs/tool/hbuilder' },
          { text: '扩展程序', link: '/docs/tool/extensions' },
          { text: 'Cmder', link: '/docs/tool/cmder' },
          { text: '镜像', link: '/docs/tool/mirror' },
          { text: 'npm发包', link: '/docs/tool/npm' },
          { text: '自定义脚手架', link: '/docs/tool/cli' },
          { text: '字体文件转base64', link: '/docs/tool/iconfont' },
          { text: '自动cmd命令', link: '/docs/tool/autocmd' },
          { text: 'yarn命令', link: '/docs/tool/yarn' },
          { text: 'package version说明', link: '/docs/tool/package-version' },
          { text: '移动端调试工具', link: '/docs/tool/debug' },
        ]
      },
      {
        text: 'AI 合集',
        collapsed: true,
        items: [
          { text: 'AI 合集', link: '/docs/AI/index' }
      },
      {
        text: 'Linux知识',
        collapsed: true,
        items: [
          { text: 'linux命令', link: '/docs/linux/index' },
          { text: '安装nodejs', link: '/docs/linux/node' },
          { text: 'Linux实用命令', link: '/docs/linux/useful-command' },
        ]
      },
      {
        text: '网络知识',
        collapsed: true,
        items: [
          { text: 'GET和POST的区别', link: '/docs/http/index' },
          { text: '加速Github访问', link: '/docs/http/accelerate' },
          { text: 'HTTP缓存', link: '/docs/http/cache' },
          { text: 'HTTP2', link: '/docs/http/http2' },
        ]
      },
      {
        text: 'GraphQL',
        collapsed: true,
        items: [
          { text: 'GraphQL知识', link: '/docs/graphql/index' }
        ]
      },
      {
        text: '其他',
        collapsed: true,
        items: [
          { text: '驾照', link: '/docs/other/index' },
          { text: '英语俗语', link: '/docs/other/english' }
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

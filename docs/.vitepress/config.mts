import { defineConfig } from 'vitepress'
import topNav from '../topNav'
import { vitePressNote } from '../siderbar/index'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "张牧之的nodejs知识库",
  description: "部署网站",
  //添加图标
  head: [['link', { rel: 'icon', href: '/public/favicon.ico' }]],
  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  lastUpdated: true, // string | boolean
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //添加logo
    logo: '/public/logo.png',
    //隐藏logo右边的文字
    siteTitle: false,
    //头部导航栏配置
    nav: topNav,
    //左侧导航栏配置
    sidebar: vitePressNote,
    //社交连接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    lastUpdatedText: "最后更新", // string
  },

})

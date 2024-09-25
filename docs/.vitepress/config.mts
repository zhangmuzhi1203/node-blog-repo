import { defineConfig } from 'vitepress'
import navigation from '../navigation'
import { vitePressNote } from '../siderbar/index'
export default defineConfig({
  title: "张牧之的知识文档合集",
  description: "部署网站",
  //添加图标
  head: [['link', { rel: 'icon', href: 'https://img.picui.cn/free/2024/09/06/66dac6dc01e2b.ico' }]],
  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  lastUpdated: true, // string | boolean
  themeConfig: {
    //添加logo
    logo: 'https://img.picui.cn/free/2024/09/06/66dac6dbec314.png',
    //隐藏logo右边的文字
    siteTitle: false,
    //顶部导航栏配置
    nav: navigation,
    //左侧导航栏配置
    sidebar: vitePressNote,
    //社交连接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    lastUpdatedText: "最后更新", // string
  },

})

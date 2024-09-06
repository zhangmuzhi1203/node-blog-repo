// VitePress技术笔记左侧导航栏
export const vitePressNote = {
  '/topNote/node': [
    {
      text: 'NodeJS',
      items: [
        { text: 'node配置', link: '/topNote/node/page1' },
        { text: 'buffer(缓冲区)', link: '/topNote/node/page2' },
        { text: 'fs(文件系统)', link: '/topNote/node/page3' },
        { text: 'path', link: '/topNote/node/page4' },
        { text: 'http', link: '/topNote/node/page5' },
        { text: 'module', link: '/topNote/node/page6' },
        { text: 'os', link: '/topNote/node/page7' },
        { text: 'process(进程)', link: '/topNote/node/page8' },
        { text: 'child_process(子进程)', link: '/topNote/node/page9' },
        { text: 'events(事件触发器)', link: '/topNote/node/page10' },
        { text: 'utils', link: '/topNote/node/page11' },
        { text: 'crypto', link: '/topNote/node/page12' },
      ]
    }
  ],
  '/topNote/express': [
    {
      text: 'Express',
      items: [
        { text: '使用express生成器去创建项目', link: '/topNote/express/page1' },
        { text: '基本使用', link: '/topNote/express/page2' },
        { text: 'express生成器app.js文件解析', link: '/topNote/express/page3' },
        { text: '中间件', link: '/topNote/express/page4' },
        { text: '获取请求参数', link: '/topNote/express/page5' }
      ]
    }
  ],
  '/topNote/mongodb': [
    {
      text: 'mongodb',
      // items: [
      //   { text: 'Index', link: '/topNote/mongodb/page1' },
      //   { text: 'Three', link: '/topNote/mongodb' },
      //   { text: 'Four', link: '/topNote/mongodb' }
      // ]
    }
  ],
  '/topNote/git': [{
    text: 'Git',
    items: [
      { text: '初始化设置', link: '/topNote/git/page1' },
      { text: '创建仓库相关命令', link: '/topNote/git/page2' },
      { text: '四个区域', link: '/topNote/git/page3' },
      { text: 'git文件中的状态', link: '/topNote/git/page4' },
      { text: '添加和提交文件', link: '/topNote/git/page5' },
      { text: 'git reset回退版本', link: '/topNote/git/page6' },
      { text: '使用git diff查看差异', link: '/topNote/git/page7' },
      { text: '删除文件', link: '/topNote/git/page8' },
      { text: 'SSH配置和克隆远程仓库', link: '/topNote/git/page9' },
      { text: '关联本地仓库和远程仓库', link: '/topNote/git/page10' },
      { text: '分支Branch', link: '/topNote/git/page11' },
      { text: '解决合并冲突', link: '/topNote/git/page12' },
      { text: '回退和rebase', link: '/topNote/git/page13' },
    ]
  }]

}
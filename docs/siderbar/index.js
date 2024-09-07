// VitePress技术笔记左侧导航栏
export const vitePressNote = {
  '/topNote/node': [
    {
      text: 'NodeJS',
      items: [
        { text: '1.node配置', link: '/topNote/node/page1' },
        { text: '2.buffer(缓冲区)', link: '/topNote/node/page2' },
        { text: '3.fs(文件系统)', link: '/topNote/node/page3' },
        { text: '4.path', link: '/topNote/node/page4' },
        { text: '5.http', link: '/topNote/node/page5' },
        { text: '6.module', link: '/topNote/node/page6' },
        { text: '7.os', link: '/topNote/node/page7' },
        { text: '8.process(进程)', link: '/topNote/node/page8' },
        { text: '9.child_process(子进程)', link: '/topNote/node/page9' },
        { text: '10.events(事件触发器)', link: '/topNote/node/page10' },
        { text: '11.utils', link: '/topNote/node/page11' },
        { text: '12.crypto', link: '/topNote/node/page12' },
        { text: '13.nodejs集成redis', link: '/topNote/node/page13' },
      ]
    }
  ],
  '/topNote/express': [
    {
      text: 'Express',
      items: [
        { text: '1.使用express生成器去创建项目', link: '/topNote/express/page1' },
        { text: '2.基本使用', link: '/topNote/express/page2' },
        { text: '3.express生成器app.js文件解析', link: '/topNote/express/page3' },
        { text: '4.中间件', link: '/topNote/express/page4' },
        { text: '5.获取请求参数', link: '/topNote/express/page5' },
        { text: '6.express集成redis', link: '/topNote/express/page6' },
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
  '/topNote/typescript': [
    {
      text: 'TypeScript',
      items: [
        { text: '1.初始化与编译', link: '/topNote/typescript/page1' },
        { text: '2.类型声明', link: '/topNote/typescript/page2' },
        { text: '3.类型总览', link: '/topNote/typescript/page3' },
        { text: '4.基础类型(原始类型)', link: '/topNote/typescript/page4' },
        { text: '5.任意类型(any和known)', link: '/topNote/typescript/page5' },
      ]
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
# 初始化与编译

1. 全局安装

   ```tsx
   npm install -g typescript
   ```

2. 安装库更方便后续操作

   ```tsx
   npm i ts-node -g//ts-node 是一个在 Node.js 环境中运行 TypeScript 代码的工具
   npm i @types/node -D//@types/node 是一个 TypeScript 类型定义包，提供了 Node.js 核心模块的 TypeScript 类型声明。
   ```

3. 自动化编译

   ```tsx
   //第一步 
   tsc -init //工程中会生成tsconfig.json配置文件
   //第二步 监听目录中的.ts文件变化
   tsc --watch / ts -w
   //第三步 小优化，当编译出错时不生产.js文件 可以直接修改tsconfig.json中的noEmitOnError配置
   ```

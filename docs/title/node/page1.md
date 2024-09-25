# NodeJS
## 一 nodejs的安装及配置

1. 进入官网下载

   ```
   https://nodejs.org/en
   ```

2. 安装目录选择**D:\nodejs** 其他**next**即可 安装完毕自动配置环境变量

3. 在**D**盘的**nodejs**文件夹中新创建两个文件夹分别是 **node_global** (全局模块)和 **node_cahce**(全局缓存信息)

   **注意：**如何不这样进行如下配置也是可以去使用**nodejs**的 只是使用**全局模块**会安装到c盘**C:\Users\asus\AppData\Roaming\npm**

   因此需要配置全局模块的环境变量和全局缓存信息

   ```
   //设置全局模块安装路径
   npm config set prefix D:\nodejs\node_global
   //设置全局缓存存放路径
   npm config set cache D:\nodejs\node_cache
   ```

4. 环境变量配置 **（很重要）**

   第一步：在系统变量中创建新系统变量 变量名**:NODE_PATH**  变量值:D**:\nodejs\node_global\node_modules**

   第二步：在系统变量中找到**path** 然后新添 变量值:**%NODE_PATH%**

   第三步：在用户变量中找到**path** 然后把默认的变量值:**C:\Users\asus\AppData\Roaming\npm**改成**D:\nodejs\node_global**

5. **最后一步配置完后重启重启重启**

## 二 pnpm的安装及配置

1. 下载pnpm

   ```
   npm install -g pnpm
   ```

2. 安装一些跟pnpm有关的目录文件

   ```
   pnpm config set store-dir "D:\pnpm\storeDir" # pnpm全局仓库路径(类似 .git 仓库)
   pnpm config set global-dir "D:\pnpm\globalDir" # pnpm全局安装路径
   pnpm config set global-bin-dir "D:\pnpm\globalBinDir" # pnpm全局bin路径
   pnpm config set state-dir "D:\pnpm\state" # pnpm创建pnpm-state.json文件的目录
   pnpm config set cache-dir "D:\pnpm\cache" # pnpm全局缓存路径
   ```

3. 第三步 在环境变量中配置**pnpm**的全局**bin**路径

   在系统变量中找到**path**然后新添变量值:**D:\pnpm\globalBinDir**

4. **最重要一步配置完后重启重启重启**

## 三 pnpm与npm常用命令对比

```
pnpm install(安装全局依赖)  npm install
pnpm add -g @vue/cli      npm install -g @vue/cli
npm run脚本                pnpm 脚本
```
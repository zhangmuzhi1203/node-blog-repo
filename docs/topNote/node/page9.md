# NodeJS
## child_process(子进程)

**概念：** 子进程是nodejs核心api，这个功能是非常强大的，因为它允许 Node.js 应用程序可以执行操作系统命令、运行其他应用程序或脚本、以及并行处理任务。通过使用子进程，Node.js 应用可以超越单个 JavaScript 执行线程的限制，利用多核CPU的能力，或者处理那些不需要阻塞事件循环的长时间运行的任务。

**使用场景举例：**

- **并行执行任务** ：利用 Node.js 异步和非阻塞的特性并行处理多个任务，提高应用性能。
- **运行脚本或命令** ：自动化运维任务，如数据库备份、清理日志文件等。
- **调用其他程序的能力** ：例如，从 Node.js 应用中调用 Python 脚本进行数据分析或图像处理。
- **负载分散** ：在处理CPU密集型任务时，可以创建多个子进程分散到不同的 CPU 核心上，避免阻塞事件循环或影响应用性能。

**创建子进程：nodejs创建子进程共有7个api**

1. spawn 执行命令
2. exec 执行命令
3. execFile 执行可执行文件
4. fork 创建node子进程
5. `execSync` 执行命令 同步执行
6. `execFileSync` 执行可执行文件 同步执行
7. `spawnSync` 执行命令 同步执行

**注：exec是底层通过execFile实现 execFile底层通过spawn实现**

**exec（少）与execSync（多）用法**

```js
const { exec, execSync, spawn, spawnSync, execFile, execFileSync, fork } = require('child_process')
//1.exec 异步方法，回调函数，可以帮我们执行shell命令或者和软件交互
//2.execSync 同步方法
//执行较小的shell命令，想要立马拿到结果的shell execSync exec字节上限200kb
//exec('shell命令',options(可选),(err,stdout,stderr)=>{}) stdout成功回调 stderr失败回调
//用法一：获取node版本号
exec('node -v', (err, stdout, stderr) => {
  if (err) {
    return err
  }
  console.log(stdout)
})
//用法二：打开谷歌浏览器 使用exec可以打开一些软件例如 wx 谷歌 qq音乐等 以下会打开百度并且进入无痕模式
execSync('start chrome http://www.baidu.com --incognito')
```

**spawn（多）与spawnSync（少）用法**

```js
const { exec, execSync, spawn, spawnSync, execFile, execFileSync, fork } = require('child_process')
//1.spawn 用于执行一些实时获取的信息因为spawn返回的是流边执行边返回，
//exec是返回一个完整的buffer，buffer的大小是200k，如果超出会报错，而spawn是无上限的。
//spawn在执行完成后会抛出close事件监听，并返回状态码，通过状态码可以知道子进程是否顺利执行。
//exec只能通过返回的buffer去识别完成状态，识别起来较为麻烦
//2.spawnSync用的比较少
//      标准返回流         命令        参数 配置（可选）
const { stdout } = spawn('netstat', ['-a'])
//返回的数据用data事件接收
stdout.on('data', (stream) => {
  console.log(stream.toString())
})
stdout.on('close', (msg) => {
  console.log('实时获取完毕')
})
```

**execFile（多）与execFileSync（少）用法**

```js
const { execFile, execFileSync } = require('child_process')
//execFile作用是执行可执行脚本 用的多
//execFile 适合执行可执行文件，例如执行一个node脚本，
//或者shell文件，windows可以编写cmd脚本，posix，可以编写sh脚本
execFile(path.resolve(process.cwd(), './bat.cmd'), null, (err, stdout) => {
  console.log(stdout.toString())
})
```

**fork用法**

./fork.js

```js
const { fork } = require('child_process')
//只能接受js模块
//场景适合大量的计算，或者容易阻塞主进程操作的一些代码，就适合开发fork 
//这行代码使用了 child_process 模块的 fork 方法来创建一个新的 Node.js 进程。
//这个新进程将会独立运行指定的脚本文件 test.js。这里，fork 方法是 child_process 模块的一部分，
//专门用于创建从 Node.js 父进程派生的新 Node.js 子进程。
const testProcess = fork('./test.js')
//向子进程发消息
// testProcess.send('我是主进程')
//接受子进程发来的消息
testProcess.on('message', (msg) => {
  console.log('接受子进程发来的消息：' + msg)
})
```

./test.js

```js
//接受父进程发来的消息
process.on('message', (msg) => {
  console.log('子进程接受到的消息是：' + msg)
})
//向父进程发消息
process.send('我是子进程')
```
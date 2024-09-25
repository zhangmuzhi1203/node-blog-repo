# NodeJS
## process(进程)

**概念：** 操作当前进程和控制当前进程的api，并且是挂载到globalThis下的全局API（就是说这个api不需要调用直接可以引用）

**注意：** 在浏览器环境中，全局作用域的对象是 `window`，而在 Node.js 环境中则是 `global`。

```js
//1.获取操作系统cpu架构 x64
console.log(process.arch)
//2.获取执行进程后面的参数 返回是一个数组
console.log(process.argv)
//3.获取当前工作目录 D:\nodejscode\nodejscode学习\code 也可以和path拼接代替__dirname使用
console.log(process.cwd())
//4.获取当前进程的内存使用情况。
console.log(process.memoryUsage)
//5.将强制进程尽快退出，即使仍有未完全完成的异步操作挂起
setTimeout(() => {
  console.log('5秒后执行')
}, 5000)
setTimeout(() => {
  process.exit()//此代码会让 五秒后的定时器无法执行
}, 2000)
//6.process.on() 方法是用来为进程对象注册事件监听器的。
//可以监听进程级别的各种事件，如 exit、uncaughtException(捕获未处理的异常)和SIGINT信号(例如用户按下CTRL+C),message(消息)
process.on('exit', () => {
  console.log('进程2秒结束')
})
//7.与exit类似，kill用来杀死一个进程，接受一个参数进程id可以通过process.pid 获取
console.log(process.pid)
process.kill(process.pid)
//8.用于读取操作系统所有的环境变量，也可以修改和查询环境变量。
//修改 注意修改并不会真正影响操作系统的变量，而是只在当前线程生效，线程结束便释放。
console.log(process.env)
```


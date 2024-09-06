# NodeJS
## os

**概念：** os模块可以与操作系统进行交互

```js
const os = require('node:os')
//获取操作系统平台 win32
console.log(os.platform())
//获取操作系统的版本 10.0.19045
console.log(os.release())
//获取当前操作系统的版本信息 Windows 10 Home China
console.log(os.version())
//获取当前操作系统的类型 Windows_NT
console.log(os.type())
//获取用户目录 C:\Users\asus 
console.log(os.homedir())
//获取cpu的架构 x64
console.log(os.arch())
//获取cpu的线程以及详细信息
console.log(os.cpus())
//获取cpu的线程的个数
console.log(os.cpus().length)
//获取网络信息
console.log(os.networkInterfaces())
```


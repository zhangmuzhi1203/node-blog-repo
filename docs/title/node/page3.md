# NodeJS
## fs(文件系统)

**概念：** 可以实现与硬盘的交互，例如文件的创建，删除，修改，移动，重命名，读取还有文件夹的相关操作

**1.写入文件：writeFile()=>参数有 file:写入的文件名 data:待写入的数据 options:选项设置(可选) callback:回调 异步写入 无返回值**

```js
//1.导入fs内置模块
const fs = require('node:fs')
//2.fs异步写入 writeFile()
fs.writeFile('./test.txt', '三人行必有我师焉', err => {
  if (err) throw err
  console.log('成功写入')
})
```

**2.追加文件方法一：appendFile()=>作用是在文件尾部追加内容语法与写入文件一样异步写入无返回值**

```js
//1.导入模块
const fs = require('node:fs')
//2.追加文件 \n可以实现追加内容换行
fs.appendFile('./test.txt', '\n择其善者而从之', err => {
  if (err) throw err
  console.log('追加成功')
})
```

**3.追加文件方法二：利用writeFile()的第三个参数实现**

```js
//1.导入模块
const fs = require('node:fs')
//2.使用writeFile()的第三个参数{flag:'a'}
fs.writeFile('./test.txt', '\n测试', { flag: 'a' }, err => {
  if (err) throw err
  console.log(11)
})
```

**4.流式写入：createWriteStream() 返回值Object 参数file：写入文件路径 options：配置对象（可选）**

```js
//1.导入模块
const fs = require('node:fs')
//创建写入流对象
let ws = fs.createWriteStream('./流式写入.txt')
ws.write('一二三四五\n')
ws.write('上山打老虎\n')
//关闭通道（可选）
ws.end()
```

流式适用于大文件且频繁操作的文件 

**5.文件读取：readFile() 参数有 file：读取路径 options：配置对象（可选） callback：回调 异步读取 无返回值 同步读取有返回值**

```js
//1.导入fs模块
const fs = require('node:fs')
//2.使用readFile()异步读取
fs.readFile('./test.txt', 'utf-8', (err, data) => {
  if (err) throw err
  console.log(data)
})
```

**6.流式读取：createReadStream()参数有file：读取路径 options：配置对象（可选）有返回值Object**

```js
//1.导入fs模块
const fs = require('node:fs')
//2.创建流式读取对象
let rs = fs.createReadStream('./流式写入.txt')
//3.每次取出 64k 数据后执行一次 data 回调
rs.on('data', data => {
  console.log(data)
  console.log(data.length)
})
//4.读取完毕后 执行end回调
rs.on('end', () => {
  console.log('读取完毕')
})
```

**7.文件移动与重命名：rename('文件旧路径'，'文件新路径',回调函数(err) 无返回值**

```js
//1.导入fs模块
const fs = require('node:fs')
//2.使用rename()方法
fs.rename('./文件重命名与移动.txt', '../文件重命名与移动.txt', err => {
  if (err) throw err
  console.log('成功')
})
```

**8.文件删除：unlink('文件路径',err=>{}） 无返回值**

```js
//1.导入fs模块
const fs = require('node:fs')
//2.使用unlink()方法删除文件
fs.unlink('../文件重命名与移动.txt', err => {
  if (err) throw err
  console.log('删除成功')
})
```

**9.创建文件夹：mkdir('文件夹路径',{recursive:true},err=>{}) 若不想递归创建则不使用第二个参数配置项  无返回值**

```js
//1.导入fs模块
const fs = require('node:fs')
//2.使用mkdir()方法创建文件夹 { recursive: true } 递归创建
fs.mkdir('./a/b/c', { recursive: true }, err => {
  if (err) throw err
  console.log('创建成功')
})
```

**10.读取文件夹：readdir('读取文件夹路径',options:配置对象,(err,data)=>{}) 无返回值**

```js
//1.引入fs模块
const fs = require('node:fs')
//2.用readdir()方法去读取文件夹
fs.readdir('./a', (err, data) => {
  if (err) throw err
  console.log(data)
})
```

**11.删除文件夹：rmdir('被删除文件路径',{recursive:true}（递归删除可选）,err=>{}) 无返回值**

```js
//1.导入fs模块
const fs = require('node:fs')
//2.使用rmdir()方法去删除文件 这样删除的是文件夹c  如果是/a 这样删除的是文件abc
fs.rmdir('./a/b/c', { recursive: true }, err => {
  if (err) throw err
  console.log('删除成功')
})
```

**12：查看资源状态：stat('要查看的资源路径'，配置项（可选）,(err,data)=>{}) 无返回值**

```js
//1.引入fs模块
const fs = require('node:fs')
//2.使用stat方法去查看资源状态
fs.stat('./1.helloworld.js', (err, data) => {
  if (err) throw err
  console.log(data)
})
```

> 注：
>
> - `dev`: 设备ID，指的是文件所在的设备的标识符。
>
> - `mode`: 文件模式，包含文件类型和它的权限信息（如是否可读、可写、可执行）。
>
> - `nlink`: 硬链接数，即指向这个文件的目录项数。
>
> - `uid`: 用户ID，文件所有者的用户识别号。
>
> - `gid`: 组ID，文件所有者所在组的组识别号。
>
> - `rdev`: 设备ID，如果这个文件是一个特殊的设备文件，这里会显示设备的ID。
>
> - `blksize`: 文件系统I/O操作的块大小，对性能调优很重要。
>
> - `ino`: 节点号，文件系统内部的唯一标识。
>
> - `size`: 文件大小，单位是字节。
>
> - `blocks`: 分配给文件的块数量，这与文件系统的块大小有关。
>
> - atimeMs mtimeMs ctimeMs birthtimeMs
>
>   : 分别是访问时间、修改时间、状态改变时间和创建时间的毫秒表示。
>
>   - `atime`（Access Time）: 最后访问时间，即最后一次打开或读取文件的时间。
>   - `mtime`（Modify Time）: 最后修改时间，指最后一次修改文件内容的时间。
>   - `ctime`（Change Time）: 状态改变时间，指最后一次修改inode信息（不仅仅是内容，可能是权限或其他属性）的时间。
>   - `birthtime`: 文件的创建时间。
>
> - `atime`, `mtime`, `ctime`, `birthtime`: 上述时间的具体日期和时间表示。

**13：__dirname**

1. `__dirname`与`require`一样都是nodejs环境中的**全局变量**
2. `__dirname`保存着**当前文件所在目录的绝对路径**，可以使用 `__dirname`与文件名拼成绝对路径

```js
const fs = require('node:fs')
let data = fs.readFileSync(__dirname + '/流式写入.txt')//这种是不规范的路径
console.log(__dirname + '/流式写入.txt')
console.log(data)
```

**14.文件复制**

```js
//1.引入fs模块
const fs = require('node:fs')
//2.创建流式读取文件
let rs = fs.createReadStream(__dirname + '/流式写入.txt')
//3.创建流式写入文件
let ws = fs.createWriteStream(__dirname + '/流式写入 copy.txt')
rs.on('data', data => {
  //边读取边写入
  ws.write(data)
})
//关闭rs通道
rs.on('end', () => {
  console.log('读取完毕')
})
//关闭 ws通道
ws.close()
```


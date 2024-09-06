# NodeJS
## path

**概念：**path提供了操作路径的功能

**常用api：**

1. path.resolve()：拼接规范的绝对路径 
2. path.sep：获取操作系统的路径分隔符
3. path.parse()：解析路径并返回对象
4. path.basename()：获取路径的基础名称
5. path.dirname()：获取路径的目录名
6. path.extname()：获取路径的扩展名

```js
const path = require('node:path')
console.log(__dirname + '/1.helloworld.js')//这种是不规范路径 切记是/ 不能是./ 和不写
console.log(path.resolve(__dirname + '/1.helloworld.js'))//规范的绝对路径
const pathFileName = 'D:/nodejscode/nodejscode学习/code1.helloworld.js'
console.log(path.sep)//获取操作系统的路径分隔符
console.log(path.parse(pathFileName))//解析路径并返回对象
console.log(path.basename(pathFileName))//获取路径的基础名称
console.log(path.dirname(pathFileName))//获取路径的目录名
console.log(path.extname(pathFileName))//获取路径的扩展名
```
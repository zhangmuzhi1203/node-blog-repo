# NodeJS
## utils

**概念：util 是Node.js内部提供的很多实用或者工具类型的API，方便我们快速开发。**

```js
import util from 'node:util'
import { exec } from 'node:child_process'
//1.util.promisify使用util的promisify 改为promise 风格 Promiseify 接受 original一个函数体
const execPromise = util.promisify(exec)
execPromise('node -v').then(res => {
  console.log(res, 'res')
}).catch(err => {
  console.log(err, 'err')
})
//2.util.callbackify这个API 正好是 反过来的，将promise类型的API变成 回调函数。
const fn = (type) => {
  if (type == 1) {
    return Promise.resolve('test')
  }
  return Promise.reject('error')
}
const callback = util.callbackify(fn)
callback(1222, (err, val) => {
  console.log(err, val)
})
//3.util.format格式化输出与c的printf一样的
util.format(format, [args])
```


# Express
## 基本使用

```js
//这里的express变量表示导入的express模块
const express = require('express')
//这里的app变量表示是express模块的一个应用实例，由express()函数生成
//app 变量是你用来配置路由、处理中间件、启动服务器等的对象
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

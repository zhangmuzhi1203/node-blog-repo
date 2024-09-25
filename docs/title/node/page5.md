# NodeJS
## http

**操作步骤**

```js
//1.导入http模块
const http = require('http')
//2.创建http服务对象 这两形参必填
//req是对请求报文的封装对象 通过req对象可以获得请求报文的数据
//res是对响应报文的封装对象 通过res对象可以设置响应报文
const server = http.createServer((req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end('你好')//原生返回中文会乱码 需要设置响应头 express:res.send('你好')不需要设置响应头 默认使用utf-8编码
  //res.end('hello http')
})
//3.监听端口 启动服务
server.listen(3000, () => {
  console.log('Server running 3000...')
})
//注：http.createServer()里的回调函数的执行时机：当接受到http请求的时候就会执行
// Http协议默认端口号是80
```

**获取http请求报文**

通过request对象获取请求数据

```js
const http = require('node:http')
const server = http.createServer((req, res) => {
  console.log(req.url)//只能获取路径以及查询字符串，无法获取 URL 中的域名以及协议的内容
  // console.log(req.method)//获取请求方
  // console.log(req.headers)//获取请求头
  //实例化 URL的对象
  let url = new URL(req.url, 'http://127.0.0.1')//这两个参数拼接成一个完整的域名,还可以直接写成一个域名
  console.log(url)//获取url对象
  console.log(url.pathname)//只获取url路径不包括请求参数
  console.log(url.searchParams.get('user'))//获取请求参数key对应的值
  res.end('url')
})

server.listen(3000, () => {
  console.log('启动')
})
```

**http请求练习**

```js
const http = require('node:http')

const server = http.createServer((req, res) => {
  let { url, method } = req
  console.log(url, method)
  res.setHeader('content-type', 'text/html;charset=utf-8')
  //浏览器输入请求根据请求不同返回不同的响应体
  if (url == '/login' && method == 'GET') {
    res.end('登录成功')
  } else if (url == '/register' && method == 'GET') {
    res.end('注册成功')
  } else {
    res.end("<h1>404 Not Found</h1>")
  }
})

server.listen(3000, () => {
  console.log('启动。。。')
})
```

**设置http响应报文**

```js
const http = require('node:http')
const server = http.createServer((req, res) => {
  //设置响应状态码
  res.statusCode = 203 //默认是200
  //设置响应头信息
  res.setHeader('content-type', 'text/html;charset=utf-8')//防止中文乱码
  //设置响应体 res.write()/res.end() 
  //每一个请求 再处理的时候必须要执行end方法 且只能有一个end write可以有多个且能拼接
  res.write('http响应报文')
  res.end('你好')
})
server.listen(3000, () => {
  console.log('启动。。。')
})
```
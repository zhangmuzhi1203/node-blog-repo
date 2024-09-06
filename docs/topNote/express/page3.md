# Express
## express生成器app.js文件解析

```js
//1.变量导入
//导入 http-errors 模块，用于创建 HTTP 错误对象，特别是 404 错误。
var createError = require('http-errors')
//导入 Express 框架，构建 Web 应用程序的基础。
var express = require('express')
//导入 Node.js 内置的 path 模块，用于处理文件和目录路径。
var path = require('path')
//导入 cookie-parser 模块，用于解析客户端发送的 Cookie。
var cookieParser = require('cookie-parser')
//导入 morgan 模块，用于记录 HTTP 请求日志。
var logger = require('morgan')
//导入 cors 模块
var cors = require('cors')
//导入 http 模块
var http = require('http')



//2.路由和应用程序实例
//导入 index 路由，通常定义在 ./routes/index.js 文件中。
var indexRouter = require('./routes/index')
//导入 users 路由，通常定义在 ./routes/users.js 文件中。
var usersRouter = require('./routes/users')
//创建一个新的 Express 应用程序实例。app 变量是你用来配置路由、处理中间件、启动服务器等的对象
var app = express()
//创建端口变量
var port = 3000
//创建http服务对象
var server = http.createServer(app)

//3.视图引擎和静态文件配置
//设置视图文件的路径，将其指向应用程序目录下的 views 文件夹。
app.set('views', path.join(__dirname, 'views'))
//设置视图引擎为 jade（也称为 Pug），用于渲染模板。
app.set('view engine', 'jade')

//4.中间件配置
//使用 morgan 记录 HTTP 请求日志。
app.use(logger('dev'))
//解析请求体中的 JSON 数据。
app.use(express.json())
//解析 URL 编码的数据。
app.use(express.urlencoded({ extended: false }))
//解析 Cookie。
app.use(cookieParser())
//提供静态文件服务，将 public 文件夹中的文件作为静态资源提供。
app.use(express.static(path.join(__dirname, 'public')))
//启用 CORS 将 cors 中间件添加到应用
app.use(cors())

//5.路由设置配置
//将根路径 (/) 绑定到 indexRouter。
app.use('/', indexRouter)
//将 /users 路径绑定到 usersRouter。
app.use('/users', usersRouter)


//6.错误处理配置
//如果没有找到匹配的路由，则创建 404 错误并转发到错误处理程序。
app.use(function (req, res, next) {
  next(createError(404))
})
//这是全局错误处理程序。它处理应用程序中的所有错误，包括 404 和其他错误。
//它根据当前环境是否是开发模式来设置错误消息，并渲染错误页面。
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render('error')
})
//端口监听
server.listen(port, () => {
  console.log('启动。。。')
})

```

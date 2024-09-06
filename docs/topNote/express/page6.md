# Express集成Redis

## 使用 connect-redis 中间件与 express 框架集成

connect-redis 是一个用于将 Redis 作为会话存储的中间件，它可以与 express 框架无缝集成。以下是如何使用 connect-redis 中间件的示例：

```js
npm install redis connect-redis express-session//再express中安装相关依赖
```

```js
const express = require('express')
//引入 express-session 中间件，用于管理和维护用户的会话（session）
const session = require('express-session')
const RedisStore = require('connect-redis').default // 不再传递 session
const redis = require('redis')

// 创建 Redis 客户端
const redisClient = redis.createClient({
  host: 'localhost',//指定 Redis 服务器的主机地址，通常是本地主机。
  port: 6379,//端口号
})
//连接到 Redis 服务器，处理连接时的错误，并打印错误日志
redisClient.connect().catch(console.error)

const app = express()

// 配置 express-session 和 RedisStore
app.use(session({//使用 express-session 中间件进行会话管理。
  store: new RedisStore({ client: redisClient }), // 使用 Redis 作为会话存储
  secret: 'your_secret_key',//会话加密的密钥，防止会话数据被篡改。需要设置为一个复杂的密钥。
  resave: false,//避免每次请求都强制保存会话，只有在会话数据变化时才会保存。
  saveUninitialized: false,//只在会话实际使用时才创建 session，未修改时不保存空会话。
  //secure: false：开发模式下禁用 HTTPS。
  //maxAge: 60000：会话有效期为 60 秒（即 1 分钟）。
  cookie: { secure: false, maxAge: 60000 } // 根据需要配置 cookie 设置
}))

app.get('/', (req, res) => {
  //如果用户已有会话记录 (req.session.views)，则会增加访问次数并返回用户的访问计数。
  if (req.session.views) {
    req.session.views++
    res.send(`Views: ${req.session.views}`)
  } else {
    // 如果用户没有会话（首次访问），则初始化 views 为 1，并返回欢迎信息。
    req.session.views = 1
    res.send('Welcome to the Redis session demo. Refresh to count views!')
  }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
```

这段代码演示了如何结合 Redis 和 Express.js 来存储和管理会话数据。用户每次访问网站时，访问次数会保存在 Redis 中，并通过会话机制提供给用户。


# Nodejs集成Redis

## 一 redis的安装及使用

1. 第一步先在本地电脑下载redis缓存数据库

   ```
   https://github.com/tporadowski/redis/releases
   ```

2. 下载后配置redis环境变量，方便在任何地方中输入redis的启动命令

3. 安装redis完毕后**(这里默认是安装在win环境中)**输入redis服务启动命令

   ```js
   redis-server -h localhost -p 6379 //-h 和-p 可以省略
   ```

   如果出现redis图标则安装成功

4. 打开redis客户端进行连接

   ```js
   redis-cli //输入这个命令在命令行打开redis客户端
   ```

5. 在客户端中输入ping命令来检测redis服务器与redis客户端的连通性

   ```js
   ping //如果返回 pong 则代表连接成功
   ```

**注意事项：** 很重要 开两个dos命令窗口 一个保证redis服务启动 一个连接redis客户端 切记不要关闭redis服务 否则无法连接redis客户端

## 二 nodejs中集成redis

在nodejs中连接redis数据库需要使用到redis客户端模块，在这里我们使用ioredis客户端模块

1. 使用ioredis客户端模块连接redis

   ```js
   npm install ioredis//在项目中安装ioredis依赖
   ```

   ```js
   //前提要在本地电脑上启动redis服务才可以执行以下操作否则报错
   const Redis = require('ioredis')
   const redis = new Redis()
   //通过监听事件来监听redis连接
   redis.on('connect',()=>{
       console.log('redis 连接成功')
   })
   redis.on('error',(err)=>{
       console.error('redis 连接失败：',err)
   })
   ```

2. 常见操作案例

   **写入和读取字符串**

   ```js
   redis.set('name','zmz')
   redis.get('name',(err,res)=>{
       console.log(res)//zmz
   })
   redis.mset('name', 'zmz', 'age', '18', 'gender', 'nan')
   redis.mget(['name', 'age', 'gender'], (err, res) => {
     console.log(res)//[ 'zmz', '18', 'nan' ]
   })
   ```

   **写入和读取哈希**

   哈希数据结构中 是key k-v ...形式 即值是键值对形式

   ```js
   redis.hmset('user:1',{name:'zmz'})
   redis.hgetall('user:1',(err,res)=>{
       console.log(res)//{name:'zmz'}
   })
   redis.hmset('user:1',{name:'zmz',age:18,gender:'nan'})
   redis.hgetall('user:1',(err,res)=>{
       console.log(res)//{name:'zmz',age:18,gender:'nan'}
   })
   ```

   **写入和读取列表**

   ```js
   redis.rpush('num',1,2,3,4,5)//从左开始写入列表
   redis.lrange('num',0,-1,(err,res)=>{//lrange方法获取列表所有元素
       console.log('num:',res)//num: [ '1', '2', '3', '4','5']
   })
   redis.lpush('arr',1,2,3,4,5)//从右开始写入列表
   redis.lrange('arr',0,-1,(err,res)=>{
       console.log('arr:',res)//arr: [ '5', '4', '3', '2', '1' ]
   })
   ```

   **设置键的过期时间**

   ```js
   redis.set('token','abc123','EX',5)//EX参数 表示以秒为单位设置过期时间
   setTimeout(()=>{
       redis.get('token',(err,res)=>{
           console.log(res)
       })
   },5000)//5秒后访问键 此时结果是获取不到
   redis.set('token','abc123')
   redis.expire('token',6)//expire方法给键设置过期时间 这里是6秒后
   setTimeout(()=>{
       redis.get('token',(err,res)=>{
           console.log('token')
       })
   },5000)//5秒后访问该键获取到该键的值
   ```

   
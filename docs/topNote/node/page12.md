# NodeJS
## crypto

crypto模块的目的是为了提供通用的`加密和哈希算法`。用纯JavaScript代码实现这些功能不是不可能，但速度会非常慢。

nodejs用C/C++实现这些算法后，通过crypto这个模块暴露为JavaScript接口，这样用起来方便，运行速度也快。

**对称加密**

```js
//对称加密 导入crypto模块
const crypto = require('node:crypto')
//在使用之前 双方协商定义一个密钥以及iv
//生成一个随机的16字节的初始化向量（IV）
const iv = Buffer.from(crypto.randomBytes(16))
//生成一个随机的32字节的密钥
const key = crypto.randomBytes(32)
//创建加密实例，使用ASE-256-CBC算法 提供密钥和初始化向量
//第一个参数algorithm 接受一个算法
//第二个参数key 就是密钥 32位
//第三个参数 iv 初始化向量 支持16位 保证我们生成的密钥串每次是不一样的 密钥串缺少位数 还可以进行补码
const ci = crypto.createCipheriv('aes-256-cbc', key, iv)
//对输入数据进行加密 并输出加密结果的十六进制表示
ci.update('好好学习', 'utf-8', 'hex')
const result = ci.final('hex')
console.log(result)//4e33dd23f82115e7dba55c074b49ed10
//解密 相同的算法 相同的key 相同的iv
const de = crypto.createDecipheriv('aes-256-cbc', key, iv)
de.update(result, 'hex')
const decrypted = de.final('utf-8')
console.log(decrypted)//好好学习
```

**非对称加密**

```js
//非对称加密
//生成公钥和私钥
//私钥只能是管理员拥有 不能对外公开
//公钥可以对外公开
const crypto = require('node:crypto')
//生成 RSA秘钥对
//第一个参数是指定算法 第二个参数是密钥长度 越长越安全越慢
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048
})
//要加密的数据
const text = '好好学习'
//使用公钥进行加密 第一个参数是公钥进行加密 第二个参数是 publicEncrypt 方法需要一个 Buffer 类型的数据作为输入
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(text, 'utf-8'))
console.log(encrypted)
//使用私钥进行解密
const decrypted = crypto.privateDecrypt(privateKey, encrypted)
console.log(decrypted.toString())//好好学习
```

**哈希函数**

```js
//哈希函数加密
//不能被解密 因为是单向的 不可逆的
//不是说很安全
//具有唯一性
//md5包裹一下存储到数据库 不可能明文存储的
//撞库 去碰你的密码
//读取文件内容 转换成md5 上传给服务端 后端拿到文件内容生成md5
//跟前端md5匹配 如果一致 文件没问题 反之有问题
//校验文件的一致性
const crypto = require('node:crypto')
//要计算哈希的数据
let text = '123456'
//创建哈希对象，并使用md5算法
const hash = crypto.createHash('md5')
//更新哈希对象的数据
hash.update(text)
//计算哈希值，并以十六进制字符串形式输出
const hashValue = hash.digest('hex')
console.log('Text:', text)//Text: 123456
console.log('Hash:', hashValue)//
```


# NodeJS
## events(事件触发器)

**概念：** Node.js核心 API 都是采用异步事件驱动架构，

简单来说就是通过有效的方法来监听事件状态的变化，并在变化的时候做出相应的动作。

Nodejs事件模型采用了，**发布订阅设计模式**

```js
//通过events包返回一个事件触发器
const eventEmitter = require('events')
//创建一个事件触发器对象
const event = new eventEmitter()
//事件触发器是采用的发布订阅模式
//on(订阅事件) emit(发布事件) off(取消订阅事件) once(一次性订阅事件) 第一个参数都要一样 除了emit第二个参数都要一样
const fn = (data) => {
    //接受emit的第二个参数
  console.log(data)
}
//nodejs默认只能监听10个事件
//setMaxListeners(n)可以设置默认监听事件个数
event.setMaxListeners(20)
//setMaxListeners(n)可以设置默认监听事件个数
console.log(event.getMaxListeners())
event.on('test', fn)
//on与off参数要一一对应
event.on('test', fn)
event.once('test', fn)
event.off('test', fn)
event.emit('test', '哈哈哈')
```

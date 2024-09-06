# NodeJS
## buffer(缓冲区)

**概念：** 简而言之 buffer就是一段固定长度的内存空间 用于处理二进制数据  类似于Array的对象

**特点：** 大小固定无法调整  性能较好可直接对计算机内存进行操作  每个元素大小为1byte 

**使用：**

```js
//1.alloc 分配10个字节的空间赋给buf变量
//特点：每次创建都会清0 安全 但是创建速度较allocUnsafe较慢
let buf = Buffer.alloc(10)

//2.allocUnsafe 分配(n)个字节空间赋给buf_2变量
//特点：空间内存会复用不会清零 不安全 但是速度比alloc快
let buf_2 = Buffer.allocUnsafe(1000)

//3.from 根据传入的参数进行空间分配 参数是字符串 数组 数字和对象会报错
//输出的结果:传入的参数->对应的ascll码->16进制输出
let buf_3 = Buffer.from('hello')
let buf_4 = Buffer.from([1, 2, 3, 4, 5])
console.log(buf_1)
```

**操作：**

```js
//1.buffer 与字符串的转换 前提参数为数组
let buf = Buffer.from([105, 2, 3, 4, 5])
//1.1转换：此处toString()是转换成字符串
// console.log(buf.toString())//默认以utf-8的形式转换

//2.通过[]符号进行取值(参数的对应ascll码的16进制输出)与修改
let buf_2 = Buffer.from('hello')
//2.1取值：此处toString(2只能把单个字符转换成2进制
// console.log(buf_2.toString(2))//报错
// console.log(buf_2[0].toString(2))//成功
//2.2修改
buf_2[0] = 95
console.log(buf_2)
console.log(buf_2.toString())

//3.溢出：修改的值数据太大 超过的高位部分被舍去（了解）

//4.中文 utf-8编码的情况下一个中文占3个字节

```


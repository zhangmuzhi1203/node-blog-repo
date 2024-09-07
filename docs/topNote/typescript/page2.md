# 类型声明

使用 `：`来对变量或函数形参，进行类型声明

```js
let a: string  //变量a只能存字符串类型
let b: number  //变量b只能存数值类型
let c: boolean //变量c只能存布尔类型 
a = 'hello' //ok
a = 100//报错 不能将类型number分配给类型string
b = 100//ok
b = '你好'//报错 不能将类型string分配给类型number
c = true//ok
c = 111//报错 不能将类型number分配给类型boolean

//参数x和参数y必须是数字类型，函数返回值必须是数字
function demo(x: number, y: number): number {
  return x + y
}

demo(100, 200)//ok
demo(100, 'a')//报错 类型string的参数不能赋给类型number的参数
demo(100, 200, 300)//报错 应该有2个参数，但获得3个
demo(100)//报错 应该有2个参数，但获得一个

let d: 'hello' //字面量类型(不常用了解即可) d的值只能为'hello'
d = 'ts'//报错 d只能为hello
```

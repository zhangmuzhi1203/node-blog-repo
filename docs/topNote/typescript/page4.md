# 基础类型（原始类型）

1. 数值：**number**

   ```tsx
   let num1:number = 123
   let hexLiteral: number = 0xf00d;//16进制 编译后还是16进制
   let binaryLiteral: number = 0b1010;// ES6 中的二进制表示法 会被编译成10进制
   let octalLiteral: number = 0o744;// ES6 中的八进制表示法 会被编译成10进制
   let num2:number = NaN//NaN不是一个有效的数字
   let num3:number = Infinity//Infinity表示无穷大的特殊数
   ```

2. 字符串：**string**

   ```tsx
   let name:string = '小明'
   let age:number = 18
   let sentence:string = `my name is ${name} my age is ${age}`//还可以用模板字符串
   ```

3. 布尔类型：**boolean**

   ```tsx
   let isDone:boolean = true//直接使用布尔值
   let isDone2:boolean = new Boolean(1)//错 因为使用构造函数new Boolean()返回的是一个Boolean对象 不是布尔值
   let isDone3:Boolean = new Boolean(1)//对
   let isDone4:boolean = Boolean(1)//可以通过Boolean函数返回boolean值
   ```

4. 空值类型：**void **(声明一个 `void` 类型的变量没有什么用)

   ```tsx
   //1.js无void类型 ts有 其作用是用来表示函数无返回值
   function voidFn() : void{
       console.log('该函数没有返回值')
   }
   //2.void还可以定义undefined和null类型
   let test1:void = undefined
   let test2:void = null
   //3.严格模式下
   let test1:void = null//报错 null不能赋予void类型
   ```

5. **null和undefined类型**

   ```tsx
   let u:undefined = undefined
   let n:null = null
   //严格模式下
   let u:undefined = null//报错
   let n:null = undefined//报错
   //void null undefined 三者区别
   //1.null 和 undefined 是所有类型的子类型（前提是严格模式没开）2.void不能这样做（无论是不是严格模式）
   let num:number = null
   let str:string = null
   let isDone:boolean = null
   let v:void = null
   ```

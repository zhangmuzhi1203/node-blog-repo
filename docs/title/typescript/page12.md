# void

`void`的含义是空，即：函数不返回任何值，调用者也不应依赖其返回值进行**任何操作**

1. `void`通常用于函数返回值声明

   ```tsx
   function logMessage(msg: string): void {
     console.log(msg)
       //没有显示返回
   }
   logMessage('hello')
   const result = logMessage('hello')//隐式返回一个undefined
   ```

   > 注意：编码者没有编写return指定函数返回值，所以logMessgae函数是没有显示返回值的，但会有一个隐式返回值，是undefined，虽然函数返回类型为void，但也是可以接受undefined的，简单记：就是undefined是void可以接受的一种空

2. 以下写法均符合规范

   ```tsx
   // ⽆警告
   function logMessage(msg:string):void{
    console.log(msg)
    }
   // ⽆警告
   function logMessage(msg:string):void{
    console.log(msg)
    return;
    }
   // ⽆警告
   function logMessage(msg:string):void{
    console.log(msg)
    return undefine
   }
   ```

3. 那限制函数返回值时，是不是 `undefined`  和 `void`  就没区别呢？—— 有区别。因为还有 这句话 ：【返回值类型为 `void`  的函数，调⽤者不应依赖其返回值进⾏任何操作！】对⽐下 ⾯两段代码：

   ```tsx
   function logMessage(msg: string): void {
     console.log(msg)
   }
   let result = logMessage('你好')
   if (result) {//此行报错：无法测试"void"类型的表达式的真实性
     console.log('logMessage有返回值')
   }
   ```

   ```tsx
   function logMessage(msg: string): undefined {
     console.log(msg)
   }
   let result = logMessage('你好')
   if (result) {//此行无警告
     console.log('logMessage有返回值')
   }
   ```

   **理解 void 与 undefined**

   - void  是⼀个⼴泛的概念，⽤来表达“ 空” ，⽽  undefined  则是这种“ 空” 的具体 实现。 

   - 因此可以说  undefined  是 void  能接受的⼀种“ 空” 的状态。 

   - 也可以理解为： void  包含 undefined  ，但 void  所表达的语义超越了 undefined，void  是⼀种意图上的约定，

     ⽽不仅仅是特定值的限制。  

   **总结：** 

   如果⼀个函数返回类型为 void  ，那么：

   1. **从语法上讲：**函数是可以返回 undefined  的，⾄于显式返回，还是隐式返回，这⽆ 所谓！ 
   2. **从语义上讲：**函数调⽤者不应关⼼函数返回的值，也不应依赖返回值进⾏任何操作！ 即使我们知道它返回了 undefined  。




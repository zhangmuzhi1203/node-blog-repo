# never(用的少)

 never  的含义是：任何值都不是，即：不能有值，例如 l  、 ''  、 0  都不⾏

1. 几乎不用`never`去直接限制变量，因为没有意义，例如：

   ```tsx
   // 指定a的类型为never，那么就意味着a以后不能存任何的数据了
   let a: never
   //以下对啊的所有赋值都会有警告
   a = 1
   a = true
   a = undefined
   a = null
   ```

2. `never`一般是`TypeScript`主动推断出来的，例如：

   ```tsx
   let a: string
   a = 'hello'
   if (typeof a === 'string') {
     console.log(a.toUpperCase)
   } else {
     console.log(a)//TypeScript会推断出此处的a是never，因为没有任何一个值符合此处的逻辑
   }
   ```

3. `never`也可以用于限制函数的返回值

   ```tsx
   //限制throwError函数不需要任何返回值，任何值都不行，像undefined，null都不行
   function throwError(str: string): never {
     throw new Error('程序异常退出：' + str)
   }
   ```
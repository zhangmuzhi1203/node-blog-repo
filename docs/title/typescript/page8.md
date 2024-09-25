# 声明函数类型

1. 函数定义类型和返回值 | 箭头函数定义类型和返回值

   ```tsx
   //普通函数
   function add(num1:number,num2:number):number{
       return num1+num2
   }
   console.log(add(1,2))
   //箭头函数
   const add = (num1:number,num2:number) :number => num1+num2
   console.log(add(1,2))
   ```

2. 函数默认参数|函数可选参数

   ```tsx
   const fn = (name: string = '默认参数'): string => name
   fn()
   console.log(fn())
   const fn1 = (name: string, age?: number): string => name + age
   console.log(fn1('小明', 18))
   ```

3. 参数是一个对象如何定义 即 接口函数

   ```tsx
   interface Add {
     (num1: number, num2: number): number
   }
   const fn: Add = (num1: number, num2: number): number => num1 + num2
   console.log(fn(1, 2))
   
   interface User {
     name: string
     age: number
   }
   function getUser(user: User): User {
     return user
   }
   getUser({ name: 'jerry', age: 18 })
   ```

4. 函数this类型 必须是第一个参数定义this的类型 箭头函数不能包含this参数

   ```tsx
   interface Obj{
       user:number[]
       add:(this:Obj,num:number) => void
   }
   let obj:Obj={
       user:[1,2,3],
       add(this:Obj,num:number){
           this.user.push(num)
       }
   }
   console.log(obj.add(4))
   ```

5. 函数重载 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。 

   如果参数类型不同，则参数类型应设置为 **any**。

   参数数量不同你可以将不同的参数设置为可选。

   ```tsx
   let user:number[]=[1,2,3]
   function finNum(ids?:number|number[]):number[]{
       if(typeod ids === 'number'){
           return user.filter(v=>v===ids)
       }else if(Array.isArray(ids)){
           user.push(...ids)
           return user
       }else{
           return user
       }
   }
   ```

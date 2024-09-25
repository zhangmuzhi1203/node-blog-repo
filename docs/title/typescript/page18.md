# interface（接口）

`interface`是一种**定义结构**的方式，主要作用是为：类，对象，函数等规定一种**契约**，这样可以确保代码的一致性和类型安全

但要注意`interface`**只能**定义**格式**，不能包含任何实现

1. 定义**类**的结构

   ```tsx
   //PersonInterface接口，用于限制Person类的格式
   interface PersonInterface {
     name: string
     age: number
     speak(n: number): void//函数类型 返回值类型是void
   }
   //定义一个类Person,实现 PersonInterface 接口
   class Person implements PersonInterface {
     constructor(
       public name: string,
       public age: number
     ) { }
     //实现接口中的speak方法
     speak(n: number): void //函数类型 返回值类型是void
     {
       console.log(`你好，我叫${this.name}，我的年龄是${this.age}`)
     }
   }
   //创建一个Person类的实例 p1 传入名字和年龄
   const p1 = new Person('tom', 18)
   p1.speak(3)
   ```

2. 定义**对象**结构

   ```tsx
   interface UserInterface {
     name: string
     readonly gender: string
     age?: number
     run: (n: number) => void//等价于 run(n:number):void
   }
   const user: UserInterface = {
     name: 'zzz',
     age: 18,
     gender: '男',//只读属性可以赋值不能改值
     run(n) {
       console.log(`奔跑了${n}米`)
     }
   }
   //user.gender = '女'//报错 无法为gender赋值，因为它是只读属性
   ```

3. 定义**函数**结构

   ```tsx
   interface CountInterface {
     (a: number, b: number): number //等价于 count:(a:number,b:number)=>number
   }
   const count: CountInterface = (x, y) => {
     return x + y
   }
   ```

4. 接口之间的**继承**

   ```tsx
   interface PersonInterface {
     name: string
     age: number
   }
   //一个interface继承另一个interface，从而实现代码的复用
   interface StudentInterface extends PersonInterface {
     grade: string
   }
   const student: StudentInterface = {
     name: 'zmz',
     age: 18,
     grade: '小学'
   }
   ```

5. 接口自动合并(可重复定义)

   ```tsx
   //PersonInterface接口
   interface PersonInterface {
     //属性声明
     name: string
     age: number
   }
   //给PersonInterface添加新属性
   interface PersonInterface {
     //方法声明
     speak(): void
   }
   //Person类实现PersonInterface
   class PersonInterface implements PersonInterface {
     name: string
     age: number
     constructor(name: string, age: number) {
       this.name = name
       this.age = age
     }
     speak(): void {
       console.log('你好', this.name)
     }
   }
   ```

> 总结：何时使⽤接⼝？ 
>
> 1. 定义对象的格式： 描述数据模型、API 响应格式、配置对象........等等，是开发中⽤的最多 的场景。 
> 2. 类的契约：规定⼀个类需要实现哪些属性和⽅法。
> 3. 扩展已有接⼝：⼀般⽤于扩展第三⽅库的类型， 这种特性在⼤型项⽬中可能会⽤到。

**注意：interface与type的区别**

相同点： interface  和 type  都可以⽤于定义对象结构，在定义对象结构时两者可以 互换。

 不同点：

interface  ：更专注于定义对象和类的结构，⽀持继承、合并。 

type  ：可以定义类型别名、联合类型、交叉类型，但不⽀持继承和⾃动合并。

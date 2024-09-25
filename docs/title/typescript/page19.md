# 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

1. **定义泛型函数**

   语法为函数名字后面跟一个<参数名> 参数名可以随便写 例如我这儿写了T

   当我们使用这个函数的时候把参数的类型传进去就可以了 （也就是动态类型）

   ```tsx
   function Add<T>(n:T,m:T):Array<T>{
       return [n,m]
   }
   Add<number>(1,2)//<number>可写可不写 不写底层会进行类型推断传入相应类型 写的话要注意顺序 类型与参数要对应
   Add<string>('1','2')
   ```

2. **泛型可以有多个**

   我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。

   ```tsx
   function Add<T, M>(n: T, m: M): Array<T | M> {
     return [n, m]
   }
   Add<number,string>(1, '2')
   Add<string,boolean>('1', true)
   
   console.log(Add(1, '2'))
   console.log(Add('1', true))
   ```

3. **定义泛型接口**

   声明接口的时候 在名字后面加一个<参数>   使用的时候传递类型

   ```tsx
    interface PersonInterface<T> {
    name: string,
    age: number,
    extraInfo: T
    }
    let p1: PersonInterface<string>
    let p2: PersonInterface<number>
    p1 = { name: '张三', age: 18, extraInfo: '⼀个好⼈'}
   ```

4. **泛型约束**

   我们期望在一个泛型的变量上面，获取其`length`参数，但是，有的数据类型是没有`length`属性的

   ```tsx
   interface LengthInterface {
     length: number
   }
   //约束规则是：传入的类型T必须具有length属性
   function logPerson<T extends LengthInterface>(data: T): void {
     console.log(data.length)
   }
   logPerson<string>('hello')
   logPerson<number>(100)//报错 因为number不具备length属性 
   
   ```

5. **定义泛型类**

   声明方法跟函数类似名称后面定义<类型>

   使用的时候确定类型`new Sub<number>()`

   ```tsx
   class A<T> {
     arr: T[]
     add(num: T): T[] {
       return [num]
     }
   }
   
   let arr: A<number> = new A()
   arr.arr = [1, 2, 3]
   arr.add(4)
   ```

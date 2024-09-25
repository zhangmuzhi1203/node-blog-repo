# class类

1. `TS`是如何定义类的 **一定要在构造器前定义变量 并且一定要是构造器参数含有的变量**  构造器不强制定义

   ```tsx
   //代码会报错 因为在ts中不能直接在constructor里定义变量的 需要提前在constructor上面先声明
   class Person {
     constructor(name: string, age: number) {
       this.name = name//no
       this.age = age//no
     }
   }
   //代码正确
   class Person {
     name: string
     age: number
     constructor(name: string, age: number) {
       this.name = name//yes
       this.age = age//yes
     }
   }
   //代码正确，可以不定义构造器 但是要初始化类里的变量
   class Person {
     name: string = 'zmz'
     age: number = 18
   }
   const p1: Person = { name: 'zmz', age: 18 }
   ```

2. 属性的简写形式

   ```tsx
   //完整写法
   class Person {
     public name: string
     public age: string
     constructor(name: string, age: string) {
       this.name = name
       this.age = age
     }
   }
   //简写形式
   class Person {
     constructor(name: string, age: number) { }
   }
   ```

3. 类的三个修饰 `public private protected`

   使用`public` 修饰符 可以让你定义的变量 内部访问 也可以外部访问 如果不写默认就是public

   使用 `private` 修饰符 代表定义的变量私有的只能在内部访问 不能在外部访问

   使用 `protected` 修饰符 代表定义的变量私有的只能在内部和继承的子类中访问 不能在外部访问

   ```tsx
   class Person {
     public name: string
     private age: number
     protected sex: string
     constructor(name: string, age: number, sex: string) {
       this.name = name
       this.age = age
       this.sex = sex
     }
     run() {}
   }
   const p: Person = new Person('张三', 18, '男')
   p.name = '李四'//ok
   p.age = 20//no 私有属性 只能在Person类中访问
   p.sex = '女'//no 保护属性 只能在Person类和其子类中访问
   ```

4. `readonly`修饰符

   ```tsx
   class Car {
     constructor(
       public readonly vin: string,//车辆识别码，为只读属性
       public readonly year: number,//出厂年份，为只读属性
       public color: string,
       public sound: string
     ) { }
     //打印车辆信息
     displayInfo() {
       console.log(`
         识别码：${this.vin},
         出⼚年份：${this.year},
         颜⾊：${this.color},
         ⾳响：${this.sound}
         `)
     }
   }
   const car = new Car('1HGCM82633A123456', 2018, '⿊⾊', 'Bose响');
   // 以下代码均错误：不能修改readonly属性
   // car.vin = '897WYE87HA8SGDD8SDGHF';
   // car.year = 2020;
   ```

5. `static`静态属性和静态方法

   我们使用static定义的属性不能用this去访问 只能用类名.属性

   ```tsx
   class Person {
     public name: string
     private age: number
     protected sex: string
     static nb: string
     constructor(name: string, age: number, sex: string) {
       this.name = name
       this.age = age
       this.sex = sex
     }
     run() {}
   }
   const p: Person = new Person('张三', 18, '男')
   p.name = '李四'
   Person.nb = '123'
   ```

   `static` 静态函数 同样也是不能通过this 去调用 也是通过类名去调用

   ```tsx
   class Person {
     public name: string
     private age: number
     protected sex: string
     static nb: string
     constructor(name: string, age: number, sex: string) {
       this.name = name
       this.age = age
       this.sex = sex
       this.run() //no
     }
     static run() {
       return console.log('run')
     }
   }
   const p: Person = new Person('张三', 18, '男')
   p.name = '李四'
   Person.nb = '123'
   Person.run() //ok
   ```

   需要注意的是：两个函数都是静态的`static`是可以通过`this`互相调用的

   ```tsx
   class Person {
     public name: string
     private age: number
     protected sex: string
     static nb: string
     constructor(name: string, age: number, sex: string) {
       this.name = name
       this.age = age
       this.sex = sex
     }
     static run() {
       this.eat()
       return console.log('run')
     }
     static eat() {
       this.run()
       console.log('eat')
     }
   }
   const p: Person = new Person('张三', 18, '男')
   p.name = '李四'
   Person.nb = '123'
   Person.run() //ok
   ```

6. `interface`定义类  

   `ts interface` 定义类 使用关键字 `implements`  后面跟`interface`的名字多个用逗号隔开 继承还是用`extends`

   接口里的成员都要去实现 被继承类中如果有构造器则要继承类里的构造器中写出`super()`方法同时传参

   参数必须是被继承类中有的形参 其成员可以不强制实现

   ```tsx
   interface PersonClssOne {
     get(type: boolean): boolean
   }
   interface PersonClssTwo {
     set(): void
     zmz: number
   }
   class A {
     name: string
     constructor(name: string) {
       this.name = name
     }
     A(): void {}
   }
   class Person extends A implements PersonClssOne, PersonClssTwo {
     name: string
   
     constructor(name: string) {
       super('张三')
       this.name = name
     }
     set(): void {
       console.log('set')
     }
     zmz: number
     get(type: boolean): boolean {
       return type
     }
   }
   let person: Person = new Person('张三呀')
   ```

7. 抽象类`abstract`

   abstract用于定义抽象类和抽象方法

   抽象类是不可以被实例化的 可以被继承

   抽象类中的抽象方法必须被子类实现

   ```tsx
   abstract class Animal {
     public name: string
     public age: number
     constructor(name: string) {
       this.name = name
     }
     public abstract eat(): void
   }
   
   class Dog extends Animal {
     name: string
     constructor(name: string) {
       super(name)
       this.name = name
     }
     public eat() {
       console.log('eat...')
     }
   }
   let dog: Animal = new Animal('dog')//no
   let dog2: Dog = new Dog('dog2')//yes
   let dog3: Animal = new Dog('dog3')//yes
   ```

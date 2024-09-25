# 类型断言|联合类型|交叉类型

1. 联合类型 表示一个值可以是几种不同类型之一

   ```tsx
   const phone:number|string = '18023645623'//ok
   const phone:number|string = true//no
   //函数使用联合类型
   const fn = (num1: string | number): boolean => {
     return !!num1
   }
   console.log(fn(1))//true
   ```

2. 交叉类型 允许将多个类型合并为⼀个类型。合并后的类型将拥 有所有被合并类型的成员。交叉类型通常⽤于对象类型。  

   ```tsx
   interface People{
       name:string
       age:number
   }
   interface Man{
       sex:number
   }
   const xiaoming = (man:People&Man)=>{
       console.log(man.name)
       console.log(man.age)
       console.log(man.sex)
   }
   xiaoming({name:'小明',age:18,sex:1})
   ```

3. 类型断言  语法：值 as 类型 `value as string` 　　或　　<类型>值  `<string>value`

   需要注意的是，类型断言只能够「欺骗」`TypeScript` 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误

   类型断言是不具影响力的

   ```tsx
   interface A {
       run:string
   }
   interface B {
       walk:string
   }
   const fn = (type:A|B):string=>{
       return type.walk//有编译报错
   }
   interface C {
       eat:string
   }
   interface D{
       junk:string
   }
   const fn1 = (type1:C|D):string => {
       //可以用类型断言来判断是C接口类型的值
       return (type1 as C).eat
   }
   ```

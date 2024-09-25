# 声明对象类型

定义对象的方式要用接口 可以理解定义接口来进行数据结构约束

1. 不能多属性 不能少属性

   ```tsx
   interface Person{
       name:string
       age:number
   }
   //1.属性不多不少 ok
   const person :Person = {
       name:'小明',
       age:18
   }
   //2.少属性 no
   const person1:Person = {
       name:'小刘'
   }
   //3.多属性 no
   const person2:Person={
       name:'小红',
       age:18,
       class:9
   }
   ```

2. interface重名 属性重合 且实例化接口得符合不能多属性和少属性规则

   ```tsx
   interface Book {
       name:string
       price:number
    
   }
   interface Book {
       publish:boolean
   }
   const book:Book = {
       name:'三国演义',
       price:20,
       publish:true
   }//这样是ok
   ```

3. interface接口 可选属性 使用？操作符 可选属性 再实例化时 可选可不选

   ```tsx
   interface Book {
       name:string
       price?:number
   }
   const book:Book = {
       name:'三国演义'
   }
   ```

4. interface接口 索引签名**`[key:string]:any`** 

   索要签名：允许定义对象可以具有**任意数量的属性**，这些任意属性的键是字符串值是any

   使用了索引签名之后可以在定义变量中添加任意符合索引签名形式的属性

   ```tsx
   interface Book {
       name:string
       author:string
       [key；string]:any
   }
   const book:Book = {
       name:'三国演义',
       author:'罗贯中',
       price:18,
       publish:true
   }
   ```

5. interface接口 只读属性 **`readonly`**

   ```tsx
   interface Book {
       readonly name:string
       price?:number
       [propName:string]:any
   }
   const book:Book = {
       name:'三国演义',
       author:'罗贯中'
   }
   book.name = '水浒传'//这样是报错的
   ```

6. interface接口 继承  实例接口要实现每个接口的属性和方法

   ```tsx
   interface A {
       bookName:string
   }
   interface B extends A{
       author:string
   }
   const ab:B={
       bookName:'三国演义',
       author:'罗贯中'
   }
   ```

7. interface接口 定义函数类型

   ```tsx
   interface Book{
       readonly name:string
       price?:number
       author:string
       [propName:string]:any
       fn:() => void 
   }
   const book:Book={
       name:'三国演义',
       author:'罗贯中',
       publish:true,
       fn:()=>{
           console.log('xxx')
       }
   }
   ```

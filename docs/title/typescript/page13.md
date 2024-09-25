# symbol类型

symbol是一种原生类型就像number和string一样

symbol类型的值是通过Symbol构造函数创建的

可以传递参数作为唯一标识 只能接收 number string undefined

```tsx
let s1:symbol = Symbol()//undefined
let s2:symbol = Symbol(1)//number
let s3:symbol = Symbol('1')//string
```

1. symbol的值是唯一的

   ```tsx
   let s1: symbol = Symbol(1)
   let s2: symbol = Symbol(1)
   
   console.log(s1 === s2)//false
   ```

2. 用作对象属性的键

   ```tsx
   let sym: symbol = Symbol()
   
   let obj = {
     [sym]: 'foo',
   }
   console.log(obj[sym])//foo
   ```

3. 使用symbol定义的属性，只能通过以下方法拿到

   ```tsx
   let s1: symbol = Symbol(1)
   let s2: symbol = Symbol(2)
   let obj = {
     [s1]: '小明',
     [s2]: '18岁了',
     sex: '女',
   }
   // 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
   Object.getOwnPropertySymbols(obj)
   console.log(Object.getOwnPropertySymbols(obj))
   // 2 es6 的 Reflect 拿到对象的所有属性
   Reflect.ownKeys(obj)
   console.log(Reflect.ownKeys(obj))
   ```

4. `Symbol.iterator `迭代器 和 生成器`for of`

   ```tsx
   笔者现在功夫不到位 这方面还看的不太清楚
   ```
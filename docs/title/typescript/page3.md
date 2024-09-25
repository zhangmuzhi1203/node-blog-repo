# 类型总览

**JavaScript中的数据类型**

1. string
2. number
3. boolean
4. null
5. undefined
6. bigint
7. symbol
8. object

> 备注：其中object包含：Array，Function，Date，Error等。。。。。。

**TypeScript中的数据类型**

1. 上述所有JavaScript类型

2. 六个新类型：

   ① any

   ② unknown

   ③ never

   ④ void

   ⑤ tuple

   ⑥ enum

3. 两个用于自定义类型的方式：

   ① type

   ② interface

   > 注意点！
   >
   > 1.在JavaScript中的这些内置构造函数：Number，String，Boolean，用于创建对应的包装对象，在日常开发很少使用
   >
   > 2.在TypeScript中也是同理，所以在TypeScript中进行类型声明时，通常都是用小写的number，string，boolean原始类型
   >
   > 3.JavaScript在必要时会自动将原始类型包装成对象(自动装箱)，以便调用方法或访问属性，比如：
   >
   > let str = 'hello' str.length  str变量本身不具有这个方法 是自动装箱后才有的
# 枚举（`enum`）

在`javaScript`中是没有枚举的概念的TS帮我们定义了枚举这个类型

普通声明的枚举编译完后是个对象

1. 数字枚举

   ```tsx
   enum Type {
     red,
     green,
     blue,
   }
   console.log(Type.red) //0
   console.log(Type.green) //1
   console.log(Type.blue) //2
   console.log(Type[0])//red
   console.log(Type[1])//green
   console.log(Type[2])//blue
   ```

2. 增长枚举

   ```tsx
   enum Type{
       red = 1,
       green,
       blue
   }
   console.log(Type.red) //1
   console.log(Type.green) //2
   console.log(Type.blue) //3
   //如上，我们定义了一个数字枚举， Red使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说， Type.Red的值为 1， Green为 2， Blue为 3。
   ```

3. 异构枚举 枚举可以混合字符串和数字

   ```tsx
   //枚举可以混合字符串和数字成
   enum Types {
     Red = 'red',
     Green = 1,
     Blue = 'blue',
   }
   console.log(Types.Red) //red
   console.log(Types.Green) //1
   console.log(Types.Blue) //blue
   ```

4. 反向映射

   它包含了正向映射（ `name` -> `value`）和反向映射（ `value` -> `name`）

   **要注意的是 不会为字符串枚举成员生成反向映射。**

   ```tsx
   enum Enum {
      fall
   }
   let a = Enum.fall;
   console.log(a); //0
   let nameOfA = Enum[a]; 
   console.log(nameOfA); //fall
   ```

5. 常数枚举(const)

   `let` 和 `var` 都是不允许的声明只能使用`const`

   `const` 声明的枚举会被编译成常量

   常数枚举是使用 `const enum` 定义的枚举类型

   ```tsx
   const enum Type {
     red,
     blue,
   }
   let color: any = [Type.red, Type.blue]
   //编译结果
   var color = [0 /* Type.red */, 1 /* Type.blue */]
   ```

   常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。

   ```tsx
   const enum Color {Red, Green, Blue = "blue".length}//报错
   ```

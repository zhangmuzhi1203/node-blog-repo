# 装饰器（Decorator）IOC,DI

- `NestJS` 中的装饰器就像是给你的代码贴上标签，告诉 Nest 框架如何处理它们。
- 再不改变原代码的基础上 增加该代码的功能性 这个功能是写好的 nest知道如何去处理 使程序更清晰

- IOC是一种思想它表示不再由你的应用程序来控制各种组件的创建和管理，而是交给外部框架或容器
- DI是IOC的一种具体实现 例如将B注入到A上 不需要再A组件内部创建它们 常用构造函数去注入
- B注入到A组件后A组件就可以直接使用B组件中的属性和方法还不需要在实例B

1. 若要启用实验性的装饰器特性，必须在命令行或`tsconfig.json`里启用编译器选项

   **`experimentalDecorators:true`**

   装饰器是一种特殊类型的声明，它能够被附加到**类，属性（用的不多），方法，参数**上

2. 类装饰器的使用

   ```tsx
   //2.类装饰器
   const Base: ClassDecorator = (target) => {
     console.log(target) //这个target就是[class A]
     target.prototype.name = 'zs' //给这个类添加一个属性
     target.prototype.fn = <T>(params: T): T => {
       //给这个类添加一个方法
       return params
     }
   }
   
   //1.声明一个类
   @Base //使用类装饰器 给类装饰器回传一个target
   class A {}
   
   //3.实例化这个类
   let a = new A()
   console.log((a as any).fn(1))
   ```

3. 装饰器工厂

   装饰器工厂可以进行传参

   ```tsx
   //2.类装饰器
   const Base = (name: string) => {
     //外层函数
     const fn: ClassDecorator = (target) => {
       //内层函数
       console.log(target) //[class A]
       target.prototype.name1 = name
       target.prototype.fn = <T>(params: T): T => {
         return params
       }
     }
     return fn
   }
   
   //1.声明一个类
   @Base('ls') //使用类装饰器 给类装饰器回传一个target
   class A {}
   
   //3.实例化这个类
   let a = new A()
   console.log((a as any).fn(1))
   ```

4. 方法装饰器

   ```tsx
   import axios from 'axios'
   const Get = (url: string) => {
     const fn: MethodDecorator = (target, key, descriptor: PropertyDescriptor) => {
       console.log(target, key, descriptor) //类的原型对象 被装饰方法的名字 方法的属性描述符
       axios.get(url).then((res) => {
         descriptor.value(res.data)//descriptor.value实际是被装饰的方法本身
       })
     }
     return fn
   }
   class A {
     @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
     getList(data: any) {
       console.log(data.result.list)
     }
   }
   
   let a = new A()
   
   ```

5. 参数装饰器

 ```tsx
import axios from 'axios'
import 'reflect-metadata'
const Get = (url: string) => {
  const fn: MethodDecorator = (target, key, descriptor: PropertyDescriptor) => {
    const key1 = Reflect.getMetadata('key', target)
    axios.get(url).then((res) => {
      descriptor.value(key ? res.data[key] : res.data)
    })
  }
  return fn
}

const Result = () => {
  const fn: ParameterDecorator = (target, key, index) => {
    Reflect.defineMetadata('key', 'result', target)
  }
  return fn
}
class A {
  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  getList(@Result() data: any) {
    console.log(data)
  }
}
let a = new A() as any
  ```


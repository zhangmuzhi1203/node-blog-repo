# 任意类型（any和unknown）

1. **any**和**unknown**是顶级类型 包含了所有类型 **unknown**比**any**更加安全

   ```tsx
   let num1 : number = 1
   let num2 :any = num1
   let str1 :string = '123'
   let str2 :unknown = str1
   //any同理
   let value:unknown
   value={}
   value=[]
   value=1
   value=''
   value=true
   value=null
   value=undefined
   value=Symbol('type')
   ```

2. 声明变量时 如果没有指定变量类型 则默认是**any**类型

   ```tsx
   //1.变量开始未赋值 默认是any
   let num
   console.log(num)//undefined
   num = '123'
   console.log(num)//123
   //2.变量开始赋值 默认不是any
   let num = 1
   console.log(num)//1
   num = '123'
   console.log(num)//报错
   ```

3. **any**可以被赋值和给别人赋值 **unknown**可以被赋值但不能赋值给其他类型 但是可以赋值给自身或者是**any**

   ```tsx
   let num:any = 1
   let num1:number=2
   num1 = num//any赋值给别人 ok
   num = num1//别人赋值给any ok
   console.log(num)//1
   console.log(num1)//1
   let str:unknown = '123'
   let str1:string = '456'
   let str2:unknown = '789'
   str = str1//别人赋值给unknown ok
   str1 = str//unknown 赋值给 别人 no
   str = str2//unknown自己赋值 ok
   num = str//unknown赋值给any ok
   ```

4. **any**可以读任何属性和调用任何方法 **unknown**不可以读任何属性和调用任何方法

   ```tsx
   let num: any = {
     name: '小明',
     open: () => 123,
   }
   console.log(num.name, num.open)//ok
   let str: unknown = {
     name: '小刘',
     open1: () => 456,
   }
   console.log(str.name, str.open1)//no
   ```

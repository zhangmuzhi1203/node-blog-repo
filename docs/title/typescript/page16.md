# 类型别名（type）	

1. 类型别名用来给一个类型起个新名字。

   ```tsx
   type name = string
   let n:name = 'zs'
   console.log(n)//zs
   console.log(typeof n)//string
   ```

2. 类型别名用来定义一个联合类型 

   ```tsx
   type Status = number | string
   type Gender = '男' | '女'
   function printStatus(status: Status) {
     console.log(status)
   }
   function logGender(str: Gender) {
     console.log(str)
   }
   printStatus(200)//ok
   printStatus('200')//ok
   //printStatus(true)//报错 类型boolean的参数不能赋给类型Status（number|string）
   logGender('男')//ok
   logGender('女')//ok
   //logGender('保密')//报错 类型'保密'的参数不能赋给类型Gender的参数（'男'|'女'）
   
   ```

3. 类型别名用来定义一个交叉类型

   ```tsx
   //面积
   type Area = {
     height: number
     width: number
   }
   //地址
   type Address = {
     num?: number   //楼号
     cell: number  //单元号
     room: string  //房间号
   }
   //定义类型House，且House是Area和Address组成的交叉类型
   type House = Area & Address
   const house: House = {
     height: 100,
     width: 50,
     num: 5,//因为是可选的所以可写可不写
     cell: 5,
     room: '201'
   }
   ```

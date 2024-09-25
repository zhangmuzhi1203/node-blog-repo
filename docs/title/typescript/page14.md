# 元组（Tuple）

1. 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

   ```tsx
   let arr: [number, string] = [1, 'aa']
   //一个简单的元组，不能更换顺序，否则报错
   //let arr: [number, string] = ['aa', 1]
   //当直接对元组类型的变量进行初始化或赋值的时候，需要提供元组类型中指定的所有项
   let arr1: [string, number, boolean]
   arr1 = ['1', 1, true]//ok
   //o = ['2', 1]//不能少写
   //o = ['3', 3, true, 1]//不能多写
   let arr2: [number, string?]
   arr2 = [1]//因为string类型是可选的所有可以赋值一个元素
   arr2 = [2, '1']//可以赋值2个但不能超过2个
   //第一个元素是number类型，后面的元素可以是任意数量的string类型
   let arr3: [number, ...string[]]
   arr3 = [1]//因为是任意类型数量的string 所以可以为0
   arr3 = [1, '1', '2']//可以是多个
   //能直接单独访问元组某一个已知索引元素
   let arr4: [string, number] = ['a', 1]
   console.log(arr4[0])
   console.log(arr4[1])
   //console.log(n[2])//报错，索引为2处没有元素 
   arr4[0] = '2'
   arr4[1] = 3
   arr4[0].length
   ```

2. .当添加越界元素时，它的类型会被限制为元组中的联合类型

   ```tsx
   let arr5: [string, number]
   arr5 = ['1', 1]
   arr5.push('11')//类型符号 ok
   //arr5.push(true)//报错 类型不符合
   console.log(arr5)//['1',1,'11']xxxxxxxxxx //2.当添加越界元素时，它的类型会被限制为元组中的联合类型let arr5: [string, number]arr5 = ['1', 1]arr5.push('11')//类型符号 ok//arr5.push(true)//报错 类型不符合console.log(arr5)//['1',1,'11']let tom: [string, number]tom = ['Tom', 25]tom.push('male')//oktom.push(true)//noconsole.log(tom)//['tom',25,'male']
   ```

# 声明数组类型

1. 定义数组：**类型[] (工作常用)**

   ```tsx
   let arr:number[] = [1,2,3]
   let arr1:string[]=['1','2','3']
   let arr2:boolean[]=[true,false]
   let arr3:any[] = [1,'2',{}]
   ```

2. 定义数组：数组泛型  规则Array<类型>

   ```tsx
   let arr:Array<number> = [1,2,3]
   let arr:Array<any> = ['1',2,{}]
   ```

3. 用接口表示数组  一般用来描述类数组

   ```tsx
   interface Book{
       name:string
   }
   let arr:Book[] = [{name:'三国演义'},{name:'水浒传'}]
   ```

4. 多维数组

   ```tsx
   let arr:number[][]=[[1,2],[3,4]]
   ```

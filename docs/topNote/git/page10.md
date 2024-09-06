# Git
## 关联本地仓库和远程仓库

如果本地已经有仓库了 怎样把它放到远程仓库里面呢

```js
//1.首先还是要在github上创建一个新仓库
//2.复制仓库ssh地址
//3.命令行进入本地仓库
//4.输入git remote add origin git@github.com:zhangmuzhi1203/firstRep.git origin 这个命令的意思是在这个本地仓库添加一个远程仓库 默认远程仓库别名一般都是这个可以改
//5.在要和远程仓库关联的那个本地仓库输入上述命令
//6.接着可以输入 git remote -v 这个命令可以查看当前仓库所对应的远程仓库的别名和地址
//7.git branch -M main 这个命令可以指定本地分支为main 如果本地分支就为main 可以省略此步骤
//8.git push -u origin main:main 最后一步把本地仓库与远程仓库关联起来 main:main就是把本地仓库main分支与远程仓库main分支关联起来。如果本地分支与远程分支名称相同就可以省略直接写一个名称就行 如 main:mian => main。-u 选项的意思是 将本地分支与远程分支进行关联。不带 -u：你每次推送时都需要明确指定远程仓库和分支。带 -u：在第一次推送时加上 -u，后续推送和拉取时，你只需要输入 git push 或 git pull，Git 会知道你想要推送或拉取的远程分支是 origin/main。 
//9.使用8这个命令一定要确保本地仓库有提交文件 不然报错
//10.接着就可以修改文件更改文件新建文件等等操作 然后git add git commit -m 最后git push
//11.如果远程仓库发生了修改要想同步到本地仓库需要 git pull <remote> 命令
//12.即git pull origin main 这个命令就是把远程仓库的main分支内容拉取到本地再进行合并 因为本地和远程都是main分支所以省略写法
```
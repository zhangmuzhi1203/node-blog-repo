# Git
## git reset 回退版本

可以退回到之前的某一个提交状态

```js
//git reset的三种模式
git reset --soft 版本号 //soft参数表示回退到某一个版本并保留工作区和暂存区的内容
git reset --hard 版本号//hard参数表示回退到某一个版本不保留工作区和暂存区的内容
git reset --mixed 版本号//mixed参数表示回退到某一个版本保留工作区的内容不保留暂存区的内容 mixed是git reset命令的默认参数
git reset HEAD^  //表示上一个版本
git ls-files//查看暂存区和已经提交的文件
cp -rf file newfile//文件复制
```

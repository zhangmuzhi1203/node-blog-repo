# Git
## 删除文件

```js
rm file;git add file//1. 先从工作区删除文件，然后再将暂存区内容删除
git rm <file>//2.把文件从工作区和暂存区同时删除
git rm --cached <file>//3.把文件从暂存区删除，但保留在当前工作区中
git rm -r *//递归删除某个目录下的所有子目录和文件
//删除后不要忘记提交
```
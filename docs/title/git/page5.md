# Git
## 添加和提交文件

文件只有被提交到本地仓库中才算真正的保存起来

1.当把f1.txt文件添加到暂存区后 此时工作区和暂存区都存在该文件 

2.当修改工作区f1.txt文件或者删除f1.txt文件后 此时查看仓库状态 会显示Changes not staged for commit 

3.并且工作区没了该文件 暂存区还存在  可以使用 `git rm` 命令或者 `git add` 命令 此时就告诉git要删除暂存区这个文件

4.**如果你不想删除该文件，想恢复它**：git restore f1.txt 这条命令会把 `f1.txt` 恢复到删除之前的状态（即从 Git 历史中恢复该文件）。

```js
git status //查看仓库状态 红色文件是未跟踪文件 绿色文件是已暂存文件
git add 文件名//添加到暂存区
git add *.txt//通配符方式提交到暂存区
git add .//把当前文件夹下的所有文件添加到暂存区内 这个.就是当前目录
git rm 文件名//从工作区和暂存区删除一个文件 
git rm -f 文件名//删除文件
git rm --cached 文件名//把添加到暂存区的文件重新变成未跟踪文件 从索引/暂存区中删除文件，但是本地工作区文件还在， 只是不希望这个文件被版本控制
git commit -m '提交信息'//提交到本地仓库 只会提交暂存区的文件
git commit -a -m 'xxx'//这个命令可以同时实现暂存提交两个操作 -a -m
git log //查看提交记录
git log --oneline//查看简洁的提交记录
git reflog //查看操作的历史记录
//小案例
echo '第一个文件' > file1.txt //创建一个文件且含义内容
cat file1.txt //查看文件内容
git status //可以看到红色的未跟踪文件 file.txt
git add file.txt //把 file.txt文件添加到暂存区
git status//可以看到绿色的已暂存的文件
git rm --cached file.txt
git status//可以看到红色的未跟踪文件 file.txt
mv file.txt file1.txt //修改文件名
```
# Git
## 回退和rebase

```js
/*
合并分支的另一种命令 git rebase name
rebase命令可以在任意分支上操作 merge只能在主分支上操作
现在还是两个分支 main和dev 此时在dev分支上用 git rebase main命令 此时就会找到main和dev分支的共同节点就是开启dev分支的那次操作记录 然后再找到main分支上最新的提交记录接着把dev整个的移动到main分支的最新提交记录的后面
如果在main分支上执行 git rebase name 此时就会找到main和dev分支的共同节点就是开启dev分支的那次操作记录 然后把main分支上从这个共同节点这个地方到main分支最新的提交记录这一部分全部移到dev的最新提交后面
*/
//alias 可以设置命令别名
alias graph = 'git log --graph --oneline --decorate --all'
graph//直接就可以查看分支图了
git reset --hard 命令编码// 将仓库回退到某一个时间点
/*
git merge 
优点：不会破坏原分支的提交历史，方便回溯和查看
缺点：会产生额外的提交节点，分支图比较复杂
git rebase
优点：不会新增额外的提交记录，方便回溯和查看
缺点：会改变提交历史，改变了当前分支branch out的节点 避免在共享分支使用
*/
```


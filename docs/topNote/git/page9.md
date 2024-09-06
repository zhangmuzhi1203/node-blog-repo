# Git
## SSH配置和克隆远程仓库

```js
git clone 仓库ssh地址 //克隆远程仓库到本地 这个命令直接把本地仓库和远程仓库关联 后续操作和标题10内容一样
//一般第一次的时候就会报错 这是因为我们没有配置ssh密钥 找到.ssh文件进入里面创建密钥
ssh-keygen -t rsa -b 4096//生成密钥 -t指定协议 rsa -b指定生成的大小4096
//然后会提示输入文件名字 第一次 默认回车就行 如果不是第一次指定一个名字就行
//接着会说是否输入密钥短语来保护密钥就是输入密码的意思 可以输入 可以直接回车 然后就生成成功了
id_rsa id_rsa.pub//第一次会生成这两个文件 不带.pub的是私钥文件谁都不要给 带.pub的是公钥文件
//如果不是第一次配置密钥而是额外生成第二个密钥 这个时候想用这个密钥连接github需要进行如下配置
tail - 5 config
# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/xxx

//本地仓库修改完后 不会影响远程仓库 这个时候需要使用push命令
git push <remote><branch>//推送更新内容 如果已经clone了远程项目到本地仓库 可以直接在这个项目里输入git push即可推送更新内容
git pull <remote>//拉取更新内容
```
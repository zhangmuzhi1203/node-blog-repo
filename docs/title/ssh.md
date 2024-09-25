# 使用ssh技术连接服务器  

**开始**

使用任意命令行工具输入 ssh root@主机公网ip

```
ssh root@47.121.218.106  //主机名默认基本都是root不确定话打开自己的主机控制台查看即可
```

**问题**

这个时候可能有的时候会报 Permission denied (publickey,gssapi-keyex,gssapi-with-mic)错误

原因1：可能新买的服务器没有设置密码 去主机控制台重置一下密码即可

原因2：目前未遇到 遇到再说 不过重启解决百分之99的问题

**使用**

现在可以通过ssh连接到服务器了 但是这样的方式并不安全 容易被暴露破解 输入exit可以退出服务器

**解决**

通过密钥方式可以很好的解决这种问题

**密钥生成步骤以及相关问题**

1. ssh-keygen 生成密钥对 要在本机的.ssh文件里打开命令行输入

   输入完这个命令后会有好几个问题 **（切记是首次是首次如果之前整过以下步骤会重置之前的密钥对）**

   第一个问题Enter file in which to save the key (C:\Users\asus/.ssh/id_rsa): 问我们密钥对存放在哪里 默认就行

   第二个问题Enter passphrase (empty for no passphrase)是问要不要给密钥添加个保护密码 

   加了话以后通过密钥登录都需要这个密码 不加就不需要这个密码

2. 然后打开密钥所在文件 复制刚才创建的公钥内容 **(公钥就是.pub结尾的文件)**

3. 打开主机控制台的密钥对  点击创建密钥对 输入密钥对名称 点击导入已有密钥 然后把刚才内容填进去

   然后点击绑定密钥对 把密钥与服务器相关联 重启后 输入 ssh root@公网ip 就可以通过ssh登录了

4. 可以对密钥进行一些配置 在.ssh文件中的config文件里进行配置**（ 如果这个文件没有自己创建并且这个文件是没有后缀的）**

   以下是相关配置内容

   ```
   # ESC服务器实例名称 最好与服务器实例名称对应
   Host zmz
   # ESC服务器公网ip
   HostName 47.121.218.106
   # 端口号 默认22
   Port 22
   # 登录账号root
   User root
   # 服务器密钥对中私钥的路径
   IdentityFile ~/.ssh/server
   # 指定 SSH 连接时优先使用 公钥认证 进行身份验证。
   PreferredAuthentications publickey
   #如果你不希望 SSH 通过代理使用任何密钥，并且只希望使用你明确指定的密钥文件，可以将两者结合使用。
   IdentityAgent none
   IdentitiesOnly yes
   # github
   Host github.com
   User git
   HostName github.com
   IdentityFile ~/.ssh/github
   PreferredAuthentications publickey
   注意：github 默认的 ssh host 名字为 github.com ，如果我们自己配置了Host ，当我们在访问对应仓库时，对应的 ssh host 应当作出对应的修改。比如这里Host是zmz 那么用ssh克隆仓库的时候 就是git clone git@zmz:仓库地址
   ```

5. 如果在配置文件配置了别名就不需要再输入很长的命令去输入命令了 直接使用如下方式连接服务器

   ```
   ssh zmz//因为我这里配置的别名是zmz
   ```

**总结**

如果以上步骤没问题那么你就可以使用ssh去连接你的服务器啦 配置好密钥阿里云就禁止密码登录了


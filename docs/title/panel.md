## 宝塔面板使用

**概述**

宝塔面板是一款服务器管理软件，支持windows和linux系统，可以通过Web端轻松管理服务器，提升运维效率
**安装宝塔的目的就是更简单的管理网站服务器。**

**安装**

打开宝塔官网找到服务器对应操作系统的安装链接 然后连接云服务器 在命令行复制刚刚连接 回车即可

大约2分钟后会看到安装成功并且显示了面板地址及账号密码 **保存好**

**配置安全组**

不配置安全组放行宝塔面板端口不能访问宝塔面板外网地址

将宝塔面板的端口在阿里云控制平台上进行安全组配置

打开控制平台接着打开安全组然后点击管理规则

在访问规则入方向处点击手动添加在弹出的菜单栏中的目的地址填入宝塔面板的端口号 授权对象 选择4个0的那个 点击保存 还可以加描述

**访问规则中其他端口介绍** 

1. 22是ssh连接使用的端口
2. 80是`http`站点使用的端口
3. 443是`https`站点使用的端口
4. 3389端口是远程桌面协议，用于远程访问和控制 Windows 系统

**宝塔面板配置**

打开宝塔面板外网地址 输入在命令行安装宝塔面板时安装成功给的账号和密码进行登录

登录成功后再首页有一个绑定宝塔面板账号  若无账号点击注册账号

打开应用商店下载`nodejs`版本管理器 更新列表选择当前操作系统能支持的最新稳定版本 npm命令同步一下版本

接着下载`Nginx` 这个是web服务器 用于添加站点和部署 找到最新版本点击极速安装 默认放到etc文件夹里

下载`mysql` 项目所用到的数据库

下载`git` 下载`npm`   

```javascript
yum install xxx
```

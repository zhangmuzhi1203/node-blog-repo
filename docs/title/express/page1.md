# Express
## 使用express生成器去创建项目

1.全局安装express生成器 （随时随地可以使用）

```
npm install -g express-generator
```

2.使用express生成器创建项目 （此时创建的文件已经带有package.json 不需要npm init）

```
express --no-view 项目名字
```

3.切换到项目文件中安装依赖

```
npm install
```

或者 临时使用express生成器 不会在全局中下载依赖 （用完即删 剩下步骤与全局一样）

```
npx express-generator 项目名字
```
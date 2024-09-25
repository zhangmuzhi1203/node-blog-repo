# NodeJS
## 导入与导出

因为前端的导入导出主要分为`commonjs`和`ES6modules`两种标准，

其中`commonjs`主要用于`node`环境，而`ES6modules`主要用于浏览器环境，

但是`ES6modules`是兼容`commonjs`标准的，所以这就很容易让人弄混

### commonjs标准

1. 导入用`require`
2. 导出用 `module.exports`

### ES6modules标准

1. 导入用`import`
2. 导出用 `export` 和`export default` 前者可以导出一个和多个 后者只可以导出一个

### {}使用时机

1. 默认导出的时候 引用不需要使用{}
2. 具名导出的时候 引用需要使用{}


# Node中的模块系统

使用Node编写应用程序主要就是在使用：

- EcmaScript语言
  - 和浏览器不一样，Node中没有BOM、DOM
- 核心模块
  - fs——文件操作
  - http——http服务
  - url——路径操作
  - path——路径处理模块
  - os——操作系统信息
- 第三方模块
  - art-template
  - 必须通过npm来下载安装
- 自定义模块
  - 自己创建的文件

## 什么是模块化

- 文件作用域
- 通信规则
  - 加载require
  - 导出

## CommonJS模块规范

在Node中的JavaScript有一个很重要的概念——模块系统

- 模块作用域
- 使用require方法来加载模块
- 使用exports接口对象来导出模块中的成员

### 加载——require

语法：

```js
var 自定义变量名称 = require('模块')
```

作用：

- 执行被加载模块中的代码
- 得到被加载模块中的`exports`导出对象

加载规则：

- 优先从缓存加载——可以拿到接口对象，但不会重复执行其中的代码
- 判断模块标识

### 导出——exports

- Node中是模块作用域，默认文件中的所有成员只在当前文件模块有效

- 对于希望可以被其它模块访问的成员，我们需要把这些公开成员挂载到`exports`接口对象中。

  - 对于导出多个成员

    ```js
    exports.a = 123
    exports.b = 'hello'
    ```

  - 对于导出单个成员

    ```js
    mudule.exports = 'hello'
    ```

### 原理解析

exports 和 `module.exports`的一个引用

```js
console.log(exports === module.exports)  //true
exports.foo = 'bar' 
// 等价于
module.exports.foo = 'bar'
```

# Express

## express的安装

1. 创建目录

   ```js
   mkdir myapp
   ```

2. 创建`package.json`文件

   ```
   npm init
   ```

3. 安装依赖

   ```
   npm i -S express
   ```

## express的使用

```js
// 1.引包
var express = require('express')

// 2. 创建服务器应用程序 也就是http.createServer
var app = express()

// 提供静态资源 公开指定目录
app.use('/public/', express.static('./public/'))

// 当服务器收到get请求/路径时，执行回调处理函数
app.get('/', function(req, res) {
    res.send('hello, express')
})

app.listen(3000, function() {
    console.log('running')
})
```


# Node.js 是什么

- Node.js  is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).
- Node.js 不是一门语言、不是库、也不是框架。
- Node.js 是一个基于Chrome V8 引擎的JavaScript 运行时环境。
- Node.js 可以解析和执行 JavaScript代码。

# Node.js 特性是什么

- event-driven 事件驱动
- non-blocking I/O model 非阻塞IO模型（异步）
- lightweight and efficient 轻量和高效



# 如何通过node来解析脚本文件

1. 创建编写JavaScript脚本文件

2. 打开终端，定位到脚本文件所属目录

3. 输入`node 文件名` 执行对应的文件

   eg: `node helloworld.js`

**注意：文件名不要使用`node.js`来命名**

**在node中，采用Ecmascript进行编码，没有BOM、DOM。**

# 读写文件

`fs `为`file-system`的简写，在 `node` 中如果想要进行文件操作，必须引入`fs`这个核心模块

## 读取文件

```js
// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs')

// 2.读取文件
//    第一个参数是要读取的文件路径
//    第二个参数是一个回调函数（接受两个参数，error——如果读取失败，error就是错误对象，成功则为null。data——如果读取成功，就是读取到的数据，如果失败，error就是错误对象。）

fs.readFile('./helloworld.js',function(error, data) {
    // console.log(data)
    // <Buffer 76 61 72 20 66 6f 6f 20 3d 20 27 68 65 6c 6c 6f 20 6e 6f 64 65 6a 73 27 0d 0a 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 66 6f 6f 29>
    // 文件中存储的都是二进制数据，看到的为16进制。可以通过toString方法将其转为我们认识的字符。
    if (error) {
      console.log('文件读取失败')
    } else {
      console.log(data.toString())
    }
})

```

## 写入文件

```js
var fs = require('fs')

// 第一个参数为文件路径
// 第二个参数为写入内容
// 第三个参数为回调函数（error——成功的话文件写入成功，error为null。失败的话未见写入失败，error为错误对象。)
fs.writeFile('./example01.txt', '这是一个测试文件', function(error) {
    if (error) {
      console.log('文件写入失败')
    } else {
      console.log('文件写入成功')
    }
    
})
```

# 创建web服务器

node中有一个核心模块：http——创建编写服务器

## 请求事件

```js
// 1. 加载 http核心模块
var http = require('http')

// 2.使用  http.createServer() 方法创建一个 web 服务器 返回一个 server 实例
var server = http.createServer()

// 3.注册 request请求事件，当 客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数，回调处理。

server.on('request', function () {
    console.log('收到客户端的请求了')
})

// 4.绑定端口号，启动服务器。
server.listen(3000, function () {
    console.log('服务器启动成功了')
})
```

## 响应事件

```js
var http = require('http')

var server = http.createServer()

// request 请求事件处理函数，需要接收两个参数：
// request 请求对象——请求对象可以用来获取客户端的一些请求信息，例如请求路径
// response 响应对象——可以用来给客户端发送响应消息
server.on('request', function (request, response) {
    console.log('收到客户端的请求了,请求路径是：' + request.url)

    // response 有一个write方法——可以用来给客户端发送响应数据
    // write可以使用多次，但是最后一定要使用ende来结束响应，否则客户端会一直等待
    response.write('hello')
    response.write('nodejs')
    response.end()
})



server.listen(3000, function () {
    console.log('服务器启动成功了')
})
```

# 根据不同路径响应不同数据

- 响应内容只能是二进制数据或字符串

```js
var http = require('http')
var server = http.createServer()
server.on('request', function (req, res) {
    // res.write('hello')
    // res.write('node')
    // res.end()
    // 以上方法较为麻烦，可直接 end 的同时发送响应数据
    // res.end('hello nodejs')

    // 根据不同的请求路径 发送不同的响应结果

    // 1.获取请求路径
    var url = req.url

    // 2.判断路径处理响应
    if (url === '/') {
        res.end('index page')
    } else if (url === '/login') {
        res.end('login page')
    } else {
        res.end('404 not found')
    }
})
// 3.绑定端口号，启动服务
server.listen(80, function () {
    console.log('服务器启动成功')
})
```

# 模块化

- 在node中，没有全局作用域，只有模块作用域。——外部访问不到内部，内部也访问不到外部。
- 在引入文件时，后缀名可以省略，如：`require('./b.js')`可以写作`require('./b')`。但`./`一定不能省略。

## require方法的作用

1. 加载文件模块并执行里面的代码
2. 拿到被加载文件模块导出的接口对象：`exports`（默认是一个空对象）

## 如何让模块与模块之间进行通信？

1. 通过`require`引入模块，加载文件模块并执行里面的代码。

   ```js
   var ret = require('./b')
   ```

2. 使用`exports`将需要被外部访问的成员导出。

   ```js
   exports.foo = 'hello'
   ```

# Content-type

在服务端默认发送的数据，是utf8编码的内容。需要设置响应内容类型来正确显示内容。

```js
var http = require('http')

var server = http.createServer()

server.on('request', function(req,res) {
    res.setHeader('Content-type', 'text/plain; charset=utf-8')
    res.end('hello 世界')
})

server.listen(3000, function() {
    console.log('server is running...')
})
```

- `text/plain`为普通文本
- `text/html`为`html`格式的文本

# 发送文件中的数据

- 不同的资源需要对应不同的`Content-type`，具体可参考`http://tool.oschina.net/commons`
- 图片不需要指定编码，一般只为字符数据才指定编码。

```js
var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function(req,res) {
    var url = req.url
    if (url === '/') {
        fs.readFile('./resource/index.html', function(err, data) {
            if(err) {
                res.setHeader('Content-type', 'text/plain; charset=utf-8')
                res.end('文件读取失败')
            } else {
                res.setHeader('Content-type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    } else if (url === '/ab') {
        fs.readFile('./resource/head-img.jpg', function(err, data) {
            if(err) {
                res.setHeader('Content-type', 'text/plain; charset=utf-8')
                res.end('文件读取失败')
            } else {
                res.setHeader('Content-type', 'image/jpeg')
                res.end(data)
            }
        })
    }
})

server.listen(3000, function() {
    console.log('server is running...')
})
```




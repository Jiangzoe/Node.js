// 使用node轻松的构建一个web服务器
// 在node中专门提供了一个核心模块：http——帮你创建编写服务器

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
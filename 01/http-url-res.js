var http = require('http')

// 1.创建sever
var server = http.createServer()

// 2.监听request请求事件，设置请求处理函数
server.on('request', function (req, res) {
    // console.log('收到请求了，路径是' + req.url)

    // res.write('hello')
    // res.write('node')
    // res.end()
    // 以上方法较为麻烦，可直接 end 的同时发送响应数据
    // res.end('hello nodejs')
    // 响应内容只能是二进制数据或字符串

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
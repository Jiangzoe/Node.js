
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
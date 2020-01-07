var http = require('http')

var server = http.createServer()

server.on('request', function(req,res) {
    // 在服务端默认发送的数据，是utf8编码的内容
    res.setHeader('Content-type', 'text/plain; charset=utf-8')
    res.end('hello 世界')
})

server.listen(3000, function() {
    console.log('server is running...')
})
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
                // 图片不需要指定编码，常说的编码一般值得是字符编码
                res.setHeader('Content-type', 'image/jpeg')
                res.end(data)
            }
        })
    }
})

server.listen(3000, function() {
    console.log('server is running...')
})
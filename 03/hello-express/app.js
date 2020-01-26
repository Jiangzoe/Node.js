// 1.安装
// 2.引包
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
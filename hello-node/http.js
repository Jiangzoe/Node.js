// 使用node自带的http模块
const http = require('http')

// 调用http.creatServer方法在本机上开启一个http服务
http.createServer((req, res) => {
    res.end('Hello Node!')
}).listen(8000, () => { //监听本地的8000端口
    console.log('listen on 8000')
})
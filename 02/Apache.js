var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = './www'

server.on('request', function (req,res) {
    var url = req.url
    var filePath = '/index.html'

    if (url !== '/') {
       filePath = url
       fs.readFile(wwwDir + url, function (err,data) {
           if (err) {
               return res.end('404 not found')
            } else {
                res.end(data)
            }
        })
    } 
})

server.listen(3000, function () {
    console.log('running')
})
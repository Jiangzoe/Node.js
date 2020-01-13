var http = require('http')
var fs = require('fs')
var template = require('art-template')

var comments = [
    {
        name:'一只酱1',
        message:'我即是狂澜，且无法被力挽',
        dateTime:'2020-01-13'
    },
    {
        name:'一只酱2',
        message:'我即是狂澜，且无法被力挽',
        dateTime:'2020-01-13'
    },
    {
        name:'一只酱3',
        message:'我即是狂澜，且无法被力挽',
        dateTime:'2020-01-13'
    },
    {
        name:'一只酱4',
        message:'我即是狂澜，且无法被力挽',
        dateTime:'2020-01-13'
    },
    {
        name:'一只酱5',
        message:'我即是狂澜，且无法被力挽',
        dateTime:'2020-01-13'
    }
]

http
    .createServer(function(req, res) {
        var url = req.url
        if (url === '/') {
            fs.readFile('./views/index.html', function(err, data) {
                if (err) {
                    return res.end('404 not found')
                }
                var htmlStr = template.render(data.toString(), {
                    comments: comments
                })
                res.end(htmlStr)
            })
        } else if (url.indexOf('/public/') === 0) {
            fs.readFile('.' + url,function (err, data) {
                if  (err) {
                    return res.end('404 not found')
                }
                res.end(data)
            })
        } else {
            fs.readFile('./views/404.html', function (err, data) {
                if (err) {
                    return res.end('404 not found')
                }
                res.end(data)
            })
        }
    })
    .listen(3000, function() {
        console.log('running')
    })
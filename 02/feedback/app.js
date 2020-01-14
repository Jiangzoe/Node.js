var http = require('http')
var fs = require('fs')
var url = require('url')
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
        // 使用url.parse方法将路径解析为一个方便操作的对象
        var parseObj = url.parse(req.url, true)
        // 单独获取不包含字符串的路径部分
        var pathname = parseObj.pathname
        
        if (pathname === '/') {
            fs.readFile('./views/index.html', function(err, data) {
                if (err) {
                    return res.end('404 not found')
                }
                var htmlStr = template.render(data.toString(), {
                    comments: comments
                })
                res.end(htmlStr)
            })
        } else if  (pathname === '/post') {
            fs.readFile('./views/post.html', function(err,data) {
                if (err) {
                    res.end('404 NOT Found')
                }
                res.end(data)
            })
        } else if (pathname.indexOf('/public/') === 0) {
            fs.readFile('.' + pathname,function (err, data) {
                if  (err) {
                    return res.end('404 not found')
                }
                res.end(data)
            })
        } else if (pathname === '/comment') {
            // res.end(JSON.stringify(parseObj.query))
            // 1.获取表单提交的数据
            // 2.生成日期到数据对象中，然后存储到数组中
            // 3.让用户重定向跳转到首页/
           var comment = parseObj.query
           comment.dateTime = '2020-01-14 18:18'
           comments.unshift(comment)
        //   通过服务器让客户端重定向
        // 1. 状态码设置为302 临时重定向
            res.statusCode = 302
        // 2. 在响应头中通过location告诉客户端往哪儿跳
            res.setHeader('Location','/')
            res.end()
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
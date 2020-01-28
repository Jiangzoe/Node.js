var express = require('express')
var bodyParser = require('body-parser')

var app = express()

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


app.use('/public', express.static('./public/'))


// 配置使用 art-template模板引擎
// 第一个参数表示，当渲染以 .art 结尾的文件的时候，使用模板引擎，第二个参数为适配。
app.engine('html', require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// 当配置了模板引擎时，render方法才可以使用
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中views目录下查找


app.get('/', function (req, res) {
    res.render('index.html', {
        comments: comments
    })
})

app.get('/post', function (req, res) {
    res.render('post.html')
})

app.post('/post', function(req,res) {
    // 1.获取表单 post 请求体数据
    // 2.处理
    // 3.发送响应
    var comment = req.body
    comment.dateTime = '2020-01-27 17：31'
    comments.unshift(comment)
    res.redirect('/')
})

// app.get('/comment', function(req,res) {
//     var comment = req.query
//     comment.dateTime = '2020-01-27 17：31'
//     comments.unshift(comment)
//     res.redirect('/')
// })

app.listen(3000, function () {
    console.log('running')
})
var express = require('express')

var app = express()

// app.use('/public/', express.static('./public/'))

// 当省略第一个参数时，则使用省略/public/的方式来访问

app.get('/', function(req, res) {
    res.send('hello express')
})

app.listen(3000, function() {
    console.log('running')
})
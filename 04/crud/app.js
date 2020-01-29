var express = require('express')
var bodyParser = require('body-parser')
var router = require('./router')

var app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// 把路由器挂在到app服务中
app.use(router)

app.listen(3000, function() {
    console.log('running')
})
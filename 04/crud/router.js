var fs = require('fs')
var Students = require('./student')
var express = require('express')

// 创建一个路由容器
var router = express.Router()

// 把路由都挂在到router容器中
router.get('/students', function (req, res) {
    Students.find (function (err, students) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students: students
        })
    })
})

router.get('/students/new', function (req,res) {
    res.render('new.html')
})

router.post('/students/new', function (req,res) {
    // console.log(req.body)
    fs.readFile('./db.json', function(err, data) {
        if (err) {
            return res.status(500).send('Server error')
        }

    })
})

router.get('/students/edit', function (req,res) {
    
})

router.post('/students/edit', function (req,res) {
    
})

router.get('/students/delete', function (req,res) {
    
})


// 把router导出
 module.exports = router
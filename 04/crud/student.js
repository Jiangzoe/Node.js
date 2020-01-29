// 数据操作文件模块

var fs = require('fs')

var dbPath = './db.json'

// 获取所有学生列表

exports.find = function (callback) {
    fs.readFile(dbPath,'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}


// 添加保存学生
exports.save = function () {
    
}

// 更新学生
exports.update = function () {
    
}

// 删除学生
exports.delete = function () {
    
}
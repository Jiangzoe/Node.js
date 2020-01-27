var fs = require('fs')

fs.readFile('data/a.txt', function (err, data) {
    if (err) {
        return console.log('读取失败')
    }
    console.log(data.toString())
})

// 在木块加载中，相对路径中的 ./ 不能省略
require ('./data/foo.js')('hello')

// 在文件操作的相对路径中
//     ./data/a.txt 相对于当前目录
//      data/a.txt 相对于当前目录
//     /data/a.txt 相对于当前文件模块所处磁盘根目录
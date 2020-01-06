var fs = require('fs')

// 第一个参数为文件路径
// 第二个参数为写入内容
// 第三个参数为回调函数（error——成功的话文件写入成功，error为null。失败的话未见写入失败，error为错误对象。)
fs.writeFile('./example01.txt', '这是一个测试文件', function(error) {
    console.log('文件写入成功')
})
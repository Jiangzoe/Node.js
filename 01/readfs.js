// fs 是 file-system 的简写。
// 在 node 中如果想要进行文件操作，必须引入 fs 这个核心模块

// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs')

// 2.读取文件
//    第一个参数是要读取的文件路径
//    第二个参数是一个回调函数（接受两个参数，error——如果读取失败，error就是错误对象，成功则为null。data——如果读取成功，就是读取到的数据，如果失败，error就是错误对象。）

fs.readFile('./helloworld.js',function(error, data) {
    // console.log(data)
    // <Buffer 76 61 72 20 66 6f 6f 20 3d 20 27 68 65 6c 6c 6f 20 6e 6f 64 65 6a 73 27 0d 0a 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 66 6f 6f 29>
    // 文件中存储的都是二进制数据，看到的为16进制。可以通过toString方法将其转为我们认识的字符。
    console.log(data.toString())
})

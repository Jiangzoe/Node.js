var fs = require('fs')

fs.readdir('./www', function (err,files) {
    if (err) {
        return console.log('目录不存在')
    } else {
        console.log(files)
    }
})
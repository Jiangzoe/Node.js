var template = require('art-template')

var fs = require('fs')

fs.readFile('./tpl.html', function(err, data){
    if (err) {
        return console.log('读取文件失败了')
    }
    var ret = template.render(data.toString(), {
        name:'Jiang',
        hobbies:['coding', 'music']
    })
    console.log(ret)
})

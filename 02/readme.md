# Apache

根据输入的请求地址来显示对应的资源，实现一个简单的`Apache`功能

```js
var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = './www'

server.on('request', function (req,res) {
    var url = req.url
    var filePath = '/index.html'

    if (url !== '/') {
       filePath = url
       fs.readFile(wwwDir + url, function (err,data) {
           if (err) {
               return res.end('404 not found')
            } else {
                res.end(data)
            }
        })
    } 
})

server.listen(3000, function () {
    console.log('running')
})
```

# 读取目录

```js
var fs = require('fs')

fs.readdir('./www', function (err,files) {
    if (err) {
        return console.log('目录不存在')
    } else {
        console.log(files)
    }
})
```

# 模板引擎

1. 安装：

   ```npm install art-template```

2. 在需要使用的文件模块中使用`require`方法加载`art-template`

   ```js
   require('art-template')
   ```

3. 查文档，使用模板引擎的`API`

例子:

```html
<!--tpl.html-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p>hello, my name is {{name}}</p>
    <p>i like {{each hobbies}} {{$value}} {{/each}} </p>
</body>
</html>
```



```js
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

```


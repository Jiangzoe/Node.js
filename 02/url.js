var url = require('url')

var obj =  url.parse('/comment?name=一只酱&message=今天好冷啊', true)
console.log(obj.query)
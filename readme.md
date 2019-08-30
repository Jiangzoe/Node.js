# Node.js
## hello node
- 使用`node`自带的`http`模块
  ```
  const http = require('http')
  ```
- 调用`http.creatServer`方法在本机上开启一个http服务，监听8000端口
  ```
  http.createServer((req, res) => {
    res.end('Hello Node!')
  }).listen(8000, () => { 
    console.log('listen on 8000')
  })
  ```

## 如何提供一个`api`
- 为隐式响应头设置单个响应头的值。
  ```
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  ```
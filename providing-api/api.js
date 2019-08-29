const http = require('http')

const data = {
    name: '一只酱',
    describe: '正在学习node.js',
    date: new Date()
}

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    const result = JSON.stringify(data);
    res.end(result);
}).listen(8000, () => {
    console.log('listen on 8000!');
})
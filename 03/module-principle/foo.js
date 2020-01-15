// 在 node 中，每个模块内部都有一个自己的 module 对象

// var module = {
//     exports: {

//     }
// }

module.exports.foo = 'bar'

// 为了简化操作，专门提供了 exports = moudule.exports

// 默认在代码的最后有一句
// return module.exports
// 谁来 require 我，就能得到 module.exports
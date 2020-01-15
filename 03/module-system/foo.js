var foo = 'bar'

function add(x, y) {
    return x + y
}

// exports.add = add

// 直接得到的是对象
// 当仅仅希望导出一个方法时
module.exports = add
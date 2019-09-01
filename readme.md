# Node.js

## CommonJS规范

### CommonJS模块规范
- 模块引用
  ```
  var math = require('math')
  ```
  `CommonJS`中存在`require()`方法，这个方法接受模块标识，以此引入一个模块的`API`到当前上下文中
- 模块定义
  ```

  ```
  上下文提供了`exports`对象用于导出当前模块的方法或者变量，并且它是唯一导出的出口。
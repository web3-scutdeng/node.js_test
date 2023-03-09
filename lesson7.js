//nodemon:能监听项目文件的变动，当代码被修改后，nodemon会帮我们重启项目

//从此我们不再用node XXX   启动项目 而是用nodemon启动啦

/**
 * 将路由抽象为模块化路由的步骤
 * 1.创建路由模块对应的js文件
 * 2.调用express.Router()函数创建路由对象
 * 3.向路由对象上挂载具体路由
 * 4.使用module.exports向外共享路由对象
 * 5.使用app.use()注册路由模块
 */

//这是路由模块
const express = require("express");
const router = express.Router();
//挂载具体的路由
router.get("/", (req, res) => {
  res.send("get user list");
});
router.post("/", (req, res) => {
  res.send("post user list");
});
//向外导出路由对象
module.exports = router;

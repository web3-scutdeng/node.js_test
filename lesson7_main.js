const express = require("express");
const router = require("./lesson7");
const app = express();

//注入路由
//注意：app.use()的作用就是注册全局中间件
app.use(router);

//为路由模块添加访问前缀

app.use("/api", router);

app.listen(80, () => {
  console.log("localhost");
});

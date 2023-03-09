//这一部分出错，需要重新去看

//1.导入express
const express = require("express");

//2.创建服务器
App = express();

//托管静态资源：express.static()
App.use(express.static("./test"));
//托管多个静态资源就多次调用

//如果希望在访问静态托管资源之前，挂载路径前缀，使用如下方式
// App.use("/test", express.static("./test"));

App.listen(8080, (req, res) => {
  console.log("http://127.0.0.1");
});

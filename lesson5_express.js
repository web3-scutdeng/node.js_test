//基于nodejs平台，极简Web开发框架

//1.导入express
const express = require("express");

//2.创建服务器
App = express();

//2.启动服务器
App.listen(8080, () => {
  //app.get()方法，监听get请求
  App.get("/user", (req, res) => {
    //app.send()方法，可以把处理好的内容发送给客户端
    res.send({ name: "张三", age: "20" });
  });
  //app.post()方法，监听post请求
  App.post("/user", (req, res) => {
    res.send("请求成功");
  });
  //req.query对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数
  App.get("/", (req, res) => {
    //默认情况下，req.query是空对象
    console.log(req.query);
    res.send(req.query);
  });
  /*获取url中的动态参数
  通过req.params对象，可以访问到url中通过”：“提交的对象
  */
  //注意：这里的:id是动态的参数

  App.get("/user/:id/:name", (req, res) => {
    //req.params是动态匹配到的参数,冒号是固定写法，但是冒号后面的字符串不是
    //可以有多个动态参数
    console.log(req.params);
    res.send(req.params);
  });
});

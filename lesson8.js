//定义中间件函数
const express = require("express");
const app = express();

//定义一个最简单的中间件函数
const mw = function (req, res, next) {
  console.log("111");
  //把流转关系转交给下一个中间件或路由
  next();
};

/**
 * 全局生效的中间件
 * 客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件
 * 通过调用app.use(中间件函数)，即可定义
 */
app.use(mw);

//定义全局中间件的简便形式
// app.use(function (req, res, next) {
//   next();
// });

/**
 * 中间件的作用
 * 多个中间件之间共享一个req和res,基于这样的特性，我们可以在上游的中间件中，
 * 统一为req和res添加自定义属性和方法，供下游中间件使用
 */

//定义多个全局中间件，会按照顺序依次调用

app.get("/", (req, res) => {
  console.log("get");
  res.send("get");
});
app.post("/", (req, res) => {
  console.log("post");
  res.send("post");
});

/**
 * 局部生效的中间件：不使用app.use()定义的中间件
 *
 */

const mw1 = function (req, res, next) {
  console.log("222");
  next();
};

app.get("/1", mw1, (req, res) => {
  res.send("局部中间件生效");
});

/**
 * 可以在路由中定义多个局部中间件
 * app.get("/",mw1,mw2,(req,res)=>{})
 * app.get("/",[mw1,mw2],(req,res)=>{})
 */
app.listen(80, (req, res) => {
  console.log("qqq");
});

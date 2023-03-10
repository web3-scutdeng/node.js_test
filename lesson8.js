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

/**
 * 中间件在路由之前注册中间件，程序的调用问题
 * 执行完中间件代码之后，next()是必须的
 * 为了防止代码逻辑混乱，不要早next()之后再写代码了
 */

/**
 * 中间件的分类：
 * 1.应用级别的中间件：绑定在app实例的中间件
 * 2.路由级别的中间件：绑定咋express.Router()实例中的中间件
 * 3.错误级别的中间件：专门用来捕获整个项目中发生的异常错误 ，形参里面包含了err,放在第一个
 * 4.express内置中间件：express.static()
 * /express.json // 解析Josn格式的请求体数据
 * /express.urlencoded() // 解析url-encoded格式的请求体数据
 */

// e.g3:  tips,要把错误路由中间件放在所有路由之后
app.get("/err", (req, res) => {
  throw new Error("服务器发生了内部错误");
  res.send("page");
});
app.use((err, req, res, next) => {
  console.log("发生了错误:" + err.message);
  res.send(err.message);
});

app.listen(80, (req, res) => {
  console.log("qqq");
});

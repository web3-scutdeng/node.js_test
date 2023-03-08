const name = "dxj";
const gender = "female";

//默认情况下。module.exports指向空对象

// 给对象挂载属性
module.exports.username = name;
module.exports.func = function () {
  console.log("hello");
};

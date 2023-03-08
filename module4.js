//默认情况下。module.exports指向空对象

// 给对象挂载属性
module.exports.username = "dxj";
module.exports.func = function () {
  console.log("hello");
};

module.exports = {
  username: "dxj",
  age: "18",
};

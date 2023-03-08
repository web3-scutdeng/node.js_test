const m = require("./module"); //不写js也会补全
console.log(m);

//模块作用域
//自自定义模块中，定义的变量、方法等成员只能够在当前模块被访问。能够防止全局变量被污染
const m2 = require("./module2.js");
console.log(m2); //依旧会是一个空的{}

//module对象
// 在每一个自定义js模块中，都有一个module对象，存储了和当前模块有关的信息、
// exports属性：可以使模块内的对象对模块外访问到

console.log(module);

//module.exports 对象
// 在自定义模块之中，可以使用module.exports 对象共享模块内成员，供外界使用
// 外界通过require（）方法导入自定义模块时，得到的就是module.exports所指向的对象

const m3 = require("./module3");
console.log(m3);

//使用require()方法导入模块时，导入的结果，永远以module.exports指向的对象为主
const m4 = require("./module4");
console.log(m4);

//nodejs里面的第三方模块，也叫做包

//npm使用--下载： npm i XXX
// npm i XXX @xxx  安装指定版本的包

//初次包安装完成后，在项目文件夹多一个node_modules的文件夹和package-lock.js的配置文件

//包管理配置文件
//在项目的根目录中，必须提供一个叫做package.json的包管理配置文件，用来记录和项目有关的一些配置信息
//使用 npm init -y 快速创建package.json包管理器
//一次性安装所有包：npm install /npm i 一次性读取package.json里面所有的包，并下载
//tips :上一个命令只能在英文的目录下成功运行，目录不要使用中文也不用出现空格
//卸载包 npm uninstall XXX

//devdependencies节点：如果某些项目只在开发阶段用到，在项目上线之后不会用到，则建议把这些包记到devDependency节点中
// npm i -D XXX,/npm i XXX -DD，/npm i --save-dev XXX ,/npm i XXX --save-dev
//如果都需要用到，则建议记录到dependencies中

//解决下包速度慢的问题：
/*
1.检查下包镜像源： npm config get rigistry
2.切换到淘宝镜像：npm config set rigistry=https://registry.npm.taobao.org/
3.检查镜像源是否成功：npm config get rigistry
*/

// 为了更方便的切换下包的镜像源，我们可以使用nrm工具，利用nrm提供的终端命令，可以快速切换和查看下包的镜像源
/*
npm i nrm -g
查看可用的镜像源：nrm ls
将镜像源切换为淘宝：nrm use taobao
*/

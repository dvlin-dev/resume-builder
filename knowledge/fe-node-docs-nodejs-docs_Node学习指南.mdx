认识 Node.js
Node 是一个服务器端 JavaScript 解释器
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境
Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效
Node.js 的包管理器 npm，是全球最大的开源库生态系统
Node.js 是一门动态语言，运行在服务端的 Javascript
版本介绍
在命令窗口中输入 node -v 可以查看版本
0.x 完全不技术 ES6
4.x 部分支持 ES6 特性
5.x 部分支持ES6特性（比4.x多些），属于过渡产品，现在来说应该没有什么理由去用这个了
6.x 支持98%的 ES6 特性
8.x 支持 ES6 特性
环境搭建
下载安装文件
下载完后进行安装，建议安装到默认路径，注意不要有中文路径
配置环境变量
在命令窗口中输入 node -v，如果正常显示版本号则表示安装成功
NVM管理Node版本

先安装一个 nvm（ 
https://github.com/creationix/nvm ）

$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.2/install.sh | bash

@前端进阶之旅: 代码已经复制到剪贴板

nvm 的全称是 Node Version Manager，之所以需要这个工具，是因为 Node.js 的各种特性都没有稳定下来，所以我们经常由于老项目或尝新的原因，需要切换各种版本。

安装完成后，你的 shell 里面应该就有个 nvm 命令了，调用它试试

$ nvm

@前端进阶之旅: 代码已经复制到剪贴板

当看到有输出时，则 nvm 安装成功。

安装 Node.js

使用 nvm 的命令安装 Node.js

$ nvm install 0.12

@前端进阶之旅: 代码已经复制到剪贴板

安装完成后，查看一下

$ nvm ls

@前端进阶之旅: 代码已经复制到剪贴板

这时候可以看到自己安装的所有 Node.js 版本，输出应如下：

（图1）

那个绿色小箭头的意思就是现在正在使用的版本，我这里是 v0.10.29。我还安装了 v0.11.14，但它并非我当前使用的版本。

如果你那里没有出现绿色小箭头的话，告诉 nvm 你要使用 0.12.x 版本

$ nvm use 0.12

@前端进阶之旅: 代码已经复制到剪贴板

然后再次查看，这时候小箭头应该出现了。

OK，我们在终端中输入

$ node

@前端进阶之旅: 代码已经复制到剪贴板

REPL(read–eval–print loop) 应该就出来了，那我们就成功了。

随便敲两行命令玩玩吧。

比如 > while (true) {}，这时你的 CPU 应该会飚高。

完善安装

上述过程完成后，有时会出现，当开启一个新的 shell 窗口时，找不到 node 命令的情况。

这种情况一般来自两个原因

shell 不知道 nvm 的存在

nvm 已经存在，但是没有 default 的 Node.js 版本可用。

解决方式：

一、检查 ~/.profile 或者 ~/.bash_profile 中有没有这样两句

export NVM_DIR="/Users/YOURUSERNAME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

@前端进阶之旅: 代码已经复制到剪贴板

没有的话，加进去。这两句会在 bash 启动的时候被调用，然后注册 nvm 命令。

二、调用 $ nvm ls

看看像不像上述图1中一样，有 default 的指向。

如果没有的话，执行 $ nvm alias default 0.12再$ nvm ls

Node.js 模块

模块系统是 Node.js 最基本也是最常用的。一般情况模块可分为四类：

原生模块
文件模块
第三方模块
自定义模块
自定义模块
创建模块(b.js)
//b.js
function FunA(){
    return 'Tom';
}
//暴露方法 FunA
module.exports = FunA;

@前端进阶之旅: 代码已经复制到剪贴板
加载模块(a.js)
//a.js
var FunA = require('./b.js');//得到 b.js => FunA
var name = FunA();// 运行 FunA，name = 'Tom'
console.log(name); // 输出结果

@前端进阶之旅: 代码已经复制到剪贴板
module.exports

module.exports 就 Node.js 用于对外暴露，或者说对外开放指定访问权限的一个对象。如上面的案例，如果没有这段代码

module.exports = FunA;

@前端进阶之旅: 代码已经复制到剪贴板

那么 require('./b.js') 就会为 undefined。 一个模块中有且仅有一个 module.exports，如果有多个那后面的则会覆盖前面的。

exports

exports 是 module 对象的一个属性，同时它也是一个对象。在很多时候一个 js 文件有多个需要暴露的方法或是对象，module.exports 又只能暴露一个，那这个时候就要用到 exports:

function FunA(){
    return 'Tom';
}

function FunB(){
    return 'Sam';
}

exports.FunA = FunA;
exports.FunB = FunB;

@前端进阶之旅: 代码已经复制到剪贴板
//FunA = exports,exports 是一个对象
var FunA = require('./b.js');
var name1 = FunA.FunA();// 运行 FunA，name = 'Tom'
var name2 = FunA.FunB();// 运行 FunB，name = 'Sam'
console.log(name1);
console.log(name2);

@前端进阶之旅: 代码已经复制到剪贴板

当然在引入的时候也可以这样写

//FunA = exports,exports 是一个对象
var {FunA, FunB} = require('./b.js');
var name1 = FunA();// 运行 FunA，name = 'Tom'
var name2 = FunB();// 运行 FunB，name = 'Sam'
console.log(name1);
console.log(name2);

@前端进阶之旅: 代码已经复制到剪贴板
npm scripts
NPM版本管理
npm -v

@前端进阶之旅: 代码已经复制到剪贴板

使用nrm管理npm版本

npm install -g nrm

@前端进阶之旅: 代码已经复制到剪贴板

执行命令nrm ls查看可选的源。

*npm ---- https://registry.npmjs.org/

cnpm --- http://r.cnpmjs.org/

taobao - http://registry.npm.taobao.org/

eu ----- http://registry.npmjs.eu/

au ----- http://registry.npmjs.org.au/

sl ----- http://npm.strongloop.com/

nj ----- https://registry.nodejitsu.com/

@前端进阶之旅: 代码已经复制到剪贴板

其中，带*的是当前使用的源，上面的输出表明当前源是官方源。

切换

如果要切换到taobao源，执行命令 nrm use taobao。

增加

你可以增加定制的源，特别适用于添加企业内部的私有源，执行命令 nrm add <registry> <url>，其中reigstry为源名，url为源的路径。

nrm add registry http://registry.npm.frp.trmap.cn/

@前端进阶之旅: 代码已经复制到剪贴板
删除

执行命令nrm del <registry>删除对应的源。

测试速度

你还可以通过 nrm test 测试相应源的响应时间。

nrm test npm             

@前端进阶之旅: 代码已经复制到剪贴板




node部署 →
写在前面

谈到node断点调试，目前主要有三种方式，通过node内置调试工具、通过IDE（如vscode）、通过node-inspector，三者本质上差不多。本文着重点在于介绍 如何在本地通过node-inspector 调试远程服务器上的node代码。

在进入主题之前，首先会对三种调试方式进行入门讲解，方便新手理解后面的内容。至于老司机们，可以直接跳到主题去。

方式一：内置debug功能
进入调试模式（在第1行断点）
node debug app.js

@前端进阶之旅: 代码已经复制到剪贴板

进入调试模式（在第n行断点）

比如要在第3行断点。

方式一：通过debugger

方式二：通过sb(line)。

执行下一步

通过next命令。

跳到下一个断点

通过cont命令。

查看某个变量的值

输入repl命令后，再次输入变量名，就可以看到变量对应的值。如果想继续执行代码，可以按ctrl+c退出。

添加/删除watch
通过watch(expr)来添加监视对象。
通过watchers查看当前所有的监视对象。
通过unwatch(expr)来删除监视对象。

添加watch：

删除watch：

进入/跳出函数（step in、step out）
进入函数：通过step或者s。
跳出函数：通过out或者o。

示例代码如下，假设代码运行到logger(str);这一行，首先跳进函数内部，再跳出函数。

var nick = 'chyingp';
var country = 'China';

var str = nick + ' live in ' + country;

var logger = function(msg){
    console.log(msg); // 这里
    console.log('这行会跳过'); // 跳过这行
};

logger(str);  // 假设运行到这里，想要进入logger方法

console.log(str);

@前端进阶之旅: 代码已经复制到剪贴板

示例截图如下：

多个文件断点

通过setBreakpoint('script.js', 1), sb(...)，在某个文件某一行添加断点。反正我是没成功过。。。怎么看都是bug。。。












← 3.1 基础调试 console
4.1 网络服务 http →
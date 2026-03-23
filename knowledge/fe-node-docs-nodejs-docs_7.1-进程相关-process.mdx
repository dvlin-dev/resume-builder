模块概览

process是node的全局模块，作用比较直观。可以通过它来获得node进程相关的信息，比如运行node程序时的命令行参数。或者设置进程相关信息，比如设置环境变量。

环境变量：process.env

使用频率很高，node服务运行时，时常会判断当前服务运行的环境，如下所示

if(process.env.NODE_ENV === 'production'){
    console.log('生产环境');
}else{
    console.log('非生产环境');
}

@前端进阶之旅: 代码已经复制到剪贴板

运行命令 NODE_ENV=production node env.js，输出如下

非生产环境

@前端进阶之旅: 代码已经复制到剪贴板
异步：process.nextTick(fn)

使用频率同样很高，通常用在异步的场景，来个简单的栗子：

console.log('海贼王');
process.nextTick(function(){
    console.log('火影忍者');
});
console.log('死神');

// 输出如下
// 海贼王
// 死神
// 火影忍者

@前端进阶之旅: 代码已经复制到剪贴板

process.nextTick(fn) 咋看跟 setTimeout(fn, 0) 很像，但实际有实现及性能上的差异，我们先记住几个点：

process.nextTick(fn) 将 fn 放到 node 事件循环的 下一个tick 里；
process.nextTick(fn) 比 setTimetout(fn, 0) 性能高；

这里不打算深入讨论，感兴趣的可以点击
这里进行了解。

获取命令行参数：process.argv

process.argv 返回一个数组，数组元素分别如下：

元素1：node
元素2：可执行文件的绝对路径
元素x：其他，比如参数等
// print process.argv
process.argv.forEach(function(val, index, array) {
  console.log('参数' + index + ': ' + val);
});

@前端进阶之旅: 代码已经复制到剪贴板

运行命令 NODE_ENV=dev node argv.js --env production，输出如下。（不包含环境变量）

参数0: /Users/a/.nvm/versions/node/v6.1.0/bin/node
参数1: /Users/a/Documents/git-code/nodejs-learning-guide/examples/2016.11.22-node-process/argv.js
参数2: --env
参数3: production

@前端进阶之旅: 代码已经复制到剪贴板
获取node specific参数：process.execArgv

跟 process.argv 看着像，但差异很大。它会返回 node specific 的参数（也就是运行node程序特有的参数啦，比如 --harmony）。这部分参数不会出现在 process.argv 里。

我们来看个例子，相当直观。输入命令 node --harmony execArgv.js --nick chyingp， execArgv.js 代码如下：

process.execArgv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});
// 输出：
// 0: --harmony

process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});
// 输出：
// 0: /Users/a/.nvm/versions/node/v6.1.0/bin/node
// 1: /Users/a/Documents/git-code/nodejs-learning-guide/examples/2016.11.22-node-process/execArgv.js
// 2: --nick
// 3: chyingp

@前端进阶之旅: 代码已经复制到剪贴板
当前工作路径：process.cwd() vs process.chdir(directory)
process.cwd()：返回当前工作路径
process.chdir(directory)：切换当前工作路径

工作路径的用途不用过多解释了，直接上代码

console.log('Starting directory: ' + process.cwd());
try {
  process.chdir('/tmp');
  console.log('New directory: ' + process.cwd());
}
catch (err) {
  console.log('chdir: ' + err);
}

@前端进阶之旅: 代码已经复制到剪贴板

输出如下：

Starting directory: /Users/a/Documents/git-code/nodejs-learning-guide/examples/2016.11.22-node-process
New directory: /private/tmp

@前端进阶之旅: 代码已经复制到剪贴板
IPC相关
process.connected：如果当前进程是子进程，且与父进程之间通过IPC通道连接着，则为true；
process.disconnect()：断开与父进程之间的IPC通道，此时会将 process.connected 置为false；

首先是 connected.js，通过 fork 创建子进程（父子进程之间创建了IPC通道）

var child_process = require('child_process');

child_process.fork('./connectedChild.js', {
  stdio: 'inherit'
});

@前端进阶之旅: 代码已经复制到剪贴板

然后，在 connectedChild.js 里面。

console.log( 'process.connected: ' + process.connected );
process.disconnect();
console.log( 'process.connected: ' + process.connected );

// 输出：
// process.connected: true
// process.connected: false

@前端进阶之旅: 代码已经复制到剪贴板
其他

process.config：跟node的编译配置参数有关

标准输入/标准输出/标准错误输出：process.stdin、process.stdout

process.stdin、process.stdout、process.stderr 分别代表进程的标准输入、标准输出、标准错误输出。看官网的例子

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});

@前端进阶之旅: 代码已经复制到剪贴板

执行程序，可以看到，程序通过 process.stdin 读取用户输入的同时，通过 process.stdout 将内容输出到控制台

hello
data: hello
world
data: world

@前端进阶之旅: 代码已经复制到剪贴板

process.stderr也差不多，读者可以自己试下。

用户组/用户 相关

process.seteuid(id)： process.geteuid()：获得当前用户的id。（POSIX平台上才有效）

process.getgid(id) process.getgid()：获得当前群组的id。（POSIX平台上才有效，群组、有效群组 的区别，请自行谷歌）

process.setegid(id) process.getegid()：获得当前有效群组的id。（POSIX平台上才有效）

process.setroups(groups)： process.getgroups()：获得附加群组的id。（POSIX平台上才有效，

process.setgroups(groups)： process.setgroups(groups)：

process.initgroups(user, extra_group)：












← 6.2 逐行读取 readline
7.2 子进程 child →
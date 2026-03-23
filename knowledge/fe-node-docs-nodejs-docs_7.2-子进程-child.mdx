模块概览

在node中，child_process这个模块非常重要。掌握了它，等于在node的世界开启了一扇新的大门。

举个简单的例子：

const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

@前端进阶之旅: 代码已经复制到剪贴板
几种创建子进程的方式

注意事项：

下面列出来的都是异步创建子进程的方式，每一种方式都有对应的同步版本。
.exec()、.execFile()、.fork()底层都是通过.spawn()实现的。
.exec()、execFile()额外提供了回调，当子进程停止的时候执行。

child_process.spawn(command[, args][, options]) child_process.exec(command[, options][, callback]) child_process.execFile(file[, args][, options][, callback]) child_process.fork(modulePath[, args][, options])

child_process.exec(command[, options][, callback])

创建一个shell，然后在shell里执行命令。执行完成后，将stdout、stderr作为参数传入回调方法。

spawns a shell and runs a command within that shell, passing the stdout and stderr to a callback function when complete.

例子如下：

执行成功，error为null；执行失败，error为Error实例。error.code为错误码，
stdout、stderr为标准输出、标准错误。默认是字符串，除非options.encoding为buffer
var exec = require('child_process').exec;

// 成功的例子
exec('ls -al', function(error, stdout, stderr){
    if(error) {
        console.error('error: ' + error);
        return;
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + typeof stderr);
});

// 失败的例子
exec('ls hello.txt', function(error, stdout, stderr){
    if(error) {
        console.error('error: ' + error);
        return;
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
});

@前端进阶之旅: 代码已经复制到剪贴板
参数说明：
cwd：当前工作路径。
env：环境变量。
encoding：编码，默认是utf8。
shell：用来执行命令的shell，unix上默认是/bin/sh，windows上默认是cmd.exe。
timeout：默认是0。
killSignal：默认是SIGTERM。
uid：执行进程的uid。
gid：执行进程的gid。
maxBuffer： 标准输出、错误输出最大允许的数据量（单位为字节），如果超出的话，子进程就会被杀死。默认是200*1024（就是200k啦）

备注：

如果timeout大于0，那么，当子进程运行超过timeout毫秒，那么，就会给进程发送killSignal指定的信号（比如SIGTERM）。
如果运行没有出错，那么error为null。如果运行出错，那么，error.code就是退出代码（exist code），error.signal会被设置成终止进程的信号。（比如CTRL+C时发送的SIGINT）
风险项

传入的命令，如果是用户输入的，有可能产生类似sql注入的风险，比如

exec('ls hello.txt; rm -rf *', function(error, stdout, stderr){
    if(error) {
        console.error('error: ' + error);
        // return;
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
});

@前端进阶之旅: 代码已经复制到剪贴板
备注事项

Note: Unlike the exec(3) POSIX system call, child_process.exec() does not replace the existing process and uses a shell to execute the command.

child_process.execFile(file[, args][, options][, callback])

跟.exec()类似，不同点在于，没有创建一个新的shell。至少有两点影响

比child_process.exec()效率高一些。（实际待测试）
一些操作，比如I/O重定向，文件glob等不支持。

similar to child_process.exec() except that it spawns the command directly without first spawning a shell.

file： 可执行文件的名字，或者路径。

例子：

var child_process = require('child_process');

child_process.execFile('node', ['--version'], function(error, stdout, stderr){
    if(error){
        throw error;
    }
    console.log(stdout);
});

child_process.execFile('/Users/a/.nvm/versions/node/v6.1.0/bin/node', ['--version'], function(error, stdout, stderr){
    if(error){
        throw error;
    }
    console.log(stdout);
});

@前端进阶之旅: 代码已经复制到剪贴板

====== 扩展阅读 =======

从node源码来看，exec()、execFile()最大的差别，就在于是否创建了shell。（execFile()内部，options.shell === false），那么，可以手动设置shell。以下代码差不多是等价的。win下的shell设置有所不同，感兴趣的同学可以自己试验下。

备注：execFile()内部最终还是通过spawn()实现的， 如果没有设置 {shell: ‘/bin/bash’}，那么 spawm() 内部对命令的解析会有所不同，execFile(‘ls -al .’) 会直接报错。

var child_process = require('child_process');
var execFile = child_process.execFile;
var exec = child_process.exec;

exec('ls -al .', function(error, stdout, stderr){
    if(error){
        throw error;
    }
    console.log(stdout);
});

execFile('ls -al .', {shell: '/bin/bash'}, function(error, stdout, stderr){
    if(error){
        throw error;
    }
    console.log(stdout);
});

@前端进阶之旅: 代码已经复制到剪贴板
child_process.fork(modulePath[, args][, options])

modulePath：子进程运行的模块。

参数说明：（重复的参数说明就不在这里列举）

execPath： 用来创建子进程的可执行文件，默认是/usr/local/bin/node。也就是说，你可通过execPath来指定具体的node可执行文件路径。（比如多个node版本）
execArgv： 传给可执行文件的字符串参数列表。默认是process.execArgv，跟父进程保持一致。
silent： 默认是false，即子进程的stdio从父进程继承。如果是true，则直接pipe向子进程的child.stdin、child.stdout等。
stdio： 如果声明了stdio，则会覆盖silent选项的设置。

例子1：silent

parent.js

var child_process = require('child_process');

// 例子一：会打印出 output from the child
// 默认情况，silent 为 false，子进程的 stdout 等
// 从父进程继承
child_process.fork('./child.js', {
    silent: false
});

// 例子二：不会打印出 output from the silent child
// silent 为 true，子进程的 stdout 等
// pipe 向父进程
child_process.fork('./silentChild.js', {
    silent: true
});

// 例子三：打印出 output from another silent child
var child = child_process.fork('./anotherSilentChild.js', {
    silent: true
});

child.stdout.setEncoding('utf8');
child.stdout.on('data', function(data){
    console.log(data);
});

@前端进阶之旅: 代码已经复制到剪贴板

child.js

console.log('output from the child');

@前端进阶之旅: 代码已经复制到剪贴板

silentChild.js

console.log('output from the silent child');

@前端进阶之旅: 代码已经复制到剪贴板

anotherSilentChild.js

console.log('output from another silent child');

@前端进阶之旅: 代码已经复制到剪贴板

例子二：ipc

parent.js

var child_process = require('child_process');

var child = child_process.fork('./child.js');

child.on('message', function(m){
    console.log('message from child: ' + JSON.stringify(m));
});

child.send({from: 'parent'});

@前端进阶之旅: 代码已经复制到剪贴板

child.js

process.on('message', function(m){
    console.log('message from parent: ' + JSON.stringify(m));
});

process.send({from: 'child'});

@前端进阶之旅: 代码已经复制到剪贴板

运行结果

➜  ipc git:(master) ✗ node parent.js
message from child: {"from":"child"}
message from parent: {"from":"parent"}

@前端进阶之旅: 代码已经复制到剪贴板

例子三：execArgv

首先，process.execArgv的定义，参考
这里。设置execArgv的目的一般在于，让子进程跟父进程保持相同的执行环境。

比如，父进程指定了--harmony，如果子进程没有指定，那么就要跪了。

parent.js

var child_process = require('child_process');

console.log('parent execArgv: ' + process.execArgv);

child_process.fork('./child.js', {
    execArgv: process.execArgv
});

@前端进阶之旅: 代码已经复制到剪贴板

child.js

console.log('child execArgv: ' + process.execArgv);

@前端进阶之旅: 代码已经复制到剪贴板

运行结果

➜  execArgv git:(master) ✗ node --harmony parent.js
parent execArgv: --harmony
child execArgv: --harmony

@前端进阶之旅: 代码已经复制到剪贴板

例子3：execPath（TODO 待举例子）

child_process.spawn(command[, args][, options])

command：要执行的命令

options参数说明：

argv0：[String] 这货比较诡异，在uninx、windows上表现不一样。有需要再深究。
stdio：[Array] | [String] 子进程的stdio。参考
这里
detached：[Boolean] 让子进程独立于父进程之外运行。同样在不同平台上表现有差异，具体参考
这里
shell：[Boolean] | [String] 如果是true，在shell里运行程序。默认是false。（很有用，比如 可以通过 /bin/sh -c xxx 来实现 .exec() 这样的效果）

例子1：基础例子

var spawn = require('child_process').spawn;
var ls = spawn('ls', ['-al']);

ls.stdout.on('data', function(data){
    console.log('data from child: ' + data);
});


ls.stderr.on('data', function(data){
    console.log('error from child: ' + data);
});

ls.on('close', function(code){
    console.log('child exists with code: ' + code);
});

@前端进阶之旅: 代码已经复制到剪贴板

例子2：声明stdio

var spawn = require('child_process').spawn;
var ls = spawn('ls', ['-al'], {
    stdio: 'inherit'
});

ls.on('close', function(code){
    console.log('child exists with code: ' + code);
});

@前端进阶之旅: 代码已经复制到剪贴板

例子3：声明使用shell

var spawn = require('child_process').spawn;

// 运行 echo "hello nodejs" | wc
var ls = spawn('bash', ['-c', 'echo "hello nodejs" | wc'], {
    stdio: 'inherit',
    shell: true
});

ls.on('close', function(code){
    console.log('child exists with code: ' + code);
});

@前端进阶之旅: 代码已经复制到剪贴板

例子4：错误处理，包含两种场景，这两种场景有不同的处理方式。

场景1：命令本身不存在，创建子进程报错。
场景2：命令存在，但运行过程报错。
var spawn = require('child_process').spawn;
var child = spawn('bad_command');

child.on('error', (err) => {
  console.log('Failed to start child process 1.');
});

var child2 = spawn('ls', ['nonexistFile']);

child2.stderr.on('data', function(data){
    console.log('Error msg from process 2: ' + data);
});

child2.on('error', (err) => {
  console.log('Failed to start child process 2.');
});

@前端进阶之旅: 代码已经复制到剪贴板

运行结果如下。

➜  spawn git:(master) ✗ node error/error.js
Failed to start child process 1.
Error msg from process 2: ls: nonexistFile: No such file or directory

@前端进阶之旅: 代码已经复制到剪贴板

例子5：echo “hello nodejs” | grep “nodejs”

// echo "hello nodejs" | grep "nodejs"
var child_process = require('child_process');

var echo = child_process.spawn('echo', ['hello nodejs']);
var grep = child_process.spawn('grep', ['nodejs']);

grep.stdout.setEncoding('utf8');

echo.stdout.on('data', function(data){
    grep.stdin.write(data);
});

echo.on('close', function(code){
    if(code!==0){
        console.log('echo exists with code: ' + code);
    }
    grep.stdin.end();
});

grep.stdout.on('data', function(data){
    console.log('grep: ' + data);
});

grep.on('close', function(code){
    if(code!==0){
        console.log('grep exists with code: ' + code);
    }
});

@前端进阶之旅: 代码已经复制到剪贴板

运行结果：

➜  spawn git:(master) ✗ node pipe/pipe.js
grep: hello nodejs

@前端进阶之旅: 代码已经复制到剪贴板
关于options.stdio

默认值：[‘pipe’, ‘pipe’, ‘pipe’]，这意味着：

child.stdin、child.stdout 不是undefined
可以通过监听 data 事件，来获取数据。





















← 7.1 进程相关 process
8.1 二进制数据 buffer →
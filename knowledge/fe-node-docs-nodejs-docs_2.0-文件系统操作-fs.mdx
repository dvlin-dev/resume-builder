文件读取
普通读取

同步读取

var fs = require('fs');
var data;

try{
    data = fs.readFileSync('./fileForRead.txt', 'utf8');
    console.log('文件内容: ' + data);
}catch(err){
    console.error('读取文件出错: ' + err.message);
}

@前端进阶之旅: 代码已经复制到剪贴板

输出如下：

/usr/local/bin/node readFileSync.js
文件内容: hello world

@前端进阶之旅: 代码已经复制到剪贴板

异步读取

var fs = require('fs');

fs.readFile('./fileForRead.txt', 'utf8', function(err, data){
    if(err){
        return console.error('读取文件出错: ' + err.message);
    }
    console.log('文件内容: ' + data);
});

@前端进阶之旅: 代码已经复制到剪贴板

输出如下

/usr/local/bin/node readFile.js
文件内容: hello world

@前端进阶之旅: 代码已经复制到剪贴板
通过文件流读取

适合读取大文件

var fs = require('fs');
var readStream = fs.createReadStream('./fileForRead.txt', 'utf8');

readStream
    .on('data', function(chunk) {
        console.log('读取数据: ' + chunk);
    })
    .on('error', function(err){
        console.log('出错: ' + err.message);
    })
    .on('end', function(){  // 没有数据了
        console.log('没有数据了');
    })
    .on('close', function(){  // 已经关闭，不会再有事件抛出
        console.log('已经关闭');
    });

@前端进阶之旅: 代码已经复制到剪贴板

输出如下

/usr/local/bin/node createReadStream.js
读取数据: hello world
没有数据了
已经关闭

@前端进阶之旅: 代码已经复制到剪贴板
文件写入

备注：以下代码，如果文件不存在，则创建文件；如果文件存在，则覆盖文件内容；

异步写入

var fs = require('fs');

fs.writeFile('./fileForWrite.txt', 'hello world', 'utf8', function(err){
    if(err) throw err;
    console.log('文件写入成功');
});

@前端进阶之旅: 代码已经复制到剪贴板

同步写入

var fs = require('fs');

try{
    fs.writeFileSync('./fileForWrite1.txt', 'hello world', 'utf8');
    console.log('文件写入成功');
}catch(err){
    throw err;
}

@前端进阶之旅: 代码已经复制到剪贴板
通过文件流写入
var fs = require('fs');
var writeStream = fs.createWriteStream('./fileForWrite1.txt', 'utf8');

writeStream
    .on('close', function(){  // 已经关闭，不会再有事件抛出
        console.log('已经关闭');
    });

writeStream.write('hello');
writeStream.write('world');
writeStream.end('');

@前端进阶之旅: 代码已经复制到剪贴板
相对底层的接口

fs.write(fd, buffer, offset, length[, position], callback) fs.write(fd, data[, position[, encoding]], callback) fs.writeSync(fd, buffer, offset, length[, position]) fs.writeSync(fd, data[, position[, encoding]])

fd：写入的文件句柄。
buffer：写入的内容。
offset：将buffer从offset位置开始，长度为length的内容写入。
length：写入的buffer内容的长度。
position：从打开文件的position处写入。
callback：参数为 (err, written, buffer)。written表示有xx字节的buffer被写入。

备注：fs.write(fd, buffer, offset, length[, position], callback)跟fs.write(fd, data[, position[, encoding]], callback)的区别在于：后面的只能把所有的data写入，而前面的可以写入指定的data子串？

文件是否存在

fs.exists()已经是deprecated状态，现在可以通过下面代码判断文件是否存在。

var fs = require('fs');

fs.access('./fileForRead.txt', function(err){
    if(err) throw err;
    console.log('fileForRead.txt存在');
});

fs.access('./fileForRead2.txt', function(err){
    if(err) throw err;
    console.log('fileForRead2.txt存在');
});

@前端进阶之旅: 代码已经复制到剪贴板

fs.access()除了判断文件是否存在（默认模式），还可以用来判断文件的权限。

备忘：fs.constants.F_OK等常量无法获取（node v6.1，mac 10.11.4下，fs.constants是undefined）

创建目录

异步版本（如果目录已存在，会报错）

var fs = require('fs');

fs.mkdir('./hello', function(err){
    if(err) throw err;
    console.log('目录创建成功');
});

@前端进阶之旅: 代码已经复制到剪贴板

同步版本

var fs = require('fs');

fs.mkdirSync('./hello');

@前端进阶之旅: 代码已经复制到剪贴板
删除文件
var fs = require('fs');

fs.unlink('./fileForUnlink.txt', function(err){
    if(err) throw err;
    console.log('文件删除成功');
});

@前端进阶之旅: 代码已经复制到剪贴板
var fs = require('fs');

fs.unlinkSync('./fileForUnlink.txt');

@前端进阶之旅: 代码已经复制到剪贴板
创建目录
// fs.mkdir(path[, mode], callback)
var fs = require('fs');

fs.mkdir('sub', function(err){
    if(err) throw err;
    console.log('创建目录成功');
});

@前端进阶之旅: 代码已经复制到剪贴板
// fs.mkdirSync(path[, mode])
var fs = require('fs');

try{
    fs.mkdirSync('hello');
    console.log('创建目录成功');
}catch(e){
    throw e;
}

@前端进阶之旅: 代码已经复制到剪贴板























← 1.0 本地路径处理 path
3.1 基础调试 console →
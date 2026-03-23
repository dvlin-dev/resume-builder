写在前面

body-parser是非常常用的一个express中间件，作用是对http请求体进行解析。使用非常简单，以下两行代码已经覆盖了大部分的使用场景。

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

@前端进阶之旅: 代码已经复制到剪贴板

本文从简单的例子出发，探究body-parser的内部实现。至于body-parser如何使用，感兴趣的同学可以参考
官方文档。

入门基础

在正式讲解前，我们先来看一个POST请求的报文，如下所示。

POST /test HTTP/1.1
Host: 127.0.0.1:3000
Content-Type: text/plain; charset=utf8
Content-Encoding: gzip

chyingp

@前端进阶之旅: 代码已经复制到剪贴板

其中需要我们注意的有Content-Type、Content-Encoding以及报文主体：

Content-Type：请求报文主体的类型、编码。常见的类型有text/plain、application/json、application/x-www-form-urlencoded。常见的编码有utf8、gbk等。
Content-Encoding：声明报文主体的压缩格式，常见的取值有gzip、deflate、identity。
报文主体：这里是个普通的文本字符串chyingp。
body-parser主要做了什么

body-parser实现的要点如下：

处理不同类型的请求体：比如text、json、urlencoded等，对应的报文主体的格式不同。
处理不同的编码：比如utf8、gbk等。
处理不同的压缩类型：比如gzip、deflare等。
其他边界、异常的处理。
一、处理不同类型请求体

为了方便读者测试，以下例子均包含服务端、客户端代码，完整代码可在
笔者github上找到。

解析text/plain

客户端请求的代码如下，采用默认编码，不对请求体进行压缩。请求体类型为text/plain。

var http = require('http');

var options = {
    hostname: '127.0.0.1',
    port: '3000',
    path: '/test',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain',
        'Content-Encoding': 'identity'
    }
};

var client = http.request(options, (res) => {
    res.pipe(process.stdout);
});

client.end('chyingp');

@前端进阶之旅: 代码已经复制到剪贴板

服务端代码如下。text/plain类型处理比较简单，就是buffer的拼接。

var http = require('http');

var parsePostBody = function (req, done) {
    var arr = [];
    var chunks;

    req.on('data', buff => {
        arr.push(buff);
    });

    req.on('end', () => {
        chunks = Buffer.concat(arr);
        done(chunks);
    });
};

var server = http.createServer(function (req, res) {
    parsePostBody(req, (chunks) => {
        var body = chunks.toString();
        res.end(`Your nick is ${body}`)
    });
});

server.listen(3000);

@前端进阶之旅: 代码已经复制到剪贴板
解析application/json

客户端代码如下，把Content-Type换成application/json。

var http = require('http');
var querystring = require('querystring');

var options = {
    hostname: '127.0.0.1',
    port: '3000',
    path: '/test',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'identity'
    }
};

var jsonBody = {
    nick: 'chyingp'
};

var client = http.request(options, (res) => {
    res.pipe(process.stdout);
});

client.end( JSON.stringify(jsonBody) );

@前端进阶之旅: 代码已经复制到剪贴板

服务端代码如下，相比text/plain，只是多了个JSON.parse()的过程。

var http = require('http');

var parsePostBody = function (req, done) {
    var length = req.headers['content-length'] - 0;
    var arr = [];
    var chunks;

    req.on('data', buff => {
        arr.push(buff);
    });

    req.on('end', () => {
        chunks = Buffer.concat(arr);
        done(chunks);
    });
};

var server = http.createServer(function (req, res) {
    parsePostBody(req, (chunks) => {
        var json = JSON.parse( chunks.toString() );    // 关键代码    
        res.end(`Your nick is ${json.nick}`)
    });
});

server.listen(3000);

@前端进阶之旅: 代码已经复制到剪贴板
解析application/x-www-form-urlencoded

客户端代码如下，这里通过querystring对请求体进行格式化，得到类似nick=chyingp的字符串。

var http = require('http');
var querystring = require('querystring');

var options = {
    hostname: '127.0.0.1',
    port: '3000',
    path: '/test',
    method: 'POST',
    headers: {
        'Content-Type': 'form/x-www-form-urlencoded',
        'Content-Encoding': 'identity'
    }
};

var postBody = { nick: 'chyingp' };

var client = http.request(options, (res) => {
    res.pipe(process.stdout);
});

client.end( querystring.stringify(postBody) );

@前端进阶之旅: 代码已经复制到剪贴板

服务端代码如下，同样跟text/plain的解析差不多，就多了个querystring.parse()的调用。

var http = require('http');
var querystring = require('querystring');

var parsePostBody = function (req, done) {
    var length = req.headers['content-length'] - 0;
    var arr = [];
    var chunks;

    req.on('data', buff => {
        arr.push(buff);
    });

    req.on('end', () => {
        chunks = Buffer.concat(arr);
        done(chunks);
    });
};

var server = http.createServer(function (req, res) {
    parsePostBody(req, (chunks) => {
        var body = querystring.parse( chunks.toString() );  // 关键代码
        res.end(`Your nick is ${body.nick}`)
    });
});

server.listen(3000);

@前端进阶之旅: 代码已经复制到剪贴板
二、处理不同编码

很多时候，来自客户端的请求，采用的不一定是默认的utf8编码，这个时候，就需要对请求体进行解码处理。

客户端请求如下，有两个要点。

编码声明：在Content-Type最后加上 ;charset=gbk
请求体编码：这里借助了iconv-lite，对请求体进行编码iconv.encode('程序员poetry', encoding)
var http = require('http');
var iconv = require('iconv-lite');

var encoding = 'gbk';  // 请求编码

var options = {
    hostname: '127.0.0.1',
    port: '3000',
    path: '/test',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain; charset=' + encoding,
        'Content-Encoding': 'identity',        
    }
};

// 备注：nodejs本身不支持gbk编码，所以请求发送前，需要先进行编码
var buff = iconv.encode('程序员poetry', encoding);

var client = http.request(options, (res) => {
    res.pipe(process.stdout);
});

client.end(buff, encoding);

@前端进阶之旅: 代码已经复制到剪贴板

服务端代码如下，这里多了两个步骤：编码判断、解码操作。首先通过Content-Type获取编码类型gbk，然后通过iconv-lite进行反向解码操作。

var http = require('http');
var contentType = require('content-type');
var iconv = require('iconv-lite');

var parsePostBody = function (req, done) {
    var obj = contentType.parse(req.headers['content-type']);
    var charset = obj.parameters.charset;  // 编码判断：这里获取到的值是 'gbk'

    var arr = [];
    var chunks;

    req.on('data', buff => {
        arr.push(buff);
    });

    req.on('end', () => {
        chunks = Buffer.concat(arr);
        var body = iconv.decode(chunks, charset);  // 解码操作
        done(body);
    });
};

var server = http.createServer(function (req, res) {
    parsePostBody(req, (body) => {
        res.end(`Your nick is ${body}`)
    });
});

server.listen(3000);

@前端进阶之旅: 代码已经复制到剪贴板
三、处理不同压缩类型

这里举个gzip压缩的例子。客户端代码如下，要点如下：

压缩类型声明：Content-Encoding赋值为gzip。
请求体压缩：通过zlib模块对请求体进行gzip压缩。
var http = require('http');
var zlib = require('zlib');

var options = {
    hostname: '127.0.0.1',
    port: '3000',
    path: '/test',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain',
        'Content-Encoding': 'gzip'
    }
};

var client = http.request(options, (res) => {
    res.pipe(process.stdout);
});

// 注意：将 Content-Encoding 设置为 gzip 的同时，发送给服务端的数据也应该先进行gzip
var buff = zlib.gzipSync('chyingp');

client.end(buff);

@前端进阶之旅: 代码已经复制到剪贴板

服务端代码如下，这里通过zlib模块，对请求体进行了解压缩操作（guzip）。

var http = require('http');
var zlib = require('zlib');

var parsePostBody = function (req, done) {
    var length = req.headers['content-length'] - 0;
    var contentEncoding = req.headers['content-encoding'];
    var stream = req;

    // 关键代码如下
    if(contentEncoding === 'gzip') {
        stream = zlib.createGunzip();
        req.pipe(stream);
    }

    var arr = [];
    var chunks;

    stream.on('data', buff => {
        arr.push(buff);
    });

    stream.on('end', () => {
        chunks = Buffer.concat(arr);        
        done(chunks);
    });

    stream.on('error', error => console.error(error.message));
};

var server = http.createServer(function (req, res) {
    parsePostBody(req, (chunks) => {
        var body = chunks.toString();
        res.end(`Your nick is ${body}`)
    });
});

server.listen(3000);

@前端进阶之旅: 代码已经复制到剪贴板
写在后面

body-parser的核心实现并不复杂，翻看源码后你会发现，更多的代码是在处理异常跟边界。

另外，对于POST请求，还有一个非常常见的Content-Type是multipart/form-data，这个的处理相对复杂些，body-parser不打算对其进行支持。篇幅有限，后续章节再继续展开。

欢迎交流，如有错漏请指出。



← 将图片转成datauri嵌入到html
日志模块morgan →
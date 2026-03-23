模块概览

这个模块的重要性，基本不用强调了。在网络安全问题日益严峻的今天，网站采用HTTPS是个必然的趋势。

在nodejs中，提供了 https 这个模块来完成 HTTPS 相关功能。从官方文档来看，跟 http 模块用法非常相似。

本文主要包含两部分：

通过客户端、服务端的例子，对https模块进行入门讲解。
如何访问安全证书不受信任的网站。（以 12306 为例子）

篇幅所限，本文无法对 HTTPS协议 及 相关技术体系 做过多讲解，有问题欢迎留言交流。

客户端例子

跟http模块的用法非常像，只不过请求的地址是https协议的而已，代码如下：

var https = require('https');

https.get('https://www.baidu.com', function(res){
    console.log('status code: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));

    res.on('data', function(data){
        process.stdout.write(data);
    });
}).on('error', function(err){
    console.error(err);
});

@前端进阶之旅: 代码已经复制到剪贴板
服务端例子

对外提供HTTPS服务，需要有HTTPS证书。如果你已经有了HTTPS证书，那么可以跳过证书生成的环节。如果没有，可以参考如下步骤

生成证书
1、创建个目录存放证书。
mkdir cert
cd cert

@前端进阶之旅: 代码已经复制到剪贴板
2、生成私钥。
openssl genrsa -out chyingp-key.pem 2048

@前端进阶之旅: 代码已经复制到剪贴板
3、生成证书签名请求（csr是 Certificate Signing Request的意思）。
openssl req -new \
  -sha256
  -key chyingp-key.key.pem \
  -out chyingp-csr.pem \
  -subj "/C=CN/ST=Guandong/L=Shenzhen/O=YH Inc/CN=www.chyingp.com"

@前端进阶之旅: 代码已经复制到剪贴板
4、生成证书。
openssl x509 \
  -req -in chyingp-csr.pem \
  -signkey chyingp-key.pem \
  -out chyingp-cert.pem

@前端进阶之旅: 代码已经复制到剪贴板
HTTPS服务端

代码如下：

var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./cert/chyingp-key.pem'), // 私钥
    cert: fs.readFileSync('./cert/chyingp-cert.pem') // 证书
};

var server = https.createServer(options, function(req, res){
    res.end('这是来自HTTPS服务器的返回');
});

server.listen(3000);

@前端进阶之旅: 代码已经复制到剪贴板

由于我并没有 
www.chyingp.com 这个域名，于是先配置本地host

127.0.0.1 www.chyingp.com

@前端进阶之旅: 代码已经复制到剪贴板

启动服务，并在浏览器里访问 
http://www.chyingp.com:3000。注意，浏览器会提示你证书不可靠，点击 信任并继续访问 就行了。

进阶例子：访问安全证书不受信任的网站

这里以我们最喜爱的12306最为例子。当我们通过浏览器，访问12306的购票页面 
https://kyfw.12306.cn/otn/regist/init 时，chrome会阻止我们访问，这是因为，12306的证书是自己颁发的，chrome无法确认他的安全性。

对这种情况，可以有如下处理方式：

停止访问：着急抢票回家过年的老乡表示无法接受。
无视安全警告，继续访问：大部分情况下，浏览器是会放行的，不过安全提示还在。
导入12306的CA根证书：浏览器乖乖就范，认为访问是安全的。（实际上还是有安全提示，因为12306用的签名算法安全级别不够）








← 4.5 网络服务 http client
4.7 网络TCP net →
模块概述

nodejs中，提供了url这个非常实用的模块，用来做URL的解析。在做node服务端的开发时会经常用到。使用很简单，总共只有3个方法。

模块方法概述

url模块三个方法分别是：

.parse(urlString)：将url字符串，解析成object，便于开发者进行操作。
.format(urlObj)：.parse() 方法的反向操作。
.resove(from, to)：以from作为起始地址，解析出完整的目标地址（还是看直接看例子好些）
url解析：url.parse()

完整语法：url.parse(urlString[, parseQueryString[, slashesDenoteHost]])

使用比较简单，几个要点备忘如下。

parseQueryString：（默认为false）如为false，则urlObject.query为未解析的字符串，比如nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1，且对应的值不会decode；如果parseQueryString为true，则urlObject.query为object，比如{ nick: '程序员poetry' }，且值会被decode；
slashesDenoteHos：（默认为false）如果为true，那么类似//foo/bar里的foo就会被认为是hostname；如果为false，则foo被认为是pathname的一部分。
关于解析得到的 urlObject ，会在下一小节进行详细介绍。
例子1：参数值不进行解析

代码如下：

var url = require('url');
var str = 'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1';

var obj = url.parse(str);
console.log(obj);

@前端进阶之旅: 代码已经复制到剪贴板

输出如下：

Url {
  protocol: 'http:',
  slashes: true,
  auth: 'Chyingp:HelloWorld',
  host: 'ke.qq.com:8080',
  port: '8080',
  hostname: 'ke.qq.com',
  hash: '#part=1',
  search: '?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1',
  query: 'nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1',
  pathname: '/index.html',
  path: '/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1',
  href: 'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1' }

@前端进阶之旅: 代码已经复制到剪贴板
例子2：对参数值进行decode

代码如下：

var url = require('url');
var str = 'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1';

var obj = url.parse(str, true);
console.log(obj);

@前端进阶之旅: 代码已经复制到剪贴板

输出如下，对比上面的例子会发现，query 字段被解析成了object，并且decode过。

Url {
  protocol: 'http:',
  slashes: true,
  auth: 'Chyingp:HelloWorld',
  host: 'ke.qq.com:8080',
  port: '8080',
  hostname: 'ke.qq.com',
  hash: '#part=1',
  search: '?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1',
  query: { nick: '程序员poetry' },
  pathname: '/index.html',
  path: '/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1',
  href: 'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1' }

@前端进阶之旅: 代码已经复制到剪贴板
例子3：针对路径 //foo/bar 的处理

代码如下：

var url = require('url');
var str = '//foo/bar';

var obj = url.parse(str, true, false);
console.log(obj);

obj = url.parse(str, true, true);
console.log(obj);

@前端进阶之旅: 代码已经复制到剪贴板

输出如下，自行对比两者之间的差异：

Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '',
  query: {},
  pathname: '//foo/bar',
  path: '//foo/bar',
  href: '//foo/bar' }
Url {
  protocol: null,
  slashes: true,
  auth: null,
  host: 'foo',
  port: null,
  hostname: 'foo',
  hash: null,
  search: '',
  query: {},
  pathname: '/bar',
  path: '/bar',
  href: '//foo/bar' }

@前端进阶之旅: 代码已经复制到剪贴板
关于urlObject

以上面的作为例子，粗略讲解下urlObject。更多细节可参考
官方文档。

protocol：协议，需要注意的是包含了:，并且是小写的。
slashes：如果:后面跟了两个//，那么为true。
auth：认证信息，如果有密码，为usrname:passwd，如果没有，则为usrname。注意，这里区分大小写。
host：主机名。注意包含了端口，比如ke.qq.com:8080，并且是小写的。
hostname：主机名，不包含端口，并且是小写的。
hash：哈希部分，注意包含了#。
search：查询字符串，注意，包含了?，此外，值是没有经过decode的。
query：字符串 或者 对象。如果是字符串，则是search去掉?，其余一样；如果是对象，那么是decode过的。
path：路径部分，包含search部分。
pathname：路径部分，不包含search部分。
href：原始的地址。不过需要注意的是，protocol、host会被转成小写字母。
{
  protocol: 'http:',
  slashes: true,
  auth: 'Chyingp:HelloWorld',
  host: 'ke.qq.com:8080',
  port: '8080',
  hostname: 'ke.qq.com',
  hash: '#part=1',
  search: '?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1',
  query: { nick: '程序员poetry' },
  pathname: '/index.html',
  path: '/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1',
  href: 'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1' }

@前端进阶之旅: 代码已经复制到剪贴板
url拼接：url.format(urlObject)

完整语法：url.format(urlObject)

url.parse(str)的反向操作，没什么好说的。urlObject包含了很多字段，比如protocol、slashes、protocol等，且不一定需要全部传，所以有一套解析逻辑。

过程比较冗长，大部分时候不需要用到，直接贴
官方文档的链接，有需要再看。

url.resolve(from, to)

用法比较简单，直接贴官方文档的例子

url.resolve('/one/two/three', 'four')         // '/one/two/four'
url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two') // 'http://example.com/two'

@前端进阶之旅: 代码已经复制到剪贴板
非法字符转义

url字符如果有下面的字符会被转义（非法字符）

< > " ` \r \n \t { } | \ ^ ’



← 4.9 域名解析 dns
5.1 URL查询字符串 querystring →
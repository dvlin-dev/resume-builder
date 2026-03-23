模块概览

Buffer是node的核心模块，开发者可以利用它来处理二进制数据，比如文件流的读写、网络请求数据的处理等。

Buffer的API非常多，本文仅挑选 比较常用/容易理解 的API进行讲解，包括Buffer实例的创建、比较、连接、拷贝、查找、遍历、类型转换、截取、编码转换等。

创建
new Buffer(array)
Buffer.alloc(length)
Buffer.allocUnsafe(length)
Buffer.from(array)
通过 new Buffer(array)
// Creates a new Buffer containing the ASCII bytes of the string 'buffer'
const buf = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

@前端进阶之旅: 代码已经复制到剪贴板

验证下：

var array = 'buffer'.split('').map(function(v){
    return '0x' + v.charCodeAt(0).toString(16)
});

console.log( array.join() );
// 输出：0x62,0x75,0x66,0x66,0x65,0x72

@前端进阶之旅: 代码已经复制到剪贴板
通过 Buffer.alloc(length)
var buf1 = Buffer.alloc(10);  // 长度为10的buffer，初始值为0x0
var buf2 = Buffer.alloc(10, 1);  // 长度为10的buffer，初始值为0x1

@前端进阶之旅: 代码已经复制到剪贴板
var buf3 = Buffer.allocUnsafe(10);  // 长度为10的buffer，初始值不确定

@前端进阶之旅: 代码已经复制到剪贴板
var buf4 = Buffer.from([1, 2, 3])  // 长度为3的buffer，初始值为 0x01, 0x02, 0x03

@前端进阶之旅: 代码已经复制到剪贴板
通过Buffer.from()

例子一：Buffer.from(array)

// [0x62, 0x75, 0x66, 0x66, 0x65, 0x72] 为字符串 "buffer" 
// 0x62 为16进制，转成十进制就是 98，代表的就是字母 b
var buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf.toString());

@前端进阶之旅: 代码已经复制到剪贴板

例子二：Buffer.from(string[, encoding])

通过string创建buffer，跟将buffer转成字符串时，记得编码保持一致，不然会出现乱码，如下所示。

var buf = Buffer.from('this is a tést');  // 默认采用utf8

// 输出：this is a tést
console.log(buf.toString());  // 默认编码是utf8，所以正常打印

// 输出：this is a tC)st
console.log(buf.toString('ascii'));  // 转成字符串时，编码不是utf8，所以乱码

@前端进阶之旅: 代码已经复制到剪贴板

对乱码的分析如下：

var letter = 'é';
var buff = Buffer.from(letter);  // 默认编码是utf8，这里占据两个字节 <Buffer c3 a9>
var len = buff.length;  // 2
var code = buff[0]; // 第一个字节为0xc3，即195：超出ascii的最大支持范围
var binary = code.toString(2);  // 195的二进制：10101001
var finalBinary = binary.slice(1);  // 将高位的1舍弃，变成：0101001
var finalCode = parseInt(finalBinary, 2);  // 0101001 对应的十进制：67
var finalLetter = String.fromCharCode(finalCode);  // 67对应的字符：C

// 同理 0xa9最终转成的ascii字符为)
// 所以，最终输出为 this is a tC)st

@前端进阶之旅: 代码已经复制到剪贴板

例子三：Buffer.from(buffer)

创建新的Buffer实例，并将buffer的数据拷贝到新的实例子中去。

var buff = Buffer.from('buffer');
var buff2 = Buffer.from(buff);

console.log(buff.toString());  // 输出：buffer
console.log(buff2.toString());  // 输出：buffer

buff2[0] = 0x61;

console.log(buff.toString());  // 输出：buffer
console.log(buff2.toString());  // 输出：auffer

@前端进阶之旅: 代码已经复制到剪贴板
buffer比较
buf.equals(otherBuffer)

判断两个buffer实例存储的数据是否相同，如果是，返回true，否则返回false。

// 例子一：编码一样，内容相同
var buf1 = Buffer.from('A');
var buf2 = Buffer.from('A');

console.log( buf1.equals(buf2) );  // true

// 例子二：编码一样，内容不同
var buf3 = Buffer.from('A');
var buf4 = Buffer.from('B');

console.log( buf3.equals(buf4) );  // false

// 例子三：编码不一样，内容相同
var buf5 = Buffer.from('ABC');  // <Buffer 41 42 43>
var buf6 = Buffer.from('414243', 'hex');

console.log(buf5.equals(buf6));    //true

//只要比较的两者内容相同,`buf.equals(otherBuffer)` 就返回true

@前端进阶之旅: 代码已经复制到剪贴板
buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])

同样是对两个buffer实例进行比较，不同的是：

可以指定特定比较的范围（通过start、end指定）
返回值为整数，达标buf、target的大小关系

假设返回值为

0：buf、target大小相同。
1：buf大于target，也就是说buf应该排在target之后。
-1：buf小于target，也就是说buf应该排在target之前。

看例子，官方的例子挺好的，直接贴一下：

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('BCD');
const buf3 = Buffer.from('ABCD');

// Prints: 0
console.log(buf1.compare(buf1));

// Prints: -1
console.log(buf1.compare(buf2));

// Prints: -1
console.log(buf1.compare(buf3));

// Prints: 1
console.log(buf2.compare(buf1));

// Prints: 1
console.log(buf2.compare(buf3));

// Prints: [ <Buffer 41 42 43>, <Buffer 41 42 43 44>, <Buffer 42 43 44> ]
// (This result is equal to: [buf1, buf3, buf2])
console.log([buf1, buf2, buf3].sort(Buffer.compare));

@前端进阶之旅: 代码已经复制到剪贴板
Buffer.compare(buf1, buf2)

跟 buf.compare(target) 大同小异，一般用于排序。直接贴官方例子：

const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');
const arr = [buf1, buf2];

// Prints: [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]
// (This result is equal to: [buf2, buf1])
console.log(arr.sort(Buffer.compare));

@前端进阶之旅: 代码已经复制到剪贴板
从Buffer.from([62])谈起

这里稍微研究下Buffer.from(array)。下面是官方文档对API的说明，也就是说，每个array的元素对应1个字节（8位），取值从0到255。

Allocates a new Buffer using an array of octets.


















← 7.2 子进程 child
8.2 二进制解码 string_decoder →
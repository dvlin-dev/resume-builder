Nodejs进阶：crypto模块之理论篇
一、 文章概述

互联网时代，网络上的数据量每天都在以惊人的速度增长。同时，各类网络安全问题层出不穷。在信息安全重要性日益凸显的今天，作为一名开发者，需要加强对安全的认识，并通过技术手段增强服务的安全性。

crypto模块是nodejs的核心模块之一，它提供了安全相关的功能，如摘要运算、加密、电子签名等。很多初学者对着长长的API列表，不知如何上手，因此它背后涉及了大量安全领域的知识。

本文重点讲解API背后的理论知识，主要包括如下内容：

摘要（hash）、基于摘要的消息验证码（HMAC）
对称加密、非对称加密、电子签名
分组加密模式
二、摘要（hash）

摘要（digest）：将长度不固定的消息作为输入，通过运行hash函数，生成固定长度的输出，这段输出就叫做摘要。通常用来验证消息完整、未被篡改。

摘要运算是不可逆的。也就是说，输入固定的情况下，产生固定的输出。但知道输出的情况下，无法反推出输入。

伪代码如下。

digest = Hash(message)

常见的摘要算法 与 对应的输出位数如下：

MD5：128位
SHA-1：160位
SHA256 ：256位
SHA512：512位

nodejs中的例子：

var crypto = require('crypto');
var md5 = crypto.createHash('md5');

var message = 'hello';
var digest = md5.update(message, 'utf8').digest('hex'); 

console.log(digest);
// 输出如下：注意这里是16进制
// 5d41402abc4b2a76b9719d911017c592

@前端进阶之旅: 代码已经复制到剪贴板

备注：在各类文章或文献中，摘要、hash、散列 这几个词经常会混用，导致不少初学者看了一脸懵逼，其实大部分时候指的都是一回事，记住上面对摘要的定义就好了。

三、MAC、HMAC

MAC（Message Authentication Code）：消息认证码，用以保证数据的完整性。运算结果取决于消息本身、秘钥。

MAC可以有多种不同的实现方式，比如HMAC。

HMAC（Hash-based Message Authentication Code）：可以粗略地理解为带秘钥的hash函数。

nodejs例子如下：

const crypto = require('crypto');

// 参数一：摘要函数
// 参数二：秘钥
let hmac = crypto.createHmac('md5', '123456');
let ret = hmac.update('hello').digest('hex');

console.log(ret);
// 9c699d7af73a49247a239cb0dd2f8139

@前端进阶之旅: 代码已经复制到剪贴板
四、对称加密、非对称加密

加密/解密：给定明文，通过一定的算法，产生加密后的密文，这个过程叫加密。反过来就是解密。

encryptedText = encrypt( plainText ) plainText = decrypt( encryptedText )

秘钥：为了进一步增强加/解密算法的安全性，在加/解密的过程中引入了秘钥。秘钥可以视为加/解密算法的参数，在已知密文的情况下，如果不知道解密所用的秘钥，则无法将密文解开。

encryptedText = encrypt(plainText, encryptKey) plainText = decrypt(encryptedText, decryptKey)

根据加密、解密所用的秘钥是否相同，可以将加密算法分为对称加密、非对称加密。

1、对称加密

加密、解密所用的秘钥是相同的，即encryptKey === decryptKey。

常见的对称加密算法：DES、3DES、AES、Blowfish、RC5、IDEA。

加、解密伪代码：

encryptedText = encrypt(plainText, key); // 加密 plainText = decrypt(encryptedText, key); // 解密

2、非对称加密

又称公开秘钥加密。加密、解密所用的秘钥是不同的，即encryptKey !== decryptKey。

加密秘钥公开，称为公钥。解密秘钥保密，称为秘钥。

常见的非对称加密算法：RSA、DSA、ElGamal。

加、解密伪代码：

encryptedText = encrypt(plainText, publicKey); // 加密 plainText = decrypt(encryptedText, priviteKey); // 解密

3、对比与应用

除了秘钥的差异，还有运算速度上的差异。通常来说：

对称加密速度要快于非对称加密。
非对称加密通常用于加密短文本，对称加密通常用于加密长文本。

两者可以结合起来使用，比如HTTPS协议，可以在握手阶段，通过RSA来交换生成对称秘钥。在之后的通讯阶段，可以使用对称加密算法对数据进行加密，秘钥则是握手阶段生成的。

备注：对称秘钥交换不一定通过RSA，还可以通过类似DH来完成，这里不展开。

五、数字签名

从签名大致可以猜到数字签名的用途。主要作用如下：

确认信息来源于特定的主体。
确认信息完整、未被篡改。

为了达到上述目的，需要有两个过程：

发送方：生成签名。
接收方：验证签名。
1、发送方生成签名
计算原始信息的摘要。
通过私钥对摘要进行签名，得到电子签名。
将原始信息、电子签名，发送给接收方。

附：签名伪代码

digest = hash(message); // 计算摘要 digitalSignature = sign(digest, priviteKey); // 计算数字签名











← cookie_parser深入
express+cookie_parser签名机制深入剖析 →
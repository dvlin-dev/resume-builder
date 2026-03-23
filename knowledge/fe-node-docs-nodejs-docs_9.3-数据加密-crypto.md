写在前面

本章节写得差不多了，不过还需要再整理一下（TODO）。

hash例子

hash.digest([encoding])：计算摘要。encoding可以是hex、latin1或者base64。如果声明了encoding，那么返回字符串。否则，返回Buffer实例。注意，调用hash.digest()后，hash对象就作废了，再次调用就会出错。

hash.update(data[, input_encoding])：input_encoding可以是utf8、ascii或者latin1。如果data是字符串，且没有指定 input_encoding，则默认是utf8。注意，hash.update()方法可以调用多次。

var crypto = require('crypto');
var fs = require('fs');

var content = fs.readFileSync('./test.txt', {encoding: 'utf8'});
var hash = crypto.createHash('sha256');
var output;

hash.update(content);

output = hash.digest('hex'); 

console.log(output);
// 输出内容为：
// b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9

@前端进阶之旅: 代码已经复制到剪贴板

也可以这样：

var crypto = require('crypto');
var fs = require('fs');

var input = fs.createReadStream('./test.txt', {encoding: 'utf8'});
var hash = crypto.createHash('sha256');

hash.setEncoding('hex');

input.pipe(hash).pipe(process.stdout)

// 输出内容为：
// b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9

@前端进阶之旅: 代码已经复制到剪贴板

hash.digest()后，再次调用digest()或者update()

var crypto = require('crypto');
var fs = require('fs');

var content = fs.readFileSync('./test.txt', {encoding: 'utf8'});
var hash = crypto.createHash('sha256');
var output;

hash.update(content);
hash.digest('hex'); 

// 报错：Error: Digest already called
hash.update(content);

// 报错：Error: Digest already called
hash.digest('hex');

@前端进阶之旅: 代码已经复制到剪贴板
HMAC例子

HMAC的全称是Hash-based Message Authentication Code，也即在hash的加盐运算。

算法细节可以参考附录链接，具体到使用的话，跟hash模块差不多，选定hash算法，指定“盐”即可。

例子1：

var crypto = require('crypto');
var fs = require('fs');

var secret = 'secret';
var hmac = crypto.createHmac('sha256', secret);
var input = fs.readFileSync('./test.txt', {encoding: 'utf8'});

hmac.update(input);

console.log( hmac.digest('hex') );
// 输出：
// 734cc62f32841568f45715aeb9f4d7891324e6d948e4c6c60c0621cdac48623a

@前端进阶之旅: 代码已经复制到剪贴板

例子2：

var crypto = require('crypto');
var fs = require('fs');

var secret = 'secret';
var hmac = crypto.createHmac('sha256', secret);
var input = fs.createReadStream('./test.txt', {encoding: 'utf8'});

hmac.setEncoding('hex');

input.pipe(hmac).pipe(process.stdout)
// 输出：
// 734cc62f32841568f45715aeb9f4d7891324e6d948e4c6c60c0621cdac48623a

@前端进阶之旅: 代码已经复制到剪贴板
加密/解密

加解密主要用到下面两组方法：

加密：

crypto.createCipher(algorithm, password)
crypto.createCipheriv(algorithm, key, iv)

解密：

crypto.createDecipher(algorithm, password)
crypto.createDecipheriv(algorithm, key, iv)
crypto.createCipher(algorithm, password)

先来看下 crypto.createCipher(algorithm, password)，两个参数分别是加密算法、密码

algorithm：加密算法，比如aes192，具体有哪些可选的算法，依赖于本地openssl的版本，可以通过openssl list-cipher-algorithms命令查看支持哪些算法。
password：用来生成密钥(key)、初始化向量(IV)。

备注：这里nodejs屏蔽了AES的使用/实现细节，关于key、IV，感兴趣的同学可以自行谷歌下。

var crypto = require('crypto');
var secret = 'secret';

var cipher = crypto.createCipher('aes192', secret);
var content = 'hello';
var cryptedContent;

cipher.update(content);
cryptedContent = cipher.final('hex');
console.log(cryptedContent);
// 输出：
// 71d30ec9bc926b5dbbd5150bf9d3e5fb

@前端进阶之旅: 代码已经复制到剪贴板
crypto.createDecipher(algorithm, password)

可以看作 crypto.createCipher(algorithm, password) 逆向操作，直接看例子

var crypto = require('crypto');
var secret = 'secret';

var cipher = crypto.createCipher('aes192', secret);
var content = 'hello';
var cryptedContent;

cipher.update(content);
cryptedContent = cipher.final('hex');
console.log(cryptedContent);
// 输出：
// 71d30ec9bc926b5dbbd5150bf9d3e5fb

var decipher = crypto.createDecipher('aes192', secret);
var decryptedContent;

decipher.update(cryptedContent, 'hex');
decryptedContent = decipher.final('utf8');
console.log(decryptedContent);
// 输出：
// hello

@前端进阶之旅: 代码已经复制到剪贴板
crypto.createCipheriv(algorithm, key, iv)

相对于 crypto.createCipher() 来说，crypto.createCipheriv() 需要提供key和iv，而 crypto.createCipher() 是根据用户提供的 password 算出来的。

key、iv 可以是Buffer，也可以是utf8编码的字符串，这里需要关注的是它们的长度：

key：根据选择的算法有关，比如 aes128、aes192、aes256，长度分别是128、192、256位（16、24、32字节）
iv：都是128位（16字节）
var crypto = require('crypto');
var key = crypto.randomBytes(192/8);
var iv = crypto.randomBytes(128/8);
var algorithm = 'aes192';

function encrypt(text){
    var cipher = crypto.createCipheriv(algorithm, key, iv);
    cipher.update(text);
    return cipher.final('hex');
}

function decrypt(encrypted){
    var decipher = crypto.createDecipheriv(algorithm, key, iv);
    decipher.update(encrypted, 'hex');
    return decipher.final('utf8');
}

var content = 'hello';
var crypted = encrypt('hello');
console.log( crypted );

var decrypted = decrypt( crypted );
console.log( decrypted );  // 输出：utf8

@前端进阶之旅: 代码已经复制到剪贴板
数字签名/签名校验

假设：

1、服务端原始信息为M，摘要算法为Hash，Hash(M)得出的摘要是H。 2、公钥为Pub，私钥为Piv，非对称加密算法为Encrypt，非对称解密算法为Decrypt。 3、Encrypt(H)得到的结果是S。 4、客户端拿到的信息为M1，利用Hash(M1)得出的结果是H1。

数字签名的产生、校验步骤分别如下：

1、数字签名的产生步骤：利用摘要算法Hash算出M的摘要，即Hash(M) == H，利用非对称加密算法对摘要进行加密Encrypt( H, Piv )，得到数字签名S。 2、数字签名的校验步骤：利用解密算法D对数字签名进行解密，即Decrypt(S) == H，计算M1的摘要 Hash(M1) == H1，对比 H、H1，如果两者相同，则通过校验。

私钥如何生成不是这里的重点，这里采用网上的服务来生成，点击[这里](在线生成非对称加密公钥私钥对、在线生成公私钥对、RSA Key pair create、生成RSA密钥对)。

了解了数字签名产生、校验的原理后，相信下面的代码很容易理解：

var crypto = require('crypto');
var fs = require('fs');
var privateKey = fs.readFileSync('./private-key.pem');  // 私钥
var publicKey = fs.readFileSync('./public-key.pem');  // 公钥
var algorithm = 'RSA-SHA256';  // 加密算法 vs 摘要算法

// 数字签名
function sign(text){
    var sign = crypto.createSign(algorithm);
    sign.update(text);
    return sign.sign(privateKey, 'hex');    
}

// 校验签名
function verify(oriContent, signature){
    var verifier = crypto.createVerify(algorithm);
    verifier.update(oriContent);
    return verifier.verify(publicKey, signature, 'hex');
}

// 对内容进行签名
var content = 'hello world';
var signature = sign(content);
console.log(signature);

// 校验签名，如果通过，返回true
var verified = verify(content, signature);
console.log(verified);

@前端进阶之旅: 代码已经复制到剪贴板
DiffieHellman

DiffieHellman：Diffie–Hellman key exchange，缩写为D-H，是一种安全协议，让通信双方在预先没有对方信息的情况下，通过不安全通信信道，创建一个密钥。这个密钥可以在后续的通信中，作为对称加密的密钥加密传递的信息。

代码如下，原理待补充 TODO

const crypto = require('crypto');
const assert = require('assert');

// Generate Alice's keys...
const alice = crypto.createDiffieHellman(2048);
const alice_key = alice.generateKeys();

// Generate Bob's keys...
const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bob_key = bob.generateKeys();

// Exchange and generate the secret...
const alice_secret = alice.computeSecret(bob_key);
const bob_secret = bob.computeSecret(alice_key);

// OK
assert.equal(alice_secret.toString('hex'), bob_secret.toString('hex'));

@前端进阶之旅: 代码已经复制到剪贴板
ECDH：Elliptic Curve Diffie-Hellman

代码如下，原理待补充 TODO

const crypto = require('crypto');
const assert = require('assert');

// Generate Alice's keys...
const alice = crypto.createECDH('secp521r1');
const alice_key = alice.generateKeys();

// Generate Bob's keys...
const bob = crypto.createECDH('secp521r1');
const bob_key = bob.generateKeys();

// Exchange and generate the secret...
const alice_secret = alice.computeSecret(bob_key);
const bob_secret = bob.computeSecret(alice_key);

assert(alice_secret, bob_secret);
  // OK

@前端进阶之旅: 代码已经复制到剪贴板





← 9.2 实用工具模块 util
9.4 MD5入门介绍及crypto模块的应用 →
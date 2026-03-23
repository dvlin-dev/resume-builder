数据类型

最新的 ECMAScript 标准定义了 8 种数据类型:

7 种

原始类型:

Boolean
Null
Undefined
Number
BigInt
String
Symbol

和 
Object

可能大家对BigInt原始数据类型比较默认,它的提出解决了一部分问题，比如大于253 - 1 的整数。这原本是 Javascript中可以用 
Number
 表示的最大数字。BigInt 可以表示任意大的整数。

了解了数据类型后,我们接下来就来看看如何检测数据类型吧。

检测数据类型
typeof

typeof 操作符返回一个字符串，表示未经计算的操作数的类型。

总结一下可能的返回值：
“undefined”
“object”
“boolean”
“number”
“bigint”
“string”
“symbol”
“function”
附加信息：
typeof null === 'object';

@前端进阶之旅: 代码已经复制到剪贴板

这可能说是一个JavaScript设计的Bug吧。MDN规范是这么解释的：

在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"。

typeof在判断object类型的数据的时候，不能准确的告知我们具体是哪一种Object，而且在判断null的时候,也会上述的附加信息。对于判断是哪一种object的时候，我们需要用到instanceof这个操作符来判断,我们后面会说到。

说一说typeof的原理吧,说到这里,我们应该考虑一下,JavaScript是怎么存储数据的呢,又或者说,对于一个变量,它的数据类型权衡的标准是什么呢？

查阅了相关的资料,其实这个是一个历史遗留的bug，在 javascript 的最初版本中，使用的 32 位系统，为了性能考虑使用低位存储了变量的类型信息：

000：对象
010：浮点数
100：字符串
110：布尔
1：整数

but, 对于 undefined 和 null 来说，这两个值的信息存储是有点特殊的。

null：对应机器码的 NULL 指针，一般是全零。

undefined：用 −2^30 整数来表示!

所以，typeof 在判断 null 的时候就出现问题了，由于 null 的所有机器码均为0，因此直接被当做了对象来看待。

所以,似乎懂了一点皮毛了(●‘◡’●)

instanceof

instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

语法
object instanceof constructor
object 某个实例对象
construtor 某个构造函数

@前端进阶之旅: 代码已经复制到剪贴板
// 定义构造函数
function C(){} 
function D(){} 

var o = new C();


o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype


o instanceof D; // false，因为 D.prototype 不在 o 的原型链上

o instanceof Object; // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
C.prototype instanceof Object // true，同上

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false，C.prototype 指向了一个空对象,这个空对象不在 o 的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true 因为 C.prototype 现在在 o3 的原型链上

@前端进阶之旅: 代码已经复制到剪贴板

需要注意的是，如果表达式 obj instanceof Foo 返回 true，则并不意味着该表达式会永远返回 true，因为 Foo.prototype 属性的值有可能会改变，改变之后的值很有可能不存在于 obj 的原型链上，这时原表达式的值就会成为 false。另外一种情况下，原表达式的值也会改变，就是改变对象 obj 的原型链的情况，虽然在目前的ES规范中，我们只能读取对象的原型而不能改变它，但借助于非标准的 __proto__ 伪属性，是可以实现的。比如执行 obj.__proto__ = {} 之后，obj instanceof Foo 就会返回 false 了。

原理浅析

要想理解instanceof原理的话,我们需要从两个方面去了解:

语言规范中是如何定义运算符的
JavaScript原型继承机制

这里，我直接将规范定义翻译为 JavaScript 代码如下：

function new_instance_of(leftVaule, rightVaule) {
    let rightProto = rightVaule.prototype,
        leftVaule = leftVaule.__proto__;
    while (true) {
        if (leftVaule === null) {
            return false;
        }
        if (leftVaule === rightProto) {
            return true;
        }
        leftVaule = leftVaule.__proto__
    }
}

@前端进阶之旅: 代码已经复制到剪贴板

从上面的代码看得出来,instanceof主要的原理就是:

只要右边的prototype在左边的原型链上及可,也就是返回true。因此,instanceof在查询的过程中会遍历左边变量的原型链,直到找到右边变量的prototype,如果查找失败的话,返回false,告诉我们左边的变量并非是右边变量的实例。

接下来我们看一看有趣的例子:

function Foo() {}
        console.log(Object instanceof Object)
        console.log(Function instanceof Function)
        console.log(Function instanceof Object)
        console.log(Foo instanceof Object)
        console.log(Foo instanceof Function)
        console.log(Foo instanceof Foo)

@前端进阶之旅: 代码已经复制到剪贴板
JavaScript 的原型继承原理

关于原型继承的原理，我简单用一张图来表示

这个图很重要,对于原型链不理解的，可以看看这篇文章:

浅谈JavaScript原型

举个例子分析一个有趣的instanceof例子

Object instanceof Object

由图可知，Object 的 prototype 属性是 Object.prototype, 而由于 Object 本身是一个函数，由 Function 所创建，所以 Object.__proto__ 的值是 Function.prototype，而 Function.prototype 的 __proto__ 属性是 Object.prototype，所以我们可以判断出，Object instanceof Object 的结果是 true 。用代码简单的表示一下

@前端进阶之旅: 代码已经复制到剪贴板
leftValue = Object.__proto__ = Function.prototype;
rightValue = Object.prototype;
// 第一次判断
leftValue != rightValue
leftValue = Function.prototype.__proto__ = Object.prototype
// 第二次判断
leftValue === rightValue
// 返回 true

@前端进阶之旅: 代码已经复制到剪贴板

剩下的Function instanceof Object等有趣的例子可以自己手动去实现一下🤭

Object.prototype.toString
ES5 规范中的描述

可以知道，Object.prototype.toString 最终会返回形式如 [object,class] 的字符串，class 指代的是其检测出的数据类型，这个是我们判断数据类型的关键。

var toString=Object.prototype.toString;

console.log(toString.call(und));  // [object Undefined]
console.log(toString.call(nul));  // [object Null]
console.log(toString.call(boo));  // [object Boolean]
console.log(toString.call(num));  // [object Number]
console.log(toString.call(str));  // [object String]
console.log(toString.call(obj));  // [object Object]
console.log(toString.call(arr));  // [object Array]
console.log(toString.call(fun));  // [object Function]
console.log(toString.call(date));  // [object Date]
console.log(toString.call(reg));  // [object RegExp]
console.log(toString.call(err));  // [object Error]
console.log(toString.call(arg));  // [object Arguments]

@前端进阶之旅: 代码已经复制到剪贴板
数据类型检测终极方法
/**
 * @desc 数据类型检测
 * @param obj 待检测的数据
 * @return {String} 类型字符串
 */
let type = (obj) => typeof obj !== 'object' ? typeof obj : Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();

@前端进阶之旅: 代码已经复制到剪贴板
数据类型的单独检测
let isUndefined = obj => obj === void 0
        let isNull = obj => obj === Null
        let isBoolean = obj => typeof(obj) === 'boolean'
        let isNumber = obj => typeof(obj) === 'number'
        let isString = obj => typeof(obj) === 'string'
        let isObject = obj => Object.prototype.toString.call(obj) === '[object Object]'
        let isArray = obj => Object.prototype.toString.call(obj) === '[object Array]'
        let isFunction = obj => typeof obj === 'function'
        let isDate = obj => Object.prototype.toString.call(obj) === '[object Date]'
        let isRegExp = obj => Object.prototype.toString.call(obj) === '[object RegExp]'
        let isError = obj => Object.prototype.toString.call(obj) === '[object Error]'
        let isArguments = obj => Object.prototype.toString.call(obj) === '[object Arguments]'

@前端进阶之旅: 代码已经复制到剪贴板
结论
使用 typeof 来判断基本数据类型是 ok 的,需要注意的是typeof判断null类型时的问题
判断一个对象的话具体考虑用instanceof,但是instanceof判断一个数组的时候,它可以被instanceof判断为Obeject
比较准确的的判断对象实例的类型,采取Object.prototype.toString.call()方法

← 编写可维护的JavaScript
聊一聊闭包 →
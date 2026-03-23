一、JS内置对象

所谓的内置对象 指的是：JavaScript本身就自己有的对象 可以直接拿来就用。例如Array String 等等。JavaScript一共有12内置对象

函数类型(10个)

String
Number
Boolean
Array
Function
Date
RegExp
Error
Object
Event

函数类型 有 __proto__和 prototype 属性

对象类型(2个)

Math
JSON

对象类型只有__proto__属性

二、JS原型链
2.1 概述

每个函数都有 prototype 属性，除了 Function.prototype.bind()，该属性指向原型。
每个对象都有 __proto__ 属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 [[prototype]]，但是 [[prototype]] 是内部属性，我们并不能访问到，所以使用 __proto__ 来访问
对象可以通过 proto 来寻找不属于该对象的属性，__proto__ 将对象连接起来组成了原型链

打开浏览器的控制面板，随便输入一个JS内置的构造器函数，比如Array，控制台输出的是一个名为Array的函数体，这好像并没有什么稀奇的，但是，当你接着输入Array.prototype，控制面板输出了一堆我们经常用到的Array构造器的方法，把目光转移到最下方，有一个叫__proto__的属性，好奇的点开。列表列出的不是Object构造器的方法么，里边有我们非常熟悉的hasOwnProperty还有toString等方法。如果Array是构造器，那么控制面板输出的Array.prototype的所有属性中constructor又是什么构造器？点开看看，之后就像身处德罗斯特效应中一样，__proto__和constructor，还有Array构造器中常用的方法名不断的出现，一层套一层，一层层展开，没有尽头

拿Array举例，Array.prototype中有一个constructor属性，这个属性的值就是Array构造器自己

Array.prototype.constructor === Array //true

@前端进阶之旅: 代码已经复制到剪贴板
2.2 prototype

这是一个显式原型属性，只有函数才拥有该属性。基本上所有函数都有这个属性，但是也有一个例外

let fun = Function.prototype.bind()

@前端进阶之旅: 代码已经复制到剪贴板

如果你以上述方法创建一个函数，那么可以发现这个函数是不具有 prototype 属性的

2.2.1 prototype 如何产生的

当我们声明一个函数时，这个属性就被自动创建了

function Foo() {}

@前端进阶之旅: 代码已经复制到剪贴板

并且这个属性的值是一个对象（也就是原型），只有一个属性 constructor

constructor 对应着构造函数，也就是 Foo
2.2.2 constructor

constructor 是一个公有且不可枚举的属性。一旦我们改变了函数的 prototype ，那么新对象就没有这个属性了（当然可以通过原型链取到 constructor）

那么你肯定也有一个疑问，这个属性到底有什么用呢？其实这个属性可以说是一个历史遗留问题，在大部分情况下是没用的，在我的理解里，我认为他有两个作用：

让实例对象知道是什么函数构造了它
如果想给某些类库中的构造函数增加一些自定义的方法，就可以通过 xx.constructor.method 来扩展
2.3 __proto__

这是每个对象都有的隐式原型属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 [[prototype]]，但是 [[prototype]] 是内部属性，我们并不能访问到，所以使用 __proto__ 来访问

因为在 JS 中是没有类的概念的，为了实现类似继承的方式，通过 __proto__ 将对象和原型联系起来组成原型链，得以让对象可以访问到不属于自己的属性
2.3.1 实例对象的 _proto_ 如何产生的

当我们使用 new 操作符时，生成的实例对象拥有了 __proto__属性

function Foo() {}
// 这个函数是 Function 的实例对象
// function 就是一个语法糖
// 内部调用了 new Function(...)

@前端进阶之旅: 代码已经复制到剪贴板

所以可以说，在 new 的过程中，新对象被添加了 __proto__ 并且链接到构造函数的原型上

2.3.2 new 的过程
新生成了一个对象
链接到原型
绑定 this
返回新对象

在调用 new 的过程中会发生以上四件事情，我们也可以试着来自己实现一个 new

function create() {
    // 创建一个空的对象
    let obj = new Object()
    // 获得构造函数
    let Con = [].shift.call(arguments)
    // 链接到原型
	obj.__proto__ = Con.prototype
    // 绑定 this，执行构造函数
    let result = Con.apply(obj, arguments)
    // 确保 new 出来的是个对象
    return typeof result === 'object' ? result : obj
}

@前端进阶之旅: 代码已经复制到剪贴板
对于实例对象来说，都是通过 new 产生的，无论是 function Foo() 还是 let a = { b : 1 }
对于创建一个对象来说，更推荐使用字面量的方式创建对象。因为你使用 new Object() 的方式创建对象需要通过作用域链一层层找到 Object，但是你使用字面量的方式就没这个问题。
// function 就是个语法糖
// 内部等同于 new Function()
let a = { b: 1 }
// 这个字面量内部也是使用了 new Object()

@前端进阶之旅: 代码已经复制到剪贴板

这里Array 内置对象 且是函数类型。所以Array有__proto__属性 指向的是函数类型 (function（）{})。所以当我们在输出Array.__proto__.proto__;就会返回对象类型(Object{}).但是再向上就null。因为Object就是父类了。所有的继承自Object。

JS内置构造器其中之一的Array原本就是一个函数，而这个函数就是Function的prototype，所以Function.prototype有的方法，JS内置构造器都有，比如call()、apply()、bind()等（其实我们自定义的函数也是继承自Function.prototype，所以我们自己也可以定义构造器）。而Function.prototype的进化链指针又指向了Object.prototype
// 数组实例的__proto__指向构造器的原型

[].__proto__ === Array.prototype 

@前端进阶之旅: 代码已经复制到剪贴板
2.4 总结
Object 是所有对象的爸爸，所有对象都可以通过 __proto__ 找到它
Function 是所有函数的爸爸，所有函数都可以通过 __proto__ 找到它
Function.prototype 和 Object.prototype 是两个特殊的对象，他们由引擎来创建
除了以上两个特殊对象，其他对象都是通过构造器 new 出来的
函数的 prototype 是一个对象，也就是原型
对象的 __proto__ 指向原型， __proto__ 将对象和原型连接起来组成了原型链

关于原型有3个相关的概念:

函数对象的prototype属性, 可以称之为显式原型属性(简称: 显式原型)
实例对象的__proto__属性, 可以称之为隐式原型属性(简称: 隐式原型)
原型对象: 也就是prototype属性和_proto__属性指向的对象

图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线




← JavaScript作用域分析总结
JavaScript原生数组及高阶函数 →
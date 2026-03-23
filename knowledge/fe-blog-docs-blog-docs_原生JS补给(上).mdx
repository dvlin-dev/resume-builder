第一补： JS类型基础
1. ‘1’.toString()为什么可以调用，1.toString()却不行？

我们知道如果在代码中使用：

'1'.toString()
// 或者是
true.toString()

@前端进阶之旅: 代码已经复制到剪贴板

都是可以正常调用的，这是因为toString它是Object.prototype上的方法，任何能访问到Object原型的元素都可以调用它。

而在此处，对于'1'.toString()相当于是做了一层转换，将其转为了一个"对象"，这样就可以调用toString()方法了。

也就是这样：

var s = new Object('1');
s.toString();
s = null;

@前端进阶之旅: 代码已经复制到剪贴板
创建Object实例，将s变为了String{"1"}对象
调用Object.prototype上的实例方法toString()
用完之后立即销毁这个实例

这一部分三元分析的已经挺多了，我主要是想补充一下1.toString()为什么就不行。

当我们在代码中试图使用1.toString()，发现编辑器已经报错不允许我们这样做了。

最开始会有这么奇怪的想法是因为我们都忽视了一件事，那就是.它也是属于数字里的一部分啊 😂。

比如1.2、1.3。所以当你想要使用1.toString()的时候，JavaScript的解释器会把它作为数字的一部分，这样就相当于(1.)toString了，很显然这是一段错误的代码。

既然这样的话，如果我还给代码一个.是不是就可以了，于是我尝试了一下：

console.log(1.1.toString())

@前端进阶之旅: 代码已经复制到剪贴板

发现它竟然能正常打印出来：

"1.1"

@前端进阶之旅: 代码已经复制到剪贴板

这也就再次证明了1.toString()会将.归给1所属，而不是归给toString()。

当然如果你用的一个变量来承载这个数字的话也是可以的：

var num = 1;
console.log(num.toString()) // "1"

// 或者
console.log((1).toString()) // "1"

@前端进阶之旅: 代码已经复制到剪贴板
2. 为什么可以使用new Number却不能使用new Symbol?
var num = new Number(1) // Number{1}
var str = new String('1') // String{'1'}
var bol = new Boolean(true) // Boolean{true}

var symbol = new Symbol(1) // TypeError

@前端进阶之旅: 代码已经复制到剪贴板

像上面这种使用new Number、new String等创建的基本数据类型被称之为：围绕原始数据类型创建一个显式包装器对象。

通俗点说就是：用new来创建基本类型的包装类。

而这种做法在ES6之后就不被支持了，从new Symbol(1)报错就可以看出来，现在使用的是不带new的方式：var symbol = Symbol(1)，所以它作为构造函数来说是不完整的。

但是因为历史遗留的原因，new Number仍然可以这样用，不过并不推荐。

如果你真的想创建一个 Symbol 包装器对象 (Symbol wrapper object)，你可以使用 Object() 函数：

var sym = Symbol(1)
console.log(typeof sym) // "symbol"
var symObj = Object(sym)
console.log(typeof symObj) // "object"

@前端进阶之旅: 代码已经复制到剪贴板
第二补：JS类型检测
1. instanceof能否判断基本数据类型？

什么意思呢 🤔️？

正常来说，instanceof是用来判断某个对象的原型链上是否能够查找到某个构造函数的原型对象。

来看看通俗点的简介：

a instanceof B

实例对象a instanceof 构造函数B

检测a的原型链(__proto__)上是否有B.prototype，有则返回true，否则返回false。

那么它可以用来判断基本数据类型吗？

也就是说我定义了一个var num = 1，我可以用instanceof来判断它是一个number类型的变量吗？

如果你试图这样写：

var num = 1;
console.log(num instanceof Number) // false

@前端进阶之旅: 代码已经复制到剪贴板

发现结果是false。

此时你可以用Symbol.hasInstance来实现一个自定义instanceof的行为。

首先想想我们是要实现一个什么功能？

a instanceof B

@前端进阶之旅: 代码已经复制到剪贴板

左侧的a是一个变量，而右侧的B是一个构造函数，而class的本质也是一个构造函数。

所以在这个需求中，我们可以定义一个叫做MyNumber的类，在其里面封装一层，暴露一个静态方法用来判断数据类型：

class MyNumber {
    static [Symbol.hasInstance](instance) {
        return typeof instance === 'number'
    }
}
var num = 1;
console.log(num instanceof MyNumber) // true

@前端进阶之旅: 代码已经复制到剪贴板
在类MyNumber中定义了一个名为Symbol.hasInstance的静态方法
这个方法接收的是一个实例对象instance
返回值为typeof判断是否是number类型

这里比较难理解的就是Symbol.hasInstance了，第一次接触它也不知道它是个啥 😂。找了一波
MDN 上对它的介绍：

用于判断某对象是否为某构造器的实例。

然后试着写了几个案例，发现也不用把它想的那么复杂，你就简单理解，当我们在使用instanceof的时候，能够自定义右侧构造函数(类)它的instanceof验证方式就可以了。

就像是上面👆那个案例一样，我在MyNumber重写了静态方法Symbol.hasInstance，让它的验证方式变成type instance === 'number'。

那么为什么是静态方法呢(也就是在方法前面加上static)，通过阅读
《🔥【何不三连】比继承家业还要简单的JS继承题-封装篇(牛刀小试)》我们知道，静态方法是挂载在MyNumber这个类上的方法，因此我们甚至可以把下面的内容换一种写法：

console.log(num instanceof MyNumber) // true
// 换成：
console.log(MyNumber[Symbol.hasInstance](num)) // true

@前端进阶之旅: 代码已经复制到剪贴板

看到了吧，它其实就是一个方法名而已，而这个方法因为是静态的，在MyNumber上的，因此我们可以用MyNumber[Symbol.hasInstance]这种方式调用。

想想，如果没有static这个关键字呢？

没有static的话，定义在类里的方法就相当于是挂载到类的原型对象上，那么如果我们想要使用它，一种就是直接用MyNumber.prototype调用，还有一种就是使用new MyNumber()生成一个实例来调用：

class MyNumber {
    [Symbol.hasInstance](instance) { // 没有 static
        return typeof instance === 'number'
    }
}
var num = 1

console.log(num instanceof new MyNumber()) // true
console.log(num instanceof MyNumber.prototype) // true

// 转化为：
console.log(MyNumber.prototype[Symbol.hasInstance](num)) // true
console.log(new MyNumber()[Symbol.hasInstance](num)) // true

@前端进阶之旅: 代码已经复制到剪贴板

所以现在回过头来看看：

class MyNumber {
    static [Symbol.hasInstance](instance) {
        return typeof instance === 'number'
    }
}
var num = 1;
console.log(num instanceof MyNumber) // true

@前端进阶之旅: 代码已经复制到剪贴板

是不是就好理解多了呢？

那么假如我现在想要你实现一个用instanceof判断是不是数组的类MyArray，该如何去写呢？

思考🤔…

唔…上答案：

class MyArray {  
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true

@前端进阶之旅: 代码已经复制到剪贴板
2. instanceof的查找路线？

上面我们说到了instanceof是用来判断某个对象的原型链上是否能够查找到某个构造函数的原型对象。

并且是会沿着原型链一层一层的向上查找，直到到达原型链的末位。

那这个过程具体是怎样的呢？让我们来看一个例子🌰：

function Parent () {
  this.name = 'parent'
}
function Child () {
  this.sex = 'boy'
}
Child.prototype = new Parent()
var child1 = new Child()

console.log(child1 instanceof Child)
console.log(child1 instanceof Parent)
console.log(child1 instanceof Object)

@前端进阶之旅: 代码已经复制到剪贴板

结果为：

true
true
true

@前端进阶之旅: 代码已经复制到剪贴板

这里其实用到了原型链继承，Chind继承于Parent，而且三个构造函数的原型对象都存在于child1的原型链上。

也就是说，左边的child1它会向它的原型链中不停的查找，看有没有右边那个构造函数的原型对象。

例如child1 instanceof Child的查找顺序：

child1 -> child1.__proto__ -> Child.prototype

@前端进阶之旅: 代码已经复制到剪贴板

child1 instanceof Parent的查找顺序：

child1 -> child1.__proto__ -> Child.prototype
-> Child.prototype.__proto__ -> Parent.prototype

@前端进阶之旅: 代码已经复制到剪贴板

还不理解？

没关系，我还有大招：

我在上面👆原型链继承的思维导图上加了三个查找路线。

被⭕️标记的1、2、3分别代表的是Child、Parent、Object的原型对象。

好滴，一张图简洁明了。以后再碰到instanceof这种东西，按照我图上的查找路线来查找就可以了 😁 ～

3. isPropertypeOf()有什么作用？

既然说到了instanceof，那么就不得不提一下isPrototypeOf这个方法了。

它属于Object.prototype上的方法，这点你可以将Object.prototype打印在控制台中看看。

isPrototypeOf()的用法和instanceof相反。

它是用来判断指定对象object1是否存在于另一个对象object2的原型链中，是则返回true，否则返回false。

例如还是上面👆这道题，我们将要打印的内容改一下：

function Parent () {
  this.name = 'parent'
}
function Child () {
  this.sex = 'boy'
}
Child.prototype = new Parent()
var child1 = new Child()

console.log(Child.prototype.isPrototypeOf(child1))
console.log(Parent.prototype.isPrototypeOf(child1))
console.log(Object.prototype.isPrototypeOf(child1))

@前端进阶之旅: 代码已经复制到剪贴板

这里输出的依然是三个true：

true
true
true

@前端进阶之旅: 代码已经复制到剪贴板

判断的方式只要把原型链继承instanceof查找思维导图这张图反过来查找即可。

更多关于instanceOf的内容可以戳这里👇：

💦【何不三连】做完这48道题彻底弄懂JS继承(1.7w字含辛整理-返璞归真)

4. 
Object.is()和===的区别？
对于+0和-0的判断不同
对于NaN和NaN的判断不同
console.log(+0 === -0) // true
console.log(Object.is(+0, -0)) // false
console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true

@前端进阶之旅: 代码已经复制到剪贴板

其实不需要特意的去记，你只需要理解，Object.is()在===的基础上修复了这些特殊情况的失误。

也就是说：+0和-0本就该不相等的，这点从1 / +0为Infinity，1 / -0为-Infinity上可以看出。

(但是+0和0是没有区别的)

而NaN表示的都是非数字，所以应该是相等的。

因此Object.is()的内部其实是做了一些修复的处理：

function is (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

@前端进阶之旅: 代码已经复制到剪贴板

这里可以怎样理解呢 🤔️？

当x === y的时候，就是用来处理+0, -0, 0的特殊情况。

在这个判断中，首先会判断出x和y是不是都是+0, -0, 0中的其中一个(因为我们知道不论是这三个中的哪一个和0进行全等比较，结果都会是true，所以x !== 0就会是false)，而根据||的短路原则，前面一项为false，那么最终的结果取决于后面一项。

所以x !== 0相当于是把x, y为+0, -0, 0的情况推给了1 / x === 1 / y，用它的结果来决定最后的结果。

(在三元的原文中这段判断是这样写的return x !== 0 || y !== 0 || 1 /x === 1 / y，比我这里多了一个|| y !== 0。经评论区小伙伴
matteokjh提示，觉得可以把|| y !== 0的判断省略掉，另外
MDN上对它的polyfill也是没有这一步的，我想了一下：因为能进入到x === y里，那么如果x !== 0 成立的话，那么y !== 0肯定也成立了，貌似是可以省去。另外我把省去的代码执行了一下，和没有省去时的执行结果一样的，所以我感觉可行。)

而且我们又知道1 / +0为Infinity，1 / -0为-Infinity，所以如果x, y为+0或者-0的时候是不相等的，以此来实现Object.is(+0, -0)的结果为false。

当x !== y的时候，就是用来处理NaN, NaN的特殊情况。

因为我们知道NaN !== NaN的，那么如果x和y都不和它们自己相等的话，说明两个都是NaN了，而如果都是NaN的话，Object.is(NaN, NaN)的结果为true。

第三补：toString()方法的妙用
1. toString()存在于哪里？

在此之前，我翻了很多关于toString()的资料，大多都是介绍了它的用法，但是它真正存在于哪里呢？

可能比较常见的一种说法是它存在于Object的原型对象中，也就是Object.prototype上，那么对于基本数据类型，Number、String、Boolean、 Symbol、BigInt呢？它们自身有这个方法吗？或者它们的原型对象上有吗？

本着一探到底的精神，我打印出了Number和Number.prototype：

console.log(Number)
console.log(Number.prototype)

@前端进阶之旅: 代码已经复制到剪贴板

然后我发现了几件事：

Number只是一个构造函数，打印出来显示的会是源代码
Number.prototype上确实也有toString()
Number.prototype.__proto__也就是Object.prototype上也有toString()

然后我又试了一下String、Boolean、Symbol发现结果也和上面一样。

其实不难理解，看过
《💦【何不三连】做完这48道题彻底弄懂JS继承(1.7w字含辛整理-返璞归真)》的小伙伴都知道，所有对象的原型链到最后都会指向Object.prototype，算是都"继承"了Object的对象实例，因此都能使用toString()方法，但是对于不同的内置对象为了能实现更适合自身的功能需求，都会重写该方法，所以你可以看到Number.prototype上也会有该方法。

所以我们可以先得出第一个结论：

除了null、undefined以外的其它数据类型(基本数据类型+引用数据类型)，它们构造函数的原型对象上都有toString()方法
基本数据类型构造函数原型对象上的toString()会覆盖Object原型对象上的toString()方法

（当然，等你看到后面你就会发现这种说法其实并不太准确，但是大多数时候我们都只是关心谁可以用它，而不是它存在于哪里）

2. 谁可以调用toString()？

这个问题，其实在上面👆已经给出答案了，所有对象除了null、undefined以外的任何值都可以调用toString()方法，通常情况下它的返回结果和String一样。

其实这里，我们最容易搞混的就是String和toString。

之前总是为了将某个类型转为字符串胡乱的用这两个属性。

String是一个类似于Function这样的对象，它既可以当成对象来用，用它上面的静态方法，也可以当成一个构造函数来用，创建一个String对象
而toString它是除了null、undefined之外的数据类型都有的方法，通常情况下它的返回结果和String一样。
3. 如何用toString()判断某个数据的具体类型？

可能大家看的比较多的一种用法是这样的：

Object.prototype.toString.call({ name: 'obj' }) // '[object Object]'

@前端进阶之旅: 代码已经复制到剪贴板

先来点硬知识，Object.prototype.toString这个方法会根据这个对象的[[class]]内部属性，返回由 "[object " 和 class 和 "]" 三个部分组成的字符串。

啥意思？[[class]]内部属性是个啥 🤔️？

这里你还真别想多，你就按字面意思来理解它就好了，想想，class 英文单词的意思->类。

那好，我就认为它代表的是一类事物就行了。

就比如

数组是一类，它的[[class]]是Array
字符串是一类，它的[[class]]是String
arguments是一类，它的[[class]]是Arguments

另外，关于[[class]]的种类是非常多的，你也不需要记住全部，只需要知道一些常用的，基本的，好理解的就可以了。

所以回到Object.prototype.toString.call()这种调用方式来，现在你可以理解它的作用了吧，它能够帮助我们准确的判断某个数据类型，也就是辨别出是数组还是数字还是函数，还是NaN。😊

另外鉴于它的返回结果是"[object Object]"这样的字符串，而且前面的"[object ]"这八个字符串都是固定的(包括"t"后面的空格)，所以我们是不是可以封装一个方法来只拿到"Object"这样的字符串呢？

很简单，上代码：

function getClass (obj) {
    let typeString = Object.prototype.toString.call(obj); // "[object Object]"
    return typeString.slice(8, -1);
}

@前端进阶之旅: 代码已经复制到剪贴板

可以看到，我给这个函数命名为getClass，这也就呼应了它原本的作用，是为了拿到对象的[[class]]内部属性。

另外，在拿到了"[object Object]"字符串之后，是用了一个.slice(8, -1)的字符串截取功能，去除了前八个字符"[object ]"和最后一个"]"。

现在让我们来看看一些常见的数据类型吧：

function getClass(obj) {
    let typeString = Object.prototype.toString.call(obj); // "[object Array]"
    return typeString.slice(8, -1);
}
console.log(getClass(new Date)) // Date
console.log(getClass(new Map)) // Map
console.log(getClass(new Set)) // Set
console.log(getClass(new String)) // String
console.log(getClass(new Number)) // Number
console.log(getClass(true)) // Boolean
console.log(getClass(NaN)) // Number
console.log(getClass(null)) // Null
console.log(getClass(undefined)) // Undefined
console.log(getClass(Symbol(42))) // Symbol
console.log(getClass({})) // Object
console.log(getClass([])) // Array
console.log(getClass(function() {})) // Function
console.log(getClass(document.getElementsByTagName('p'))) // HTMLCollection

console.log(getClass(arguments)) // Arguments

@前端进阶之旅: 代码已经复制到剪贴板
4. toString.call()与typeof的区别？

好滴👌，通过刚刚的学习，我们了解到了，toString.call这种方式是为了获取某个变量更加具体的数据类型。

咦～说到数据类型，我们原来不是有一个typeof吗？它和toString.call()又有啥区别？

首先帮大家回顾一下typeof它的显示规则：

对于原始类型来说(也就是number、string这种)，除了null都可以显示正确的类型
null因为历史版本的原因被错误的判断为了"object"
对于引用类型来说(也就是object、array这种)，除了函数都会显示为"object"
函数会被显示为function

所以呀，typeof的缺点很明显啊，我现在有一个对象和一个数组，或者一个日期对象，我想要仔细的区分它，用typeof肯定是不能实现的，因为它们得到的都是"object"。

所以，采用我们封装的getClass()显然是一个很好的选择。

5. 不同类型的数据调用toString()会怎么样？

在不同的数据类型调用toString()会有什么不同呢？

这里我主要是分为两大块来说：

基本数据类型调用
引用类型调用
5.1 基本数据类型调用toString

对于基本数据类型来调用它，超级简单的，你就想着就是把它的原始值换成了字符串而已：

console.log('1'.toString()) // '1'
console.log(1.1.toString()) // '1.1'
console.log(true.toString()) // 'true'
console.log(Symbol(1).toString()) // 'Symbol(1)'
console.log(10n.toString()) // '10'

@前端进阶之旅: 代码已经复制到剪贴板

所以对于基本数据类型：

原始数据类型调用时，把它的原始值换成了字符串
5.2 引用类型调用toString

比较难的部分是引用类型调用toString()，而且我们知道引用类型根据[[class]]的不同是分了很多类的，比如有Object、Array、Date等等。

那么不同类之间的toString()是否也不同呢 🤔️？

没错，不同版本的toString主要是分为：

数组的toString方法是将每一项转换为字符串然后再用","连接
普通的对象(比如{name: 'obj'}这种)转为字符串都会变为"[object Object]"
函数(class)、正则会被转为源代码字符串
日期会被转为本地时区的日期字符串
原始值的包装对象调用toString会返回原始值的字符串
拥有Symbol.toStringTag内置属性的对象在调用时会变为对应的标签"[object Map]"

(Symbol.toStringTag属性下一题会问到)

例如🌰：

console.log([].toString()) // ""
console.log([1, 2].toString()) // "1,2"

console.log({}.toString()) // "[object Object]"
console.log({name: 'obj'}.toString()) // "[object Object]"

console.log(class A {}.toString()) // "class A {}"
console.log(function () {}.toString()) // "function () {}"
console.log(/(\[|\])/g.toString()) // "/(\[|\])/g1"
console.log(new Date().toString()) // "Fri Mar 27 2020 12:33:16 GMT+0800 (中国标准时间)"

console.log(new Object(true).toString()) // "true"
console.log(new Object(1).toString()) // "1"
console.log(new Object(BigInt(10)).toString()) // "10"

console.log(new Map().toString()) // "[object Map]"
console.log(new Set().toString()) // "[object Set]"

@前端进阶之旅: 代码已经复制到剪贴板
6. 了解Symbol.toStringTag吗？

《Symbol.toStringTag》上是这样描述它的：

该Symbol.toStringTag公知的符号是在创建对象的默认字符串描述中使用的字符串值属性。它由该Object.prototype.toString()方法在内部访问。

看不懂没关系，你这样理解就可以了，它其实就是决定了刚刚我们提到所有数据类型中[[class]]这个内部属性是什么。

比如数字，我们前面得到的[[class]]是Number，那我就可以理解为数字这个类它的Symbol.toStringTag返回的就是Number。

只不过在之前我们用到的Number、String、Boolean中并没有Symbol.toStringTag这个内置属性，它是在我们使用toString.call()调用的时候才将其辨别返回。

而刚刚我们刚刚在第五问看到的new Map()，让我们把它打印出来看看。

console.log(new Map())

@前端进阶之旅: 代码已经复制到剪贴板

可以看到Symbol.toStringTag它是确确实实存在于Map.prototype上的，也就是说它是Map、Set内置的一个属性，因此当我们直接调用toString()的时候，就会返回"[object Map]"了。

额，我们是不是就可以这样理解呢？

没有Symbol.toStringTag内置属性的类型在调用toString()的时候相当于是String(obj)这样调用转换为相应的字符串
有Symbol.toStringTag内置属性的类型在调用toString()的时候会返回相应的标签(也就是"[object Map]"这样的字符串)

我们常用的带有Symbol.toStringTag内置属性的对象有：

console.log(new Map().toString()) // "[object Map]"
console.log(new Set().toString()) // "[object Set]"
console.log(Promise.resolve().toString()) // "[object Promise]"

@前端进阶之旅: 代码已经复制到剪贴板

而它最主要的功能就是和Symbol.hasInstance一样，可以允许我们自定义标签。

(Symbol.hasInsance的作用是自定义instanceof的返回值)

什么是自定义标签呢 🤔️？

也就是说，假如我们现在创建了一个类，并且用toString.call()调用它的实例对象是会有如下结果：

class Super {}
console.log(Object.prototype.toString.call(new Super())) // "[object Object]"

@前端进阶之旅: 代码已经复制到剪贴板

很好理解，因为产生的new Super()是一个对象嘛，所以打印出的会是"[object Object]"。

但是现在有了Symbol.toStringTag之后，我们可以改后面的"Object"。

比如我重写一下：

class Super {
  get [Symbol.toStringTag] () {
    return 'Validator'
  }
}
console.log(Object.prototype.toString.call(new Super())) // "[object Validator]"

@前端进阶之旅: 代码已经复制到剪贴板

这就是Symbol.toStringTag的厉害之处，它能够允许我们自定义标签。

但是有一点要注意了，Symbol.toStringTag重写的是new Super()这个实例对象的标签，而不是重写Super这个类的标签，也就是说这里有区别的：

class Super {
  get [Symbol.toStringTag] () {
    return 'Validator'
  }
}
console.log(Object.prototype.toString.call(Super)) // "[object Function]"
console.log(Object.prototype.toString.call(new Super())) // "[object Validator]"

@前端进阶之旅: 代码已经复制到剪贴板

因为Super它本身还是一个函数，只有Super产生的实例对象才会用到我们的自定义标签。

总结一下Symbol.toStringTag：

它是某些特定类型的内置属性，比如Map、Set、Promise
主要作用是可以允许我们自定义标签，修改Object.prototype.toString.call()的返回结果

更多关于toString和Symbol.toStringTag的内容可以戳这里👇：

【精】从206个console.log()完全弄懂数据类型转换的前世今生(上)

第四补：JS类型转换

因为类型转换算是让人比较头疼的一部分，所以对于这一块我也专门写了系列文章，基本上覆盖了面试可能会问到的知识点，传送门：

【精】从206个console.log()完全弄懂数据类型转换的前世今生(上)

【精】从206个console.log()完全弄懂数据类型转换的前世今生(下)

(下篇写的挺好的没人看难受😣)

1. 说一下valueOf()的基本用法
基本数据类型调用，返回调用者原本的值
非日期对象的其它引用类型调用valueOf()默认是返回它本身
而日期对象会返回一个1970 年 1 月 1 日以来的毫秒数(类似于1585370128307)。

例子🌰：

console.log('1'.valueOf()) // '1'
console.log(1.1.valueOf()) // 1.1

console.log([].valueOf()) // []
console.log({}.valueOf()) // {}
console.log(['1'].valueOf()) // ['1']
console.log(function () {}.valueOf()) // ƒ () {}
console.log(/(\[|\])/g.valueOf()) // /(\[|\])/g
console.log(new Date().valueOf()) // 1585370128307

@前端进阶之旅: 代码已经复制到剪贴板
2. ToPrimitive的具体转换流程？

当我们在将对象转换为原始类型或者进行==比较的时候，会调用内置的ToPrimitive函数。

比如：

console.log(String({})) // 对象转字符串，结果为 "[object Object]"
console.log(Number([1, 2])) // 对象转数字，结果为 NaN

console.log([] == ![]) // true

@前端进阶之旅: 代码已经复制到剪贴板

以上结果的由来都经过了ToPrimitive函数。

先让我们来看看它的函数语法：

ToPrimitive(input, PreferredType?)

@前端进阶之旅: 代码已经复制到剪贴板

参数：

参数一：input，表示要处理的输入值
参数二：PerferredType，期望转换的类型，可以看到语法后面有个问号，表示是非必填的。它只有两个可选值，Number和String。

而它对于传入参数的处理是比较复杂的，让我们来看看流程图：

根据流程图，我们得出了这么几个信息：

当不传入 PreferredType 时，如果 input 是日期类型，相当于传入 String，否则，都相当于传入 Number。
如果是 ToPrimitive(obj, Number)，处理步骤如下：
如果 obj 为 基本类型，直接返回
否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回。
否则，JavaScript 抛出一个类型错误异常。
如果是 ToPrimitive(obj, String)，处理步骤如下：
如果 obj为 基本类型，直接返回
否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回。
否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
否则，JavaScript 抛出一个类型错误异常。

上面👆的图其实只是看着很复杂，细心的小伙伴可能会发现，在图里红框裱起来的地方，只有toString()和valueOf()方法的执行顺序不同而已。

如果 PreferredType 是 String 的话，就先执行 toString()方法

如果 PreferredType 是 Number 的话，就先执行 valueOf()方法

2.1 对象转字符串

来点例子巩固一下：

console.log(String({})) // "[object Object]"

@前端进阶之旅: 代码已经复制到剪贴板

对于这个简单的转换我们可以把它换成toPrimitive的伪代码看看：

toPrimitive({}, 'string')

@前端进阶之旅: 代码已经复制到剪贴板

OK👌，来回顾一下刚刚的转换规则：

input是{}，是一个引用类型，PerferredType为string
所以调用toString()方法，也就是{}.toString()
{}.toString()的结果为"[object Object]"，是一个字符串，为基本数据类型，然后返回，到此结束。

哇～

是不是一切都说得通了，好像不难吧 😁。

没错，当使用String()方法的时候，JS引擎内部的执行顺序确实是这样的，不过有一点和刚刚提到的步骤不一样，那就是最后返回结果的时候，其实会将最后的基本数据类型再转换为字符串返回。

也就是说上面👆的第三步我们得拆成两步来：

{}.toString()的结果为"[object Object]"，是一个字符串，为基本数据类型
将这个"[object Object]"字符串再做一次字符串的转换然后返回。(因为"[object Object]"已经是字符串了，所以原样返回，这里看不出有什么区别)

将最后的结果再转换为字符串返回这一步，其实很好理解啊。你想想，我调用String方法那就是为了得到一个字符串啊，你要是给我返回一个number、null啊什么的，那不是隔壁老王干的事嘛～

2.2 对象转数字

刚刚我们说了对象转字符串也就是toPrimitive(object, 'string')的情况，

那么对象转数字就是toPrimitive(object, 'number')。

区别就是转数字会先调用valueOf()后调用toString()。

例子🌰：

console.log(Number({}))
console.log(Number([]))
console.log(Number([0]))
console.log(Number([1, 2]))

console.log(Number(new Date()))

@前端进阶之旅: 代码已经复制到剪贴板

对于Number({})：

传入的是一个对象{}，因此调用valueOf()方法，该方法在题7.1中已经提到过了，它除了日期对象的其它引用类型调用都是返回它本身，所以这里还是返回了对象{}
valueOf()返回的值还是对象，所以继续调用toString()方法，而{}调用toString()的结果为字符串"[object Object]"，是一个基本数据类型
得到基础数据类型了，该要返回了，不过在这之前还得将它在转换为数字才返回，那么"[object Object]"转为数字为NaN，所以结果为NaN

对于Number([])：

传入的是一个数组[]，因此调用valueOf()方法，返回它自身[]
[]继续调用toString()方法，而空数组转为字符串是为""
最后再将空字符串""转为数字0返回

对于Number([0])：

因为[0]转为字符串是为"0"，最后在转为数字0 返回

对于Number([1, 2])：

传入的是一个数组[1, 2]，所以调用valueOf()方法返回的是数组本身[1,2]
所以继续调用toString()方法，此时被转换为了"1,2"字符串
"1,2"字符串最后被转为数字为NaN，所以结果为NaN

对于Number(new Date())：

传入的是一个日期类型的对象new Date()，因此调用valueOf()，在题目7.2中已经说了，日期类型调用valueOf()是会返回一个毫秒数
毫秒数为数字类型，也就是基本数据类型，那么直接返回(其实还有一步转为数字类型的过程)，所以结果为1585413652137

结果：

console.log(Number({})) // NaN
console.log(Number([])) // 0
console.log(Number([0])) // 0
console.log(Number([1, 2])) // NaN

console.log(Number(new Date())) // 1585413652137

@前端进阶之旅: 代码已经复制到剪贴板
3. 数组转换为字符串为什么会用","连接？

我们都知道，当数组在进行转字符串的时候，会把里面的每一项都转为字符串然后再进行","拼接返回。

那么为什么会有","拼接这一步呢？难道toString()在调用的时候还会调用join()方法吗？

为了验证我的想法💡，我做了一个实验，重写了一个数组的join()方法：

var arr = [1, 2]
arr['join'] = function () {
  let target = [...this]
  return target.join('~')
}
console.log(String(arr))

@前端进阶之旅: 代码已经复制到剪贴板

重写的join函数中，this表示的就是调用的这个数组arr。

然后将返回值改为"~"拼接，结果答案竟然是：

"1~2"

@前端进阶之旅: 代码已经复制到剪贴板

也就是说在String(arr)的过程中，它确实是隐式调用了join方法。

但是当我们重写了toString()之后，就不会管这个重写的join了：

var arr = [1, 2]
arr['toString'] = function () {
  let target = [...this]
  return target.join('*')
}
arr['join'] = function () {
  let target = [...this]
  return target.join('~')
}
console.log(String(arr)) // "1*2"

@前端进阶之旅: 代码已经复制到剪贴板

可以看出toString()的优先级还是比join()高的。

现在我们又可以得出一个结论：

对象如果是数组的话，当我们不重写其toString()方法，在转换为字符串类型的时候，默认实现就是将调用join()方法的返回值作为toString()的返回值。

4. 知道Symbol.toPrimitive吗？它有什么用？

当我们在进行对象转原始值的时候，会隐式调用内部的ToPrimitive方法，按照前面说的那种方式进行转换。

而Symbol.toPrimitive属性是能帮助我们重写toPrimitive，以此来更改转换的结果。

让我们来看看它的总结：

如果重写了某个对象或者构造函数中的toString、valueOf、Symbol.toPrimitive方法，Symbol.toPrimitive的优先级是最高的
若是Symbol.toPrimitive函数返回的值不是基础数据类型(也就是原始值)，就会报错
Symbol.toPrimitive接收一个字符串参数hint，它表示要转换到的原始值的预期类型，一共有'number'、'string'、'default'三种选项
使用String()调用时，hint为'string'；使用Number()时，hint为'number'
hint参数的值从开始调用的时候就已经确定了

来看个例子🌰：

var b = {
  toString () {
    console.log('toString')
    return '1'
  },
  valueOf () {
    console.log('valueOf')
    return [1, 2]
  },
  [Symbol.toPrimitive] (hint) {
    console.log('symbol')
    if (hint === 'string') {
      console.log('string')
      return '1'
    }
    if (hint === 'number') {
      console.log('number')
      return 1
    }
    if (hint === 'default') {
      console.log('default')
      return 'default'
    }
  }
}
console.log(String(b))
console.log(Number(b))

@前端进阶之旅: 代码已经复制到剪贴板

这道题重写了toString、valueOf、Symbol.toPrimitive三个属性，通过上面👆的题目我们已经知道了只要有Symbol.toPrimitive在，前面两个属性就被忽略了，所以我们不用管它们。

而对于Symbol.toPrimitive，我将三种hint的情况都写上了，如果按照我的设想的话，在调用String(b)的时候应该是要打印出string的，调用Number(b)打印出number，结果也正如我所预想的一样：

'string'
'1'
'number'
1

@前端进阶之旅: 代码已经复制到剪贴板
5. ==在进行比较时的类型转换？

其实在实际中我们被考的比较多的可能就是用==来比较判断两个不同类型的变量是否相等。

而全等===的情况比较简单，一般不太会考，因为全等的条件就是：如果类型相等值也相等才认为是全等，并不会涉及到类型转换。

但是==的情况就相对复杂了，先给大家看几个比较眼熟的题哈：

console.log([] == ![]) // true
console.log({} == true) // false
console.log({} == "[object Object]") // true

@前端进阶之旅: 代码已经复制到剪贴板

怎样？这几题是不是经常看到呀 😁，下面就让我们一个一个来看。

首先，我们还是得清楚几个概念，这个是硬性规定的，不看的话咱没法继续下去啊。

当使用==进行比较的时候，会有以下转换规则（判断规则）：

两边类型如果相同，值相等则相等，如 2 == 3肯定是为false的了
比较的双方都为基本数据类型：
若是一方为null、undefined，则另一方必须为null或者undefined才为true，也就是null == undefined为true或者null == null为true，因为undefined派生于null
其中一方为String，是的话则把String转为Number再来比较
其中一方为Boolean，是的话则将Boolean转为Number再来比较
比较的一方有引用类型：
将引用类型遵循ToNumber的转换形式来进行比较(实际上它的hint是default，也就是toPrimitive(obj, 'default')，但是default的转换规则和number很像)
两方都为引用类型，则判断它们是不是指向同一个对象

在一些文章中，会说道：

如果其中一方为Object，且另一方为String、Number或者Symbol，会将Object转换成字符串，再进行比较

(摘自
《神三元-(建议收藏)原生JS灵魂之问, 请问你能接得住几个？(上)》中的3. == 和 ===有什么区别？)

这样认为其实也可以，因为想想toPrimitive(obj, 'number')的过程：

若是输入值为引用数据类型，则先调用valueOf()方法
若是valueOf()方法的返回值是基本数据类型则直接返回，若不是则继续调用toString()
若是调用toString()的返回值是基本数据类型则返回，否则报错。

可以看到，首先是会执行valueOf()的，但是引用类型执行valueOf()方法，除了日期类型，其它情况都是返回它本身，也就是说执行完valueOf()之后，还是一个引用类型并且是它本身。那么我们是不是就可以将valueOf()这一步给省略掉，认为它是直接执行toString()的，这样做起题来也快了很多。

6. 几种一元运算符的类型转换？

对于几种常用运算符的类型转换：

-、*、/、%这四种都会把符号两边转成数字来进行运算
+由于不仅是数字运算符，还是字符串的连接符，所以分为两种情况：
两端都是数字则进行数字计算(一元正号+b这种情况相当于转换为数字)
有一端是字符串，就会把另一端也转换为字符串进行连接

对象的+号类型转换：

对象在进行+号字符串连接的时候，toPrimitive的参数hint是default，但是default的执行顺序和number一样都是先判断有没有valueOf，有的话执行valueOf，然后判断valueof后的返回值，若是是引用类型则继续执行toString。(类似题4.5和4.6)
日期在进行+号字符串连接的时候，优先调用toString()方法。(类似题4.7)
一元正号是转换其他对象到数值的最快方法,也是最推荐的做法，因为 它不会对数值执行任何多余操作。
7. 你会几种让if(a == 1 && a == 2 && a == 3)条件成立的办法？

这道题相信大家看的不会少，除了重写valueOf()你还会哪些解法呢？

解法一：重写valueOf()

这个解法是利用了：当对象在进行==比较的时候实际是会先执行valueOf()，若是valueOf()的返回值是基本数据类型就返回，否则还是引用类型的话就会继续调用toString()返回，然后判断toString()的返回值，若是返回值为基本数据类型就返回，否则就报错。

现在valueOf()每次返回的是一个数字类型，所以会直接返回。

// 1
var a = {
  value: 0,
  valueOf () {
    return ++this.value
  }
}
if (a == 1 && a == 2 && a == 3) {
  console.log('成立')
}

@前端进阶之旅: 代码已经复制到剪贴板

解法二：重写valueOf()和toString()

var a = {
  value: 0,
  valueOf () {
    return {}
  },
  toString () {
    return ++this.value
  }
}
if (a == 1 && a == 2 && a == 3) {
  console.log('成立')
}

@前端进阶之旅: 代码已经复制到剪贴板

原理就是解法一的原理，只不过用到了当valueOf()的返回值是引用类型的时候会继续调用toString()。

这里你甚至都可以不用重写valueOf()，因为除了日期对象其它对象在调用valueOf()的时候都是返回它本身。

也就是说你也可以这样做：

var a = {
  value: 0,
  toString () {
    return ++this.value
  }
}
if (a == 1 && a == 2 && a == 3) {
  console.log('成立')
}

@前端进阶之旅: 代码已经复制到剪贴板

解法三：重写Symbol.toPrimitive

想想是不是还可以用Symbol.toPrimitive来解呢？

结合题3.10我们知道，当对象在进行==比较的时候，Symbol.toPrimitive接收到的参数hint是"defalut"，那么我们只需要这样重写：

var a = {
  value: 0,
  [Symbol.toPrimitive] (hint) {
    if (hint === 'default') {
      return ++this.value
    }
  }
}
if (a == 1 && a == 2 && a == 3) {
  console.log('成立')
}

@前端进阶之旅: 代码已经复制到剪贴板

这样结果也是可以的。

解法四：定义class并重写valueOf()

当然你还可以用class来写：

class A {
  constructor () {
    this.value = 0
  }
  valueOf () {
    return ++this.value
  }
}
var a = new A()
if (a == 1 && a == 2 && a == 3) {
  console.log('成立')
}

@前端进阶之旅: 代码已经复制到剪贴板

解法五：利用数组转为字符串会隐式调用join()

什么 ？ 还有别的解法吗？而且我看解法五的题目有点没看懂啊。

让我们回过头去看看题4.3，那里提到了当数组在进行转字符串的时候，调用toString()的结果其实就是调用join的结果。

那和这道题有什么关系？来看看答案：

let a = [1, 2, 3]
a['join'] = function () {
  return this.shift()
}
if (a == 1 && a == 2 && a == 3) {
  console.log('成立')
}

@前端进阶之旅: 代码已经复制到剪贴板

因为我们知道，对象如果是数组的话，当我们不重写其toString()方法，在转换为字符串类型的时候，默认实现就是将调用join()方法的返回值作为toString()的返回值。

所以这里我们重写了a的join方法，而这次重写做了两件事情：

将数组a执行a.shift()方法，我们知道这会影响原数组a的，将第一项去除
将刚刚去除的第一项返回回去

所以当我们在执行a == 1这一步的时候，由于隐式调用了a['join']方法，所以会执行上面👆说的那两件事情，后面的a == 2和a == 3同理。

解法六：定义class继承Array并重写join()

对于解法五我们同样可以用class来实现

class A extends Array {
  join = this.shift
}
var a = new A(1, 2, 3)
if (a == 1 && a == 2 && a == 3) {
  console.log('成立')
}

@前端进阶之旅: 代码已经复制到剪贴板

这种写法比较酷🆒，但是第一次看可能不太能懂。

首先A这个类通过extends继承于Array，这样通过new A创建的就是一个数组
然后A重写了join方法，join = this.shift就相当于是join = function () { return this.shift() }
这样当每次调用a == xxx的时候，都会隐式调用我们自定义的join方法，执行和解法五一样的操作。
8. 让if (a === 1 && a === 2 && a === 3)条件成立？

这道题看着和上面那道有点像，不过这里判断的条件是全等的。

我们知道全等的条件：

左右两边的类型要相等，如果类型不相等则直接返回false，这点和==不同，==会发生隐式类型转换
再判断值相不相等

而对于上面👆一题的解法我们都是利用了==会发生隐式类型转换这一点，显然如果再用它来解决这道题是不能实现的。

想想当我们在进行a === xxx判断的时候，实际上就是调用了a这个数据而已，也就是说我们要在调用这个数据之前，做一些事情，来达到我们的目的。

想想在Vue2.x中不就是利用了Object.defineProperty()方法重新定义data中的所有属性，那么在这里我们同样也可以利用它来劫持a，修改a变量的get属性。

var value = 1;
Object.defineProperty(window, "a", {
  get () {
    return this.value++;
  }
})
if (a === 1 && a === 2 && a === 3) {
  console.log('成立')
}

@前端进阶之旅: 代码已经复制到剪贴板

这里实际就做了这么几件事情：

使用Object.defineProperty()方法劫持全局变量window上的属性a
当每次调用a的时候将value自增，并返回自增后的值

（其实我还想着用Proxy来进行数据劫持，代理一下window，将它用new Proxy()处理一下，但是对于window对象好像没有效果…）

解法二

怎么办 😂，一碰到这种题我又想到了数组…

var arr = [1, 2, 3];
Object.defineProperty(window, "a", {
  get () {
    return this.arr.shift()
  }
})
if (a === 1 && a === 2 && a === 3) {
  console.log('成立')
}

@前端进阶之旅: 代码已经复制到剪贴板

中了shift()的毒…当然，这样也是可以实现的。

解法三

还有就是
EnoYao大佬那里看来的骚操作：

原文链接：
https://juejin.im/post/5e66dc416fb9a07cab3aaa0a

var aﾠ = 1;
var a = 2;
var ﾠa = 3;
if (aﾠ == 1 && a == 2 && ﾠa == 3) {
  console.log("成立");
}

@前端进阶之旅: 代码已经复制到剪贴板

说来惭愧…a的前后隐藏的字符我打不来 😂…

9. 控制台输入{}+[]会怎样？

这道有趣的题是从
LINGLONG的一篇
《【js小知识】[]+ {} =？/{} +[] =?（关于加号的隐式类型转换）》那里看来的。

(PS: pick一波玲珑，这位小姐姐的文章写的都挺好的，不过热度都不高，大家可以支持一下呀 😁)

OK👌，来看看题目是这样的：

在控制台(比如浏览器的控制台)输入:

{}+[]

@前端进阶之旅: 代码已经复制到剪贴板

的结果会是什么 🤔️？

咦～这道题应该很简单吧，根据前面的类型转换原则，+两边都转换为字符串，{}转为"[object Object]"，[]转为""，拼接的结果就是：

console.log({}+[]) // "[object Object]"

@前端进阶之旅: 代码已经复制到剪贴板

但是注意这里的题目，是要在控制台输出哦。

此时我把这段代码在控制台输出结果发现答案竟然和预期的不一样：

{}+[]
0

@前端进阶之旅: 代码已经复制到剪贴板

也就是说{}被忽略了，直接执行了+[]，结果为0。

知道原因的我眼泪掉了下来，原来它和之前提到的1.toString()有点像，也是因为JS对于代码解析的原因，在控制台或者终端中，JS会认为大括号{}开头的是一个空的代码块，这样看着里面没有内容就会忽略它了。

所以只执行了+[]，将其转换为0。

如果我们换个顺序的话就不会有这种问题：

(图片来源：
https://juejin.im/post/5e605528518825495c659769#heading-12)

为了证实这一点，我们可以把{}当成空对象来调用一些对象的方法，看会有什么效果：

（控制台或者终端）

{}.toString()

@前端进阶之旅: 代码已经复制到剪贴板

现在的{}依旧被认为是代码块而不是一个对象，所以会报错：

Uncaught SyntaxError: Unexpected token '.'

@前端进阶之旅: 代码已经复制到剪贴板

解决办法可以用一个()将它扩起来：

({}).toString

@前端进阶之旅: 代码已经复制到剪贴板

不过这东西在实际中用的不多，我能想到的一个就是在项目中(比如我用的vue)，然后定义props的时候，如果其中一个属性的默认值你是想要定义为一个空对象的话，就会用到：

props: {
    target: {
        type: Object,
        default: () => ({})
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
第五补：八种JS继承

对于JS继承我也写了一个系列「封装|继承|多态」，这里是传送门：

封装
继承
多态(缓一缓还在写😂)

具体的例子还有题目在文章中都已经说的很清楚了，这里我就只列举一下各个继承的优缺点以及伪代码。

1. 原型链继承

伪代码：

Child.prototype = new Parent()

@前端进阶之旅: 代码已经复制到剪贴板

思维导图：

优点：

继承了父类的模板，又继承了父类的原型对象

缺点：

如果要给子类的原型上新增属性和方法，就必须放在Child.prototype = new Parent()这样的语句后面
无法实现多继承(因为已经指定了原型对象了)
来自原型对象的所有属性都被共享了，这样如果不小心修改了原型对象中的引用类型属性，那么所有子类创建的实例对象都会受到影响
创建子类时，无法向父类构造函数传参数
2. 构造继承

伪代码：

function Child () {
    Parent.call(this, ...arguments)
}

@前端进阶之旅: 代码已经复制到剪贴板

思维导图：

优点：

解决了原型链继承中子类实例共享父类引用对象的问题，实现多继承，创建子类实例时，可以向父类传递参数

缺点：

构造继承只能继承父类的实例属性和方法，不能继承父类原型的属性和方法
实例并不是父类的实例，只是子类的实例
无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
3. 组合继承

伪代码：

// 构造继承
function Child () {
  Parent.call(this, ...arguments)
}
// 原型链继承
Child.prototype = new Parent()
// 修正constructor
Child.prototype.constructor = Child

@前端进阶之旅: 代码已经复制到剪贴板

思维导图：

实现方式：

使用原型链继承来保证子类能继承到父类原型中的属性和方法
使用构造继承来保证子类能继承到父类的实例属性和方法

优点：

可以继承父类实例属性和方法，也能够继承父类原型属性和方法
弥补了原型链继承中引用属性共享的问题
可传参，可复用

缺点：

使用组合继承时，父类构造函数会被调用两次
并且生成了两个实例，子类实例中的属性和方法会覆盖子类原型(父类实例)上的属性和方法，所以增加了不必要的内存。
4. 寄生组合继承

伪代码：

// 构造继承
function Child () {
  Parent.call(this, ...arguments)
}
// 原型式继承
Child.prototype = Object.create(Parent.prototype)
// 修正constructor
Child.prototype.constructor = Child

@前端进阶之旅: 代码已经复制到剪贴板

思维导图：

寄生组合继承算是ES6之前一种比较完美的继承方式吧。

它避免了组合继承中调用两次父类构造函数，初始化两次实例属性的缺点。

所以它拥有了上述所有继承方式的优点：

只调用了一次父类构造函数，只创建了一份父类属性
子类可以用到父类原型链上的属性和方法
能够正常的使用instanceOf和isPrototypeOf方法
5. 原型式继承

伪代码：

var child = Object.create(parent)

@前端进阶之旅: 代码已经复制到剪贴板

实现方式：

该方法的原理是创建一个构造函数，构造函数的原型指向对象，然后调用 new 操作符创建实例，并返回这个实例，本质是一个浅拷贝。

在ES5之后可以直接使用Object.create()方法来实现，而在这之前就只能手动实现一个了(如题目6.2)。

优点：

再不用创建构造函数的情况下，实现了原型链继承，代码量减少一部分。

缺点：

一些引用数据操作的时候会出问题，两个实例会公用继承实例的引用数据类
谨慎定义方法，以免定义方法也继承对象原型的方法重名
无法直接给父级构造函数使用参数
6. 寄生式继承

伪代码：

function createAnother (original) {
    var clone = Object.create(original);; // 通过调用 Object.create() 函数创建一个新对象
    clone.fn = function () {}; // 以某种方式来增强对象
    return clone; // 返回这个对象
}

@前端进阶之旅: 代码已经复制到剪贴板

实现方式：

在原型式继承的基础上再封装一层，来增强对象，之后将这个对象返回。

优点：

再不用创建构造函数的情况下，实现了原型链继承，代码量减少一部分。

缺点：

一些引用数据操作的时候会出问题，两个实例会公用继承实例的引用数据类
谨慎定义方法，以免定义方法也继承对象原型的方法重名
无法直接给父级构造函数使用参数
7. 混入方式继承

伪代码：

function Child () {
    Parent.call(this)
    OtherParent.call(this)
}
Child.prototype = Object.create(Parent.prototype)
Object.assign(Child.prototype, OtherParent.prototype)
Child.prototype.constructor = Child

@前端进阶之旅: 代码已经复制到剪贴板

思维导图：

8. class中的继承

伪代码：

class Child extends Parent {
    constructor (...args) {
        super(...args)
    }
}

@前端进阶之旅: 代码已经复制到剪贴板

ES6中的继承：

主要是依赖extends关键字来实现继承，且继承的效果类似于寄生组合继承
使用了extends实现继承不一定要constructor和super，因为没有的话会默认产生并调用它们
extends后面接着的目标不一定是class，只要是个有prototype属性的函数就可以了

ES5继承和ES6继承的区别：

在ES5中的继承(例如构造继承、寄生组合继承) ，实质上是先创造子类的实例对象this，然后再将父类的属性和方法添加到this上(使用的是Parent.call(this))。
而在ES6中却不是这样的，它实质是先创造父类的实例对象this(也就是使用super())，然后再用子类的构造函数去修改this

← 原生JS与jQuery操作DOM对比
如何写出一个惊艳面试官的深拷贝 →
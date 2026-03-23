Array基础

要想手写数组方法，先补一补基础，得先会使用它们api

创建一个数组
			//字面量
            let demo = [1, 2, 3]
            // 构造器
            let demo1 = Array(),
                demo2 = Array(3),
                demo3 = Array(1,2,3),
                demo4 = new Array(1,2,3);

@前端进阶之旅: 代码已经复制到剪贴板
构造函数上的方法
Array.of()

简单理解就是创建一个新数组的实例,可以看看与Array构造函数区别

语法:

Array.of(element0[, element1[, ...[, elementN]]])

@前端进阶之旅: 代码已经复制到剪贴板

用法：

Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]

@前端进阶之旅: 代码已经复制到剪贴板

两者区别：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组（**注意：**这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组）。

Array.isArray()

Array.isArray() 用于确定传递的值是否是一个 
Array
。

Array.isArray([1, 2, 3]);  
// true
Array.isArray({foo: 123}); 
// false
Array.isArray("foobar");   
// false
Array.isArray(undefined);  
// false

@前端进阶之旅: 代码已经复制到剪贴板

手动实现

			// Array.isArray
            if(!Array.isArray){
                Array.isArray = obj => Object.prototype.toString.call(obj) === '[object Array]'
            }

@前端进阶之旅: 代码已经复制到剪贴板

判断JS数据类型，可以看看我之前写的博客 
聊一聊typeof instanceof 实现原理

Array.from()

Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

Array.from(arrayLike[, mapFn[, thisArg]])

@前端进阶之旅: 代码已经复制到剪贴板
参数
arrayLike: 必选，可以传入 1、类数组(argumentg) 2、可迭代对象(set,map)。
mapFn: 可选，相当于Array.from(arrayLike).map(mapFn, thisArg)。
thisArg: 可选，执行回调函数mapFn时候的this对象。非常有用，利于解耦。可以把被处理的数据和对象分离，thisArg中定义处理函数handle，用来在mapFn中返回调用handle之后的结果。
用法

String

			// Array.from()
            const demo = Array.from('123')
            console.log(demo) //[ 'a', 'b', 'c' ]

@前端进阶之旅: 代码已经复制到剪贴板

new Set()

			const Array_demo = Array.from(new Set([1,2,3,4,1,2,3]))
            console.log(Array_demo)  // [1,2,3,4]

@前端进阶之旅: 代码已经复制到剪贴板

new Map()

const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

@前端进阶之旅: 代码已经复制到剪贴板

类数组

const fn = (function() {
    const demo = Array.from(arguments);
    console.log(demo);
})(1,2,3); // [ 1, 2, 3 ]

@前端进阶之旅: 代码已经复制到剪贴板

数组去重合并

			let fn = function () {
                console.log(arguments)
                const Arr_new = [].concat.apply([],arguments)
                return Array.from(new Set(Arr_new))
            }
            const   demo1 = [1, 2, 3, 4],
                    demo2 = [4,5,6,2,2,2],
                    demo3 = [1,2,3,4,2,2,3,4];
            console.log(fn(demo1,demo2,demo3))
            // [1,2,3,4,5,6]

@前端进阶之旅: 代码已经复制到剪贴板

充分利用第三个参数thisArg

		const obj = {
            handle: x => x * 4 
        }
        console.log(Array.from([11, 22, 33], function (x) {
            return this.handle(x)
        }, obj))
        // [44, 88, 132]

@前端进阶之旅: 代码已经复制到剪贴板
思路
判断arrayLike是否为空
根据mapFn判断是否为构造函数，为构造函数，每次遍历时，让arr[i] = mapFn(iValue,i), 不是构造函数时，arr[i] = iValue
判断thisArg是否存在,存在的话 arr[i] = mapFn.call(thisArg, iValue,i)

参考源码在V8中
array.js第1763行开启Array.from之旅

		/**
         * 实现Array.from
         * toInteger方法:返回一个整数
         * toLength方法: 保证len数字合法[0~Number.MAX_SAFE_INTEGER]
         * Number.MAX_SAFE_INTEGER = Math.pow(2,53) - 1
         * 判断arrayLike 为 空 抛出错误
         * mapFn非空并且不是构造函数抛出错误
         * 每次遍历arrayLike,如果mapFn存在, arr[i] = mapFn(iValue,i) 不存在的话 arr[i] = iValue
         * 判断thisArg是否存在,存在的话 arr[i] = mapFn.call(thisArg, iValue,i)
         * */
        Array.myfrom = (function () {
            const toStr = Object.prototype.toString
            const isCallable = fn => typeof fn === 'function' || toStr.call(fn) === '[object Function]'
            
            const toInteger = value => {
                const v = Number(value)
                if(isNaN(v))    return 0
                // 无穷大或者0 直接返回
                if(v === 0 || !isFinite(v)) return v
                return (v > 0 ? 1 : -1) * Math.floor(Math.abs(v))
            }
            // 最大的范围Number.MAX_SAFE_INTEGER
            const maxSafeInteger = Number.MAX_SAFE_INTEGER
            
            const toLength = value => {
                const len = toInteger(value)
                return Math.min(maxSafeInteger, Math.max(0, len))
            }
            return function myfrom (arrayLike/*, mapFn, thisArg*/) {
                const that = this
                if(arrayLike === null) throw new TypeError("Array.from requires an array-like object - not null or undefined")
                
                const items = Object(arrayLike)
                let thisArg = ''
                // 判断mapFn是否undefined, 这里最好不要直接使用undefined,因为undefined不是保留字,
                // 很有可能undefined是个值  最好用 void 0 或者 void undefined 
                const mapFn = arguments.length > 1 ? arguments[1] : void 0
                if( typeof mapFn !== 'undefined') {
                    // 接下来判断第二个参数是不是构造函数
                    if( !isCallable(mapFn) ) throw new TypeError("Array.from when provided mapFn must be a function")
                    if( arguments.length > 2) thisArg = arguments[2]
                }
                const len = toLength(items.length)
                const arr = isCallable(that) ? Object(new that(len)) : new Array(len)

                let i = 0,
                    iValue;
                while ( i < len) {
                    iValue = items[i]
                    if(mapFn) arr[i] = typeof thisArg === 'undefined' ? mapFn(iValue,i) : mapFn.call(thisArg, iValue, i)
                    else 
                        arr[i] = iValue
                    i++
                }
                arr.length = len
                return arr
            }
        })()

@前端进阶之旅: 代码已经复制到剪贴板

👍不得不说，把Array.from()实现出来后，其实收获很多东西的。

常见方法

为了简单记忆，方便查找，将主要方法分为三类 : 数组可遍历方法，会修改原数组方法，返回新数组方法。





























← Object.defineProperty详解
arguments详解 →
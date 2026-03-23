一、前言

从问题说起：熟悉 React 组件生命周期的话都知道：调用 setState 方法总是会触发 render 方法从而进行 vdom re-render 相关逻辑，哪怕实际上你没有更改到 Component.state

this.state = {count: 0}
this.setState({count: 0});// 组件 state 并未被改变，但仍会触发 render 方法 

@前端进阶之旅: 代码已经复制到剪贴板
为了避免这种性能上的浪费，React 提供了一个 shouldComponentUpdate 来控制触发 vdom re-render 逻辑的条件。于是 PureRenderMixin 作为一种优化技巧被使用。它仅仅是浅比较对象，深层次的数据结构根本不管用

js中的Immutable Data

在javascript中我们可以通过deep clone来模拟Immutable Data，就是每次对数据进行操作，新对数据进行deep clone出一个新数据

deep clone
当然你或许意识到了，这样非常的慢
'use strict';  
var cloneDeep = require('lodash.clonedeep');

var data = {  
    id: 'data',
    author: {
        name: 'mdemo',
        github: 'https://github.com/demohi'
    }
};

var data1 = cloneDeep(data);

console.log('equal:', data1===data); //false

data1.id = 'data1';  
data1.author.name = 'demohi';

console.log(data.id);// data  
console.log(data1.id);// data1

console.log(data.author.name);//mdemo  
console.log(data1.author.name);//demohi  

@前端进阶之旅: 代码已经复制到剪贴板

这时候 immutableJS 就派得上用场了

var map1 = Immutable.fromJS({a:1, b:1, c:{b:{c:{d:{e:7}}}}});
var map2 = Immutable.fromJS({a:1, b:1, c:{b:{c:{d:{e:7}}}}});
Immutable.is(map1, map2);  // true

@前端进阶之旅: 代码已经复制到剪贴板
遍历对象不再用for-in，可以这样:
Immutable.fromJS({a:1, b:2, c:3}).map(function(value, key) { /* do some thing */});

@前端进阶之旅: 代码已经复制到剪贴板
二、什么是 Immutable Data
Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象
Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变
同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing····（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。

打印immutableJS看看有什么东西

一个说明不可变的例子

// 原生对象
let a1 = {
    b: 1,
    c: {
        c1: 123
    }
};

let b1 = a1;
b1.b = 2;

console.log(a1.b, b1.b); // 2, 2
console.log(a1 === b1); // true
console.log(a1.c === b1.c); // true

// immutable.js 的Map
let a2 = Immutable.fromJS({
    b: 1,
    c: {
        c1: 123
    }
});

let b2 = a2.set('b', 2);

// 对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象
console.log(a2.get('b'), b2.get('b')); // 1, 2  对象 a2 的 b 值并没有变成2。
console.log(a2 === b2); //  false

//如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。
console.log(a2.get('c') === b2.get('c')); //true

@前端进阶之旅: 代码已经复制到剪贴板
三、为什么要在React.js中使用Immutable
它是一个完全独立的库，无论基于什么框架都可以用它。意义在于它弥补了Javascript 没有不可变数据结构的问题
由于是不可变的，可以放心的对对象进行任意操作。在React开发中，频繁操作state对象或是store，配合immutableJS快、安全、方便
熟悉React.js的都应该知道，React.js是一个UI = f(states)的框架，为了解决更新的问题，React.js使用了virtual dom，virtual dom通过diff修改dom，来实现高效的dom更新。
但是有一个问题。当state更新时，如果数据没变，你也会去做virtual dom的diff，这就产生了浪费。这种情况其实很常见
当然你可能会说，你可以使用PureRenderMixin来解决呀，PureRenderMixin是个好东西，我们可以用它来解决一部分的上述问题
但PureRenderMixin只是简单的浅比较，不使用于多层比较。那怎么办？自己去做复杂比较的话，性能又会非常差
方案就是使用immutable.js可以解决这个问题。因为每一次state更新只要有数据改变，那么PureRenderMixin可以立刻判断出数据改变，可以大大提升性能

Immutable 优点

Immutable 降低了 Mutable 带来的复杂度

可变（Mutable）数据耦合了 Time 和 Value 的概念，造成了数据很难被回溯

节省内存

Immutable.js 使用了 Structure Sharing 会尽量复用内存，甚至以前使用的对象也可以再次被复用。没有被引用的对象会被垃圾回收

import { Map} from 'immutable';
let a = Map({
  select: 'users',
  filter: Map({ name: 'Cam' })
})
let b = a.set('select', 'people');

a === b; // false
a.get('filter') === b.get('filter'); // true

@前端进阶之旅: 代码已经复制到剪贴板
Undo/Redo，Copy/Paste，甚至时间旅行这些功能做起来小菜一碟

因为每次数据都是不一样的，只要把这些数据放到一个数组里储存起来，想回退到哪里就拿出对应数据即可，很容易开发出撤销重做这种功能。

并发安全

传统的并发非常难做，因为要处理各种数据不一致问题，因此『聪明人』发明了各种锁来解决。但使用了 Immutable 之后，数据天生是不可变的，并发锁就不需要了。

拥抱函数式编程

Immutable 本身就是函数式编程中的概念，纯函数式编程比面向对象更适用于前端开发。因为只要输入一致，输出必然一致，这样开发的组件更易于调试和组装。

Immutable 缺点

需要学习新的 API
增加了资源文件大小
容易与原生对象混淆
四、Immutable 的几种数据类型
List: 有序索引集，类似JavaScript中的Array。
Map: 无序索引集，类似JavaScript中的Object。
OrderedMap: 有序的Map，根据数据的set()进行排序。
Set: 没有重复值的集合。
OrderedSet: 有序的Set，根据数据的add进行排序。
Stack: 有序集合，支持使用unshift（）和shift（）添加和删除。
Range(): 返回一个Seq.Indexed类型的集合，这个方法有三个参数，start表示开始值，默认值为0，end表示结束值，默认为无穷大，step代表每次增大的数值，默认为1.如果start = end,则返回空集合。
Repeat(): 返回一个vSeq.Indexe类型的集合，这个方法有两个参数，value代表需要重复的值，times代表要重复的次数，默认为无穷大。
Record: 一个用于生成Record实例的类。类似于JavaScript的Object，但是只接收特定字符串为key，具有默认值。
Seq: 序列，但是可能不能由具体的数据结构支持。
Collection: 是构建所有数据结构的基类，不可以直接构建

上面那么多常用的也就是 List和Map

五、几个重要的API

1、fromJS()

fromJS() 是最最最常用的将原生JS数据转换为ImmutableJS数据的转换方法。使用方式类似于 JSON.parse()，接收两个参数：json 数据和 reviver 函数
在不传递reviver函数的情况下，默认将原生JS的Array转为List，Object转为Map
// 常见
const t1 = Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40});
console.log(t1);

// 不常用
const t2 = Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40}, function(key, value) {
    // 定制转换方式，下这种就是将Array转换为List，Object转换为Map
    const isIndexed = Immutable.Iterable.isIndexed(value);
    return isIndexed ? value.toList() : value.toOrderedMap();
    // true, "b", {b: [10, 20, 30]}
    // false, "a", {a: {b: [10, 20, 30]}, c: 40}
    // false, "", {"": {a: {b: [10, 20, 30]}, c: 40}}
});
console.log(t2);

@前端进阶之旅: 代码已经复制到剪贴板

2、toJS()

先来看官网的一段话: immutable数据应该被当作值而不是对象，值是表示该事件在特定时刻的状态。这个原则对理解不可变数据的适当使用是最重要的。为了将Immutable.js数据视为值，就必须使用Immutable.is()函数或.equals()方法来确定值相等，而不是确定对象引用标识的 === 操作符

所以toJS()就是用来对两个immutable对象进行值比较的。使用方式类似于 Object.is(obj1, obj2)，接收两个参数
const map1 = Immutable.Map({a:1, b:1, c:1});
const map2 = Immutable.Map({a:1, b:1, c:1});

// 两个不同的对象
console.log(map1 === map2); // false
// 进行值比较
console.log(Immutable.is(map1, map2)); // true

// 不仅仅只能比较ImmutableJS的类型的数据
console.log(Immutable.is(undefined, undefined)); // true
console.log(Immutable.is(null, undefined)); // false
console.log(Immutable.is(null, null)); // true
console.log(Immutable.is(NaN, NaN)); // true

// 区别于 Object.is
console.log(Object.is(0, -0) ,Immutable.is(-0, 0)); // false , true

@前端进阶之旅: 代码已经复制到剪贴板

3、Map

Map 数据类型，对应原生 Object 数组。最最常用的 数据结构之一，循环时无序(orderedMap有序)，对象的 key 可以是任意值。具体看下面的例子

console.log(Map().set(List.of(1), 'list-of-one').get(List.of(1)));
console.log(Map().set(NaN, 'NaN').get(NaN));
console.log(Map().set(undefined, 'undefined').get(undefined));
console.log(Map().set(null, 'null').get(null));

@前端进阶之旅: 代码已经复制到剪贴板
简单介绍 OrderedMap

OrderedMap 是 Map 的变体，它除了具有 Map 的特性外，还具有顺序性，当开发者遍历 OrderedMap 的实例时，遍历顺序为该实例中元素的声明、添加顺序。OrderedMap比非有序Map更昂贵，并且可能消耗更多的内存。如果真要求遍历有序，请使用List

4、List

List 数据类型，对应原生 Array 数组。和原生数组，最大区别不存在’空位’。[, , , , ]

console.log(List([,,,,]).toJS());// [undefined, undefined, undefined, undefined]

@前端进阶之旅: 代码已经复制到剪贴板
六、API

我们主要介绍Map 和 List

创建

1、通过构造函数 Map()

构造函数不常用，一般都是通过Immutable.fromJS()将一个JS原生对象转换为一个Immutable对象

2、Map()

/*
 Map<K, V>(): Map<K, V>
 Map<K, V>(iter: Iterable.Keyed<K, V>): Map<K, V>
 Map<K, V>(iter: Iterable<any, Array<any>>): Map<K, V>
 Map<K, V>(obj: Array<Array<any>>): Map<K, V>
 Map<V>(obj: {[key: string]: V}): Map<string, V>
 Map<K, V>(iterator: Iterator<Array<any>>): Map<K, V>
 Map<K, V>(iterable: Object): Map<K, V>
 */

console.log(Map().toJS()); // {}
console.log(Map({key: "value"}).toJS()); // {key: "value"}

@前端进阶之旅: 代码已经复制到剪贴板

同Key覆盖问题

//最后的{key: value2} 覆盖了前面的 {key: value}
console.log(Map([["key", "value"], ["key", "value2"], ["key1", "value1"]]).toJS());// {key: "value2", key1: "value1"}

@前端进阶之旅: 代码已经复制到剪贴板

3、List()

/*
 List<T>(): List<T>
 List<T>(iter: Iterable.Indexed<T>): List<T>
 List<T>(iter: Iterable.Set<T>): List<T>
 List<K, V>(iter: Iterable.Keyed<K, V>): List<any>
 List<T>(array: Array<T>): List<T>
 List<T>(iterator: Iterator<T>): List<T>
 List<T>(iterable: Object): List<T>
 */

console.log(List().toJS()); // []
console.log(List([1,2,3,4,{a:123}]).toJS()); // [ 1, 2, 3, 4, {a: 123}]

@前端进阶之旅: 代码已经复制到剪贴板

4、另一种方式

Map.of()

console.log(Map.of('key1','value1','key2','value2','key3','value3').toJS()); // {key1: "value1", key2: "value2", key3: "value3"}

@前端进阶之旅: 代码已经复制到剪贴板

List.of()

console.log(List.of({x:1}, 2, [3], 4).toJS()); // [{x:1}, 2, [3], 4]

@前端进阶之旅: 代码已经复制到剪贴板
判断是否是一个Map或者List

1、Map判断

判断是否是一个Map , 对原生Object不生效
console.log(Map.isMap({})); // false
console.log(Map.isMap(Map({}))); // true

@前端进阶之旅: 代码已经复制到剪贴板

2、List判断

判断是否是一个List , 对原生Array不生效

console.log(List.isList([])); // false
console.log(List.isList(List([]))); // true

@前端进阶之旅: 代码已经复制到剪贴板
获取大小

1、size

// list
console.log(List([1,2,3,4]).size);// 4
console.log(List.of(1, 2, 3, 4).size);// 4

// map
console.log(Map({key: "value2", key1: "value1"}).size);// 2
console.log(Map.of({x:1}, 2, [3], 4).size);// 2

@前端进阶之旅: 代码已经复制到剪贴板

count()

// map
console.log(Immutable.fromJS({key: "value2", key1: "value1"}).count());// 4
// 可以定制条件，来确定大小
console.log(Immutable.fromJS({key: 1, key1: 34}).count((value, key, obj) => {
    return value > 3;
}));// 1 value大于3的有两个

// list
console.log(Immutable.fromJS([1, 2, 5, 6]).count());// 4
// 可以制定条件，来确定 大小
console.log(Immutable.fromJS([1, 2, 5, 6]).count((value, index, array) => {
    return value > 3;
}));// 2 大于3的有两个

@前端进阶之旅: 代码已经复制到剪贴板

countBy()

countBy()和count()的区别就是它的返回值是一个对象。

// Map
console.log(Immutable.fromJS({key: 1, key1: 34}).countBy((value, key, obj) => {
    return value > 3;
}).toJS());// {false: 1, true: 1}

// list
console.log(Immutable.fromJS([1, 2, 5, 6]).countBy((value, index, array) => {
    return value > 3;
}).toJS());// {false: 2, true: 2}

@前端进阶之旅: 代码已经复制到剪贴板
添加元素

1、Set

// Map
// 将 key 位置的元素替换为 value
const $obj1 = Map({a: {a1: 34}, b: 2, c: 3, d: 444});
console.log($obj1.set('a', 0).toJS()); // {a: 0, b: 2, c: 3, d: 444}
console.log($obj1.set('e', 99).toJS());  // {a: 1, b: 2, c: 3, d: 444, e: 99}

// List
// 将 index 位置的元素替换为 value，即使索引越界也是安全的, 空位 undefined
const $arr1 = List([1, 2, 3]);
console.log($arr1.set(-1, 0).toJS()); // [1, 2, 0]  注意-1 等效于 $arr1.set($arr1.size + -1, 0)
console.log($arr1.set(4, 0).toJS());  // [ 1, 2, 3, undefined, 0 ]  空位置为了undefined

@前端进阶之旅: 代码已经复制到剪贴板

2、setIn

// Map
console.log(Immutable.fromJS([1, 2, 3, {a: 45, b: 64}]).setIn(['3', 'a'], 1000).toJS());//[1, 2, 3, {a: 1000, b: 64}]

// List
console.log(Immutable.fromJS([1, 2, 3, {a: 45, b: 64}]).setIn(['3', 'a'], 1000).toJS());//[1, 2, 3, {a: 1000, b: 64}]

@前端进阶之旅: 代码已经复制到剪贴板



























← react结合redux实战
React16为什么要更改生命周期上 →
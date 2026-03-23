一、数组预览图

二、会改变原数组的方法
2.1 push()
方法在数组的尾部添加一个或多个元素，并返回数组的长度

参数: item1, item2, …, itemX ,要添加到数组末尾的元素

let arr = [1,2,3];

let length = arr.push('末尾1','末尾2'); // 返回数组长度

console.log(arr,length)

// [1, 2, 3, "末尾1", "末尾2"] 5

@前端进阶之旅: 代码已经复制到剪贴板

返回值： 数组的长度

2.2 pop()
方法删除数组的最后一个元素，减小数组长度并返回它删除的值
//组合使用push()和pop()能够用JavaScript数组实现先进后出的栈

let stack = [];

stack.push(1,2) // 返回长度2，这时stack的值是[1,2]

stack.pop() // 返回删除的值2，这时stack的值是[1]

@前端进阶之旅: 代码已经复制到剪贴板

返回值： 从数组中删除的元素(当数组为空时返回undefined)。

2.3 unshift()

方法在数组的头部添加一个或多个元素，并将已存在的元素移动到更高索引的位置来获得足够的空间，最后返回数组新的长度

let arr = [3,4,5];

let length = arr.unshift(1,2); // 返回长度是5

console.log(arr, length)

//[1, 2, 3, 4, 5] 5

@前端进阶之旅: 代码已经复制到剪贴板

返回值： 返回数组新的长度

2.4 shift()

方法删除数组的第一个元素并将其返回，然后把所有随后的元素下移一个位置来填补数组头部的空缺，返回值是删除的元素

let arr = [1,2,3];

let item = arr.shift(); // 返回删除的值1

console.log(arr, item)

// [2, 3] 1

@前端进阶之旅: 代码已经复制到剪贴板

返回值： 从数组中删除的元素; 如果数组为空则返回undefined

2.5 splice()

方法是在数组中插入或删除元素的通用方法

// start不超过数组长度(以下操作是连续的)
let arr = [1,2,3,4,5];

arr.splice(2) // arr是[1,2]，返回值是[3,4,5]

arr.splice(1,1) // arr是[1]，返回值是[2]

arr.splice(0,3) // arr是[]，返回值是[1],因为此时数组从第0位开始不够3位，所以是删除从0开始到最后的所有元素。

// start大于数组长度(以下操作是连续的)

let arr = [1,2,3,4,5];

arr.splice(5) // arr是[1,2,3,4,5]，返回值是[]

arr.splice(5,3,6) // arr是[1,2,3,4,5,6]，返回值是[]


arr.splice(5,3,7) // arr是[1,2,3,4,5,7] 返回值是[6]


// start是负数(以下操作是连续的)

let arr = [1,2,3,4,5];

arr.splice(-3,2); // arr是[1,2,5], 返回值是[3,4]
arr.splice(-4); // arr是[],返回值是[1,2,5]

// 插入数组时，是插入数组本身，而不是数组元素

let arr = [1,4,5];

arr.splice(1,0,[2,3]) // arr是[1,[2,3],4,5]，返回值是[]

@前端进阶之旅: 代码已经复制到剪贴板
2.6 sort()

sort() 方法将数组中的元素排序并返回排序后的数组

var stringArray = ["Blue", "Humpback", "Beluga"];
var numberArray = [40, 1, 5, 200];

function compareNumbers(a, b){
    return a - b;
}


console.log('stringArray:' + stringArray.join());

console.log('Sorted:' + stringArray.sort());

console.log('numberArray:' + numberArray.join());

// 没有使用比较函数时，数字并不会按照我们设想的那样排序

console.log('Sorted without a compare function:'+ numberArray.sort());

console.log('Sorted with compareNumbers:'+ numberArray.sort(compareNumbers));


//打印如下
// stringArray: Blue,Humpback,Beluga
// Sorted: Beluga,Blue,Humpback
// numberArray: 40,1,5,200
// Sorted without a compare function: 1,200,40,5
// Sorted with compareNumbers: 1,5,40,200

@前端进阶之旅: 代码已经复制到剪贴板

返回值： 返回排序后的数组。原数组已经被排序后的数组代替

2.7 reverse()

方法将数组中的元素颠倒顺序，返回逆序的数组

let arr = [1,2,3];

arr.reverse() // arr是[3,2,1]，返回值是[3,2,1]

@前端进阶之旅: 代码已经复制到剪贴板

返回值： 返回顺序颠倒后的数组。原数组已经被排序后的数组代替

2.8 fill()

方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素

arr.fill(value[, start[, end]])

@前端进阶之旅: 代码已经复制到剪贴板
value 用来填充数组元素的值。
start (可选) 起始索引，默认值为0。
end (可选) 终止索引，默认值为 this.length。
如果 start 是个负数, 则开始索引会被自动计算成为 length+start, 其中 length 是 this 对象的 length 属性值. 如果 end 是个负数, 则结束索引会被自动计算成为 length+end

返回值： 修改后的数组

[1, 2, 3].fill(4); // [4, 4, 4]

[1, 2, 3].fill(4, 1); // [1, 4, 4]

[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]

[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]

[1, 2, 3].fill(4, 3, 3); // [1, 2, 3]

[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]

[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]

[1, 2, 3].fill(4, 3, 5); // [1, 2, 3]

Array(3).fill(4); // [4, 4, 4]

//fill 方法故意被设计成通用方法, 该方法不要求 this 是数组对象。

[].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}

@前端进阶之旅: 代码已经复制到剪贴板



















← JavaScript数组、字符串、对象常用方法
JavaScript深浅拷贝 →
强烈建议打开控制台自己动手练习一遍，这样印象才会深刻

第一部分 JavaScript中的宽高属性
一、与window相关的宽高属性
1.1 window.location和document.location
window对象的location属性引用的是location对象，表示该窗口中当前显示文档的URL
document的对象的location属性也是引用location对象
所以 window.location === document.location //true
1.2 window.screen
window.screen包含有关用户屏幕的信息。它包括：
window.screen.width
window.screen.height
window.screen.availHeight
window.screen.availWidth
window.screenTop
window.screenLeft

1.3 与window相关的宽高

window.innerWidth 内部的宽度
window.innerHeight 内部的高度
window.outWidth 外部的宽度
window.outHeight 外部的高度

二、与document相关的宽高属性
2.1与client相关的宽高
document.body.clientWidth 元素宽度（可视内容区+内边距）
document.body.clientHeight元素高度（可视内容区+内边距）

该属性指的是元素的可视部分宽度和高度，即padding+content 如果没有滚动条，即为元素设定的宽度和高度 如果出现滚动条，滚动条会遮盖元素的宽高，那么该属性就是其本来宽高减去滚动条的宽高

example1：

body{ 
    border: 20px solid #000; 
    margin: 10px; 
    padding: 40px; 
    background: #eee; 
    height: 350px; 
    width: 500px; 
    overflow: scroll; 
} 
console.log(document.body.clientWidth);  // 350+padding(80) = 430
console.log(document.body.clientHeight);  // 500 + padding(80) = 580

@前端进阶之旅: 代码已经复制到剪贴板

example2: 在div中添加文字， 指导出现滚动条

#exp2 {
	width:200px;
	height:200px;
	background:red;
	border:1px solid #000;
	overflow:auto;
}

var test = document.getElementById("exp2");

console,log(test.clientHeight); // 200
console.log(test.clientWidth); // 

@前端进阶之旅: 代码已经复制到剪贴板

小结clientWidth和clientHeight

无padding无滚动 ： clientWidth = 盒子的width
有padding无滚动 ： clientWidth = 盒子的width + 盒子的padding * 2
有padding有滚动 ： clientWidth = 盒子和width + 盒子的padding * 2 - 滚动轴宽度

document.body.clientLeft

document.body.clientTop

这两个返回的是元素周围边框的厚度，如果不指定一个边框或者不定位该元素，它的值就是0

例：

body{ 
    border: 20px solid #000; 
    margin: 10px; 
    padding: 40px; 
    background: #eee; 
    height: 350px; 
    width: 500px; 
    overflow: scroll; 
} 
console.log(document.body.clientLeft);  // 20
console.log(document.body.clientTop);  // 20

@前端进阶之旅: 代码已经复制到剪贴板

小结clientLeft和clientTop

这一对属性是用来读取元素的border的宽度和高度的
clientTop = border-top
clientLeft = border-left
2.2 与offset相关的宽高
document.body.offsetWidth（元素的border+padding+content的宽度）
document.body.offsetHeight（元素的border+padding+content的高度）

该属性和其内部的内容是否超出元素大小无关，只和本来设定的border以及width和height有关

例：

body{ 
    border: 20px solid #000; 
    margin: 10px; 
    padding: 40px; 
    background: #eee; 
    height: 350px; 
    width: 500px; 
    overflow: scroll; 
} 
console.log(document.body.offsetWidth);  // 470 = padding*2 + 350 + border*2
console.log(document.body.offsetHeight);  // 620 = padding*2 + 500 + border*2

@前端进阶之旅: 代码已经复制到剪贴板

小结offsetWidth和offsetHeight

无padding无滚动无border
offsetWidth = clientWidth = 盒子的宽度
有padding无滚动有border
offsetWidth = 盒子的宽度 + 盒子padding2 + 盒子边框2 = clientWidth + 边框宽度*2
有padding有滚动，且滚动是显示的，有border
offsetWidth = 盒子宽度 + 盒子padding2 + 盒子边框2 = clientWidth + 滚动轴宽度 + 边框宽度*2
**document.offsetLeft **
**document.offsetTop **

了解这两个属性我们必须先了解它，什么是offsetParent

如果当前元素的父级元素没有进行CSS定位（position为absolute或relative）,offsetParent为body.
假如当前元素的父级元素中有CSS定位，offsetParent取最近的那个父级元素

offsetLeft的兼容性问题：

在IE6/7中

offsetLeft = offsetParent的padding-left + 当前元素的margin-left

在IE8/9/10以及chrome中

offsetLeft = offsetParent的margin-left + offsetParent的border宽度 + offsetParent的padding-left + 当前元素的margin-left

在FireFox中

offsetLeft = offsetParent的margin-left + 当前元素的margin-left + offsetParent的padding-left

例：

body{ 
    border: 20px solid #000; 
    margin: 10px; 
    padding: 40px; 
    background: #eee; 
    height: 350px; 
    width: 500px; 
    overflow: scroll; 
} 

#exp {
   width:400px;
   height:200px;
   padding:20px;
   margin:10px;
   background:red;
   border:20px solid #000;
   overflow:auto;
}
var div = document.getElementById("exp");


@前端进阶之旅: 代码已经复制到剪贴板

在IE8/9/10以及chrome中：

div.offsetLeft = 本身的margin10 + 父级元素的padding40 + margin10 + border20 = 80
div.offsetTop = 本身的margin10 + 父级元素的padding40 + margin10 + border20 = 80

在FireFox：（相比chrome中少了border）

div.offsetLeft = 本身的margin10 + 父级元素的padding40 + margin10 = 60
div.offsetTop = 本身的margin10 + 父级元素的padding40 + margin10 = 60

在IE6/7中：（相比在FireFox，不但少了border还少了父级元素的margin）

div.offsetLeft = 本身的margin10 + 父级元素的padding40 = 50
div.offsetTop = 本身的margin10 + 父级元素的padding40 = 50
2.3与scroll相关的宽高 (实际项目中用的最多)
document.body.scrollWidth
document.body.scrollHeight

document.body的scrollWidth和scrollHeight与div的scrollWidth和scrollHeight是有区别的

例：

body{ 
    border: 20px solid #000; 
    margin: 10px; 
    padding: 40px; 
    background: #eee; 
    height: 350px; 
    width: 500px; 
    overflow: scroll; 
}

document.body.scrollHeight; // 
document.body.scrollWidth; //

@前端进阶之旅: 代码已经复制到剪贴板

当给定宽高小于浏览器窗口的宽高

scrollWidth = 通常是浏览器窗口的宽度
scrollHeight = 通常是浏览器窗口的高度

当给定宽高大于浏览器窗口的宽高，且内容小于给定宽高的时候

scrollWidth = 给定宽度 + 其所有的padding + margin + border
scrollHeight = 给定高度 + 其所有的padding + margin + border

当给定宽高大于浏览器窗口宽高，且内容大于给定宽高

scrollWidth = 内容宽度 + 其所有的padding + margin + border
scrollHeight = 内容高度 + 其所有的padding + margin + border

在某div中的scrollWidth和scrollHeight

无滚动轴时：
scrollWidth = clientWidth = 盒子宽度 + 盒子padding*2

有滚动轴时：
scrollWidth = 实际内容的宽度 + padding*2
scrollHeight = 实际内容的高度 + padding*2

document.body.scrollLeft
document.body.scrollTop

与前面不同的是，这对属性是可读写的，指的是当元素其中的超出其宽高的时候，元素被卷起来的高度和宽度

#exp {
   width:400px;
   height:200px;
   padding:20px;
   margin:10px;
   background:red;
   border:20px solid #000;
   overflow-y:scroll;
}

var mydiv = document.getElementById("exp");

mydiv.scrollTop ;  //默认情况下是0 
mydiv.scrollLeft ; //默认情况下是0 

//可以改写它

mydiv.scrollTop = 20;
console.log(mydiv.scrollTop)

@前端进阶之旅: 代码已经复制到剪贴板

obj.style.width和obj.style.height

对于一个DOM元素，它的style属性返回的是一个对象，这个对象的任意一个属性是可读写的，style.width等于css属性中的宽度。style.height等于css属性中的高度

2.4 documentElement和body的关系

是父子级的关系

body{ 
    border: 20px solid #000; 
    margin: 10px; 
    padding: 40px; 
    background: #eee; 
    height: 350px; 
    width: 500px; 
    overflow: scroll; 
}

#exp {
   width:400px;
   height:200px;
   padding:20px;
   margin:10px;
   background:red;
   border:20px solid #000;
   overflow-y:scroll;
}

console.log(document); //document
console.log(document.documentElement); //html
console.log(document.body); //body

@前端进阶之旅: 代码已经复制到剪贴板

兼容问题推荐使用 获取浏览器窗口可视区域大小
document.body.clientWidth || document.documentElement.clientWidth;
document.body.clientHeight || document.documentElement.clientHeight;

@前端进阶之旅: 代码已经复制到剪贴板








← JavaScript原生数组及高阶函数
JavaScript启示录阅读笔录 →
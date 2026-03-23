一、事件处理
1.1 规则1：隔离应用层
好的写法，拆分应用逻辑
var myApp = {
    handleClick: function(e){
      this.showPopup(e);  
    },
    showPopup: function(e){
        var popup = document.getElementById("popup");
        popup.style.left = e.clientX + "px";
        popup.style.top = e.clientY + "px";
    }
};

addEventListener(element,"click",function(e){
    MyApp.handleClick(e);
});


@前端进阶之旅: 代码已经复制到剪贴板
1.2 规则2：不要分发事件对象
var myApp = {
    handleClick: function(e){
     // 假设事件支持 DOMlevel2
     
     e.preventDefault();
     e.stopPropagation();
     
     //传入应用逻辑
      this.showPopup(e.clientX,e.clientY);  
    },
    showPopup: function(x,y){
        var popup = document.getElementById("popup");
        popup.style.left = x + "px";
        popup.style.top = y + "px";
    }
};

addEventListener(element,"click",function(e){
    MyApp.handleClick(e);
});


@前端进阶之旅: 代码已经复制到剪贴板
二、javascript中的检测方法
2.1 检测原始值

在JavaScript中有五种原始类型：字符串、数字、布尔值、null、undefined。如果你希望一个值是字符串、数字、布尔值或undefined，最佳选择是使用typeof运算符。typeof运算符会返回一个表示值 饿类型的字符串

对于字符串，typeof返回string
对于数字，typeof返回number
对于布尔值，typeof返回boolean
对于undefined，typeof返回undefined
//检测字符串
if ( typeof name === "string"){}

//检测数字
if ( typeof count === "number"){}

//检测布尔值
if ( typeof found === "boolean" && found){}


//检测undefined
if ( typeof myApp === "undefined"){}

//检测null
var ele = document.getElementById("app");
if ( ele !== null){
    ele.className = "found";
}

@前端进阶之旅: 代码已经复制到剪贴板
2.2 检测引用值

有几种内置的引用类型 Object、Array、Date、Error。typeof运算符在判断这些引用类型时显得力不从心，因为所有对象都会返回undefined

console.log(typeof {}); //object
console.log(typeof []); //object
console.log(typeof new Date()); //object
console.log(typeof new RegExp()); //object

@前端进阶之旅: 代码已经复制到剪贴板
检测某个引用类型的最好方法使用instanceof运算符。
语法 value instanceof constructor
// 检测日期
if( value instanceof Date){
    console.log(value.getFullYear());
}

//检测正则表达式
if (value instanceof RegExp) {
    if (value.test(antherValue)) {
        console.log("poetries");
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
2.3 检测函数

typeof运算符可以检测函数

function myFunc(){

}

if (typeof myFunc === "function"){

}


@前端进阶之旅: 代码已经复制到剪贴板
2.4 检测数组
优雅的方法
function isArray(value){
    return Object.prototype.toString.call(value) === "[object Array]";
}

@前端进阶之旅: 代码已经复制到剪贴板
2.5 检测属性
判断属性是否存在的最好方法是使用in运算符，in运算符仅仅是判断属性是否存在，而不会去读属性的值
var object = {
    count: 0,
    related: null
};

//好的写法

if ("count" in object){
    
}

@前端进阶之旅: 代码已经复制到剪贴板
如果只是想检查实例对象的某个属性是否存在，则使用hasOwnProperty()方法。所有继承Object的对象都有这个方法，如果实例存在则返回true。
需要注意的是在IE8以及更早的版本中，DOM对象并非继承Object，因此也不包含这个方法
//对于所有非DOM对象来说，这是好的做法
if(object.hasOwnProperty("related")) {

}

// 如果你不确定是否为DOM对象 则需要这样写

if("hasOwnProperty" in object && object.hasOwnProperty("related")) {

}

@前端进阶之旅: 代码已经复制到剪贴板

在判断实例是否存在时，更倾向使用in运算符，只有在需要判断实例属性时才用hasOwnProperty

三、将配置数据从代码中分离
//将配置数据抽离出来

var config = {
    MSG_INVALID_VALUE: "invalid value",
    URL_INVALID: "errors/invalid.php",
    CSS_SELECTED: "selected"
};

function validate(value){
    if (!value){
        alert(config.MSG_INVALID_VALUE);
        location.href = config.URL_INVALID;
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
参考
编写可维护的JavaScript

← 深拷贝 vs 浅拷贝
聊一聊typeof instanceof 实现原理. →
一般面向对象包含：继承，封装，多态，抽象

对象形式的继承
浅拷贝
var Person = {
    name: 'allin',
    age: 18,
    address: {
        home: 'home',
        office: 'office',
    }
    sclools: ['x','z'],
};

var programer = {
    language: 'js',
};

function extend(p, c){
    var c = c || {};
    for( var prop in p){
        c[prop] = p[prop];
    }
}
extend(Person, programer);
programer.name;  // allin
programer.address.home;  // home
programer.address.home = 'house';  //house
Person.address.home;  // house

@前端进阶之旅: 代码已经复制到剪贴板
从上面的结果看出，浅拷贝的缺陷在于修改了子对象中引用类型的值，会影响到父对象中的值，因为在浅拷贝中对引用类型的拷贝只是拷贝了地址，指向了内存中同一个副本
深拷贝
function extendDeeply(p, c){
    var c = c || {};
    for (var prop in p){
        if(typeof p[prop] === "object"){
            c[prop] = (p[prop].constructor === Array)?[]:{};
            extendDeeply(p[prop], c[prop]);
        }else{
            c[prop] = p[prop];
        }
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
利用递归进行深拷贝，这样子对象的修改就不会影响到父对象
extendDeeply(Person, programer);
programer.address.home = 'allin';
Person.address.home; // home

@前端进阶之旅: 代码已经复制到剪贴板
利用call和apply继承
function Parent(){
    this.name = "abc";
    this.address = {home: "home"};
}
function Child(){
    Parent.call(this);
    this.language = "js"; 
}

@前端进阶之旅: 代码已经复制到剪贴板
ES5中的Object.create()
var p = { name : 'allin'};
var obj = Object.create(o);
obj.name; // allin

@前端进阶之旅: 代码已经复制到剪贴板
Object.create()作为new操作符的替代方案是ES5之后才出来的。我们也可以自己模拟该方法：
//模拟Object.create()方法
function myCreate(o){
    function F(){};
    F.prototype = o;
    o = new F();
    return o;
}
var p = { name : 'allin'};
var obj = myCreate(o);
obj.name; // allin

@前端进阶之旅: 代码已经复制到剪贴板
目前，各大浏览器的最新版本（包括IE9）都部署了这个方法。如果遇到老式浏览器，可以用下面的代码自行部署
　if (!Object.create) {
　　　　Object.create = function (o) {
　　　　　　 function F() {}
　　　　　　F.prototype = o;
　　　　　　return new F();
　　　　};
　　}

@前端进阶之旅: 代码已经复制到剪贴板
类的继承
Object.create()
function Person(name, age){}
Person.prototype.headCount = 1;
Person.prototype.eat = function(){
    console.log('eating...');
}
function Programmer(name, age, title){}

Programmer.prototype = Object.create(Person.prototype); //建立继承关系
Programmer.prototype.constructor = Programmer;  // 修改constructor的指向

@前端进阶之旅: 代码已经复制到剪贴板
调用父类方法
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.headCount = 1;
Person.prototype.eat = function(){
    console.log('eating...');
}

function Programmer(name, age, title){
    Person.apply(this, arguments); // 调用父类的构造器
}


Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.language = "js";
Programmer.prototype.work = function(){
    console.log('i am working code in '+ this.language);
    Person.prototype.eat.apply(this, arguments); // 调用父类上的方法
}

@前端进阶之旅: 代码已经复制到剪贴板
封装









← OOP之类与对象
Object.defineProperty详解 →
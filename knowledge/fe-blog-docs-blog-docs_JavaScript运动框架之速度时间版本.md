一、JavaScript运动框架之速度版
1.1 运动框架的实现思路

运动，其实就是在一段时间内改变 left 、 right 、 width 、 height 、 opactiy 的值，到达目的地之后停止

位移 top,left

折叠 width,height

淡入淡出 opacity

时间有关系

setInterval
setTimeout

用javascript直接获取行间样式很容易，但如果要获取非行间样式那我们只能借助函数了。我这里编写了一个名为getStyle的函数，专门处理取非行间的样式

function getStyle(obj,attr){
	return getComputedStyle(obj)[attr]?getComputedStyle(obj)[attr]:obj.currentStyle[attr];
}

@前端进阶之旅: 代码已经复制到剪贴板
1.2 一些案例演示
1.2.1 运动之速
<div id="box"></div>

@前端进阶之旅: 代码已经复制到剪贴板
#box {
	width: 100px;
	height: 100px;
	background: red;
	 position: relative;
	left: 0;
}

@前端进阶之旅: 代码已经复制到剪贴板
var box = document.getElementById("box");
var speed = 0; //步长
var target = 600;
var timer = null;
timer = setInterval(function(){
	var curr = parseInt(getStyle(box,"left")); //去除getStyle(box,"left")的单位
	if(curr == target){
		clearInterval(timer);
		speed = 0;
		alert("运动结束");
	}else{
		speed +=10;
		box.style.left = speed + "px";
	}
	

},1000/30);

//监控left的值的变化 怎么样拿到left的值
//alert(getComputedStyle(box)["width"]);
//alert(box.currentStyle["left"]);
// currentStyle --IE 
// getComputedStyle -- 非IE

function getStyle(obj,attr){
	return getComputedStyle(obj)[attr]?getComputedStyle(obj)[attr]:obj.currentStyle[attr];
}

@前端进阶之旅: 代码已经复制到剪贴板

在线演示

1.2.2 运动速度之封装1
<div id="ball"></div>

@前端进阶之旅: 代码已经复制到剪贴板
#ball {
	width: 100px;
	height: 100px;
	background: blue;
}

@前端进阶之旅: 代码已经复制到剪贴板
var ball = document.getElementById("ball");

ball.onmouseover = function(){
	//同时变换 用的最多
	//move(this,"width",500,10);
	//move(this,"height",500,10);
	move(ball,{"width":400,"height":300},10);
}
ball.onmouseout = function(){
	//move(this,"width",100,-10);
	//move(this,"height",100,-10);
	move(ball,{"width":100,"height":100},-10);
}
function move(obj,json,speed){
	clearInterval(obj.timer);
	var mark = true;
	obj.timer = setInterval(function(){
		for(var attr in json){
			var curr = parseInt(getStyle(obj,attr));
			var target = json[attr];
			if(curr != target){
				obj.style[attr] = curr+speed+"px";
				mark = false;
		  }
		}
		if(mark){
			clearInterval(obj.timer);
		}
	},1000/30);
}


function getStyle(obj,attr){
	return getComputedStyle(obj)[attr]?getComputedStyle(obj)[attr]:obj.currentStyle[attr];
}

@前端进阶之旅: 代码已经复制到剪贴板
需要注意的地方
当需要两个动画的时候，会执行后面一个，解决办法如下，回调函数
当需要两个以上的时候，需要考虑是否可写一行代码变换多个属性
变换不一致的时候，定时器被提前清除

在线演示

1.2.3 运动速度之封装2–增加opacity
<div id="ball"></div>

@前端进阶之旅: 代码已经复制到剪贴板
#ball {
  position: relative;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  background: blue;
  opacity: 1;
}

@前端进阶之旅: 代码已经复制到剪贴板
var ball = document.getElementById("ball");
ball.onmouseover = function(){
	move(ball,{"width":300,"height":300,"opacity":0.3});
}
//			ball.onmouseout = function(){
//				move(ball,{"width":100,"height":100},-10);
//			}
function move(obj,json){
	clearInterval(obj.timer);
	var mark = true;
	obj.timer = setInterval(function(){
		for(var attr in json){
			var curr = null;
			var target = json[attr];
			var speed = null;
			if(attr == "opacity"){
				curr = getStyle(obj,attr)*100;
				speed = (target*100-curr)*0.15;
			}else {
				curr = parseInt(getStyle(obj,attr));
				speed = (target - curr)*0.15;
			}
			speed = speed>0 ? Math.ceil(speed):Math.floor(speed);
			if(curr != target){
				if(attr == "opacity"){
					obj.style[attr] = (curr+speed)/100;
				}else {
					obj.style[attr] = curr+speed+"px";
				}
				
				mark = false;
		  }
		}
		if(mark){
			clearInterval(obj.timer);
		}
	},1000/30);
}


function getStyle(obj,attr){
	return getComputedStyle(obj)[attr]?getComputedStyle(obj)[attr]:obj.currentStyle[attr];
}

@前端进阶之旅: 代码已经复制到剪贴板

在线演示

需要注意的地方
当需要两个动画的时候，会执行后面一个，解决办法如下，回调函数
当需要两个以上的时候，需要考虑是否可写一行代码变换多个属性
变换不一致的时候，定时器被提前清除
速度speed不要写死
1.3 运动框架之应用
1.3.1 分享按钮
<div id="ball"></div>
<div id="box1">
  <div id="box2">分享到</div>
</div>

@前端进阶之旅: 代码已经复制到剪贴板
var box1 = document.getElementById("box1");
var ball = document.getElementById("ball");

box1.onmouseover = function(){
  move(this,"left",0,10);
}
box1.onmouseout = function(){
  move(this,"left",-100,-10);
}
//问题一：当需要两个动画的时候，会执行后面一个，解决办法如下，回调函数
ball.onmouseover = function(){
  //同时变换 用的最多
  //move(this,"width",500,10);
  //move(this,"height",500,10);
  //列队在执行
  move(ball,"width",500,10,function(){
    move(ball,"height",500,10);
  });
}
ball.onmouseout = function(){
  //move(this,"width",100,-10);
  //move(this,"height",100,-10);
  move(ball,"width",100,-10,function(){
    move(ball,"height",100,-10);
  });
}
var timer = null;
function move(obj,attr,target,speed,callback){
  clearInterval(timer); //obj.timer缓存到各自的obj下
  timer = setInterval(function(){
    var curr = parseInt(getStyle(obj,attr));
    if(curr == target){
      clearInterval(timer);
      callback && callback();
    }else {
      obj.style[attr] = curr+speed+"px";
    }
  },1000/30);
}




function getStyle(obj,attr){
  return getComputedStyle(obj)[attr]?getComputedStyle(obj)[attr]:obj.currentStyle[attr];
}

@前端进阶之旅: 代码已经复制到剪贴板

在线演示

1.3.2运动框架之轮播图应用
焦点轮播–基本版本–在线演示
焦点轮播–淡入淡出–在线演示
焦点轮播–左右–在线演示
焦点轮播–上下–在线演示
1.3.2.1 焦点轮播–左右-无缝-速度版实现
<div id="box">
	<ul id="imgBox">
		<li>![](https://s.poetries.top/uploads/2022/05/450639ac7be15216.png)</li>
		<li>![](https://s.poetries.top/uploads/2022/05/7a98ed3560aa2c1d.png)</li>
		<li>![](https://s.poetries.top/uploads/2022/05/385f373383a0ae34.png)</li>
		<li>![](https://s.poetries.top/uploads/2022/05/80337854977abc01.png)</li>
		<li>![](https://s.poetries.top/uploads/2022/05/450639ac7be15216.png)</li>
	</ul>
	<ol id="btn">
		<li class="active">1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
	</ol>
</div>
<script src="http://7xq6al.com1.z0.glb.clouddn.com/Animate.min.js"></script>
<script type="text/javascript">
    var box = document.querySelector("#box");
	var imgUl = document.querySelector("#imgBox");
	var btns = document.querySelector("#btn").querySelectorAll("li");
	var len = btns.length;
	var lenImg = imgUl.querySelectorAll("li").length;
	var index = 0; //控制img的索引
	var cindex = 0;//控制按钮的索引
	var timer = null;
	
	for (var i=0;i<len;i++) {
			(function(index){
				btns[index].onmouseover = function(){
					for (var j=0;j<len;j++){
						btns[j].className = "";
				}
					cindex = index;//保持索引同步
					animateSpeed(imgUl,{"left":-970*index});
					this.className = "active";
				}
			})(i);
	}
	function autoPlay(){
		index++;
		cindex++;
		cindex %=len;//限制长度
		for (var j=0;j<len;j++){
			btns[j].className = "";
		}
		animateSpeed(imgUl,{"left":-970*index},function(){
			
			if(index == lenImg-1){
				this.style.left = 0;
				index = 0;
			}
		});
		btns[cindex].className = "active";
	}
	timer = setInterval(autoPlay,2000);
	box.onmouseover = function(){
		clearInterval(timer);
	}
	box.onmouseout = function(){
		timer = setInterval(autoPlay,2000);
	}
</script>
		

@前端进阶之旅: 代码已经复制到剪贴板
*{
  padding: 0;
  margin: 0;
}
body{
  font-size: 14px;
  font-family: "微软雅黑";
}
ul,li{
  list-style: none;
}
#box {
  position: relative;
  width: 970px;
  height: 350px;
  margin: 30px auto;
  overflow: hidden;
}
#imgBox {
  width:1000%;/*自动计算百分比*/
  position: absolute;
  left: 0;
}
#imgBox li{
  width: 970px;
  height: 350px;
  float: left;
}

#imgBox li img {
  width: 970px;
  height: 350px;
}
#btn {
  width: 120px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}
#btn li {
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  background: #fff;
  margin: 0 2px;
  float: left;
}
#btn li.active {
  background: #F17A5C;
  color: #fff;
}

@前端进阶之旅: 代码已经复制到剪贴板

//速度版本
(function(win){
    function move(obj,json,callback){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var mark = true;
            for(var attr in json){
                var cur = null;
                if(attr == "opacity"){
                    cur = getStyle(obj,attr)*100;
                }else{
                    //如果没写 默认填充成0
                    cur = parseInt(getStyle(obj,attr))||0;
                }
                var target = json[attr];
                var speed = (target - cur)*0.2;
                speed = speed>0?Math.ceil(speed):Math.floor(speed);
                if(cur != target){
                    if(attr == "opacity"){
                        //IE opacity兼容问题
                        obj.style.filter = "alpha(opacity="+(cur+speed)+")";
                        obj.style[attr] = (cur + speed)/100;
                    }else{
                        obj.style[attr] = cur + speed + "px";
                    }
                    mark = false;

                };
            }
            if(mark){
                clearInterval(obj.timer);
                callback && callback.call(obj);
            }
        },1000/30);
    }
    win.animateSpeed = move;
})(window);

 	
function getStyle(obj,attr){
	return getComputedStyle(obj)[attr]?getComputedStyle(obj)[attr]:obj.currentStyle[attr];
}

function getId(id){
	return document.getElementById(id);
}

@前端进阶之旅: 代码已经复制到剪贴板






← JavaScript词法分析和作用域闭包
JavaScript运行机制Event Loop →
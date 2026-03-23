转义特殊字符为html实体
HtmlEncode: function(str){
	return str.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>').replace(/'/g, ''');
},

@前端进阶之旅: 代码已经复制到剪贴板
验证是否为有效的手机电话号码
IsMobile: function(str){
	var rp = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
	return rp.test(str);
},

@前端进阶之旅: 代码已经复制到剪贴板
验证是否为有效的座机电话号码
IsTel: function(str){
	var rp = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
	return rp.test(str);
},

@前端进阶之旅: 代码已经复制到剪贴板
判断是那种类型的浏览器
WhichBrowser: function(){
	var userAgent = navigator.userAgent;

	var isOpera = userAgent.indexOf("Opera") > -1;
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
	var isFF = userAgent.indexOf("Firefox") > -1;
	var isCH = userAgent.indexOf("Chrome") > -1;
	var isSafari = userAgent.indexOf("Safari") > -1;

	if (isIE){
		var IE5 = IE55 = IE6 = IE7 = IE8 = false;
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		IE55 = fIEVersion == 5.5;
		IE6 = fIEVersion == 6.0;
		IE7 = fIEVersion == 7.0;
		IE8 = fIEVersion == 8.0;
		if (IE55) {
			return "IE55";
		}
		if (IE6) {
			return "IE6";
		}
		if (IE7) {
			return "IE7";
		}
		if (IE8) {
			return "IE8";
		}
	}

	if (isFF) {
		return "Firefox";
	}
	if (isCH) {
		return "Chrome";
	}
	if (isOpera) {
		return "Opera";
	}
	if (isSafari) {
		return "Safari";
	}
},

@前端进阶之旅: 代码已经复制到剪贴板
获取客户端浏览器cookie
GetCookie: function(c_name){
	if(document.cookie.length>0){
		c_start = document.cookie.indexOf(c_name + '=');
		if(c_start != -1){
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(';',c_start);
			if (c_end==-1) c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end));
		}
	}
	return '';
},

@前端进阶之旅: 代码已经复制到剪贴板
设置客户端浏览器cookie
SetCookie: function(c_name, value, expiredays){
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
},
};

@前端进阶之旅: 代码已经复制到剪贴板
字符串长度截取
function cutstr(str, len) {
    var temp,
        icount = 0,
        patrn = /[^\x00-\xff]/，
        strre = "";
    for (var i = 0; i < str.length; i++) {
        if (icount < len - 1) {
            temp = str.substr(i, 1);
                if (patrn.exec(temp) == null) {
                   icount = icount + 1
            } else {
                icount = icount + 2
            }
            strre += temp
            } else {
            break;
        }
    }
    return strre + "..."
}

@前端进阶之旅: 代码已经复制到剪贴板
替换全部
String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2)
}

@前端进阶之旅: 代码已经复制到剪贴板
清除空格
String.prototype.trim = function() {
    var reExtraSpace = /^\s*(.*?)\s+$/;
    return this.replace(reExtraSpace, "$1")
}

@前端进阶之旅: 代码已经复制到剪贴板
清除左空格/右空格
function ltrim(s){ return s.replace( /^(\s*|　*)/, ""); } 
function rtrim(s){ return s.replace( /(\s*|　*)$/, ""); }

@前端进阶之旅: 代码已经复制到剪贴板
判断是否以某个字符串开头
String.prototype.startWith = function (s) {
    return this.indexOf(s) == 0
}

@前端进阶之旅: 代码已经复制到剪贴板
判断是否以某个字符串结束
String.prototype.endWith = function (s) {
    var d = this.length - s.length;
    return (d >= 0 && this.lastIndexOf(s) == d)
}

@前端进阶之旅: 代码已经复制到剪贴板
转义html标签
function HtmlEncode(text) {
    return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>')
}

@前端进阶之旅: 代码已经复制到剪贴板
时间日期格式转换
Date.prototype.Format = function(formatStr) {
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));
    str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
    str = str.replace(/M/g, (this.getMonth() + 1));
    str = str.replace(/w|W/g, Week[this.getDay()]);
    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());
    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());
    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());
    return str
}

@前端进阶之旅: 代码已经复制到剪贴板
判断是否为数字类型
function isDigit(value) {
    var patrn = /^[0-9]*$/;
    if (patrn.exec(value) == null || value == "") {
        return false
    } else {
        return true
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
设置cookie值
function setCookie(name, value, Hours) {
    var d = new Date();
    var offset = 8;
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = utc + (3600000 * offset);
    var exp = new Date(nd);
    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=360doc.com;"
}

@前端进阶之旅: 代码已经复制到剪贴板
获取cookie值
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null
}

@前端进阶之旅: 代码已经复制到剪贴板
加入收藏夹
function AddFavorite(sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle)
    } catch(e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "")
        } catch(e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加")
        }
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
设为首页
function setHomepage() {
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage('http://w3cboy.com')
    } else if (window.sidebar) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
            } catch(e) {
                alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true")
                }
        }
        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage', 'http://w3cboy.com')
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
加载样式文件
function LoadStyle(url) {
    try {
        document.createStyleSheet(url)
    } catch(e) {
        var cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.type = 'text/css';
        cssLink.href = url;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(cssLink)
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
返回脚本内容
function evalscript(s) {
    if(s.indexOf('<script') == -1) return s;
    var p = /<script[^\>]*?>([^\x00]*?)<\/script>/ig;
    var arr = [];
    while(arr = p.exec(s)) {
        var p1 = /<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/i;
        var arr1 = [];
        arr1 = p1.exec(arr[0]);
        if(arr1) {
            appendscript(arr1[1], '', arr1[2], arr1[3]);
        } else {
            p1 = /<script(.*?)>([^\x00]+?)<\/script>/i;
            arr1 = p1.exec(arr[0]);
            appendscript('', arr1[2], arr1[1].indexOf('reload=') != -1);
        }
    }
    return s;
}

@前端进阶之旅: 代码已经复制到剪贴板
清除脚本内容
function stripscript(s) {
    return s.replace(/<script.*?>.*?<\/script>/ig, '');
}

@前端进阶之旅: 代码已经复制到剪贴板
动态加载脚本文件
function appendscript(src, text, reload, charset) {
    var id = hash(src + text);
    if(!reload && in_array(id, evalscripts)) return;
    if(reload && $(id)) {
        $(id).parentNode.removeChild($(id));
    }
 
    evalscripts.push(id);
    var scriptNode = document.createElement("script");
    scriptNode.type = "text/javascript";
    scriptNode.id = id;
    scriptNode.charset = charset ? charset : (BROWSER.firefox ? document.characterSet : document.charset);
    try {
        if(src) {
            scriptNode.src = src;
            scriptNode.onloadDone = false;
            scriptNode.onload = function () {
                scriptNode.onloadDone = true;
                JSLOADED[src] = 1;
             };
             scriptNode.onreadystatechange = function () {
                 if((scriptNode.readyState == 'loaded' || scriptNode.readyState == 'complete') && !scriptNode.onloadDone) {
                    scriptNode.onloadDone = true;
                    JSLOADED[src] = 1;
                }
             };
        } else if(text){
            scriptNode.text = text;
        }
        document.getElementsByTagName('head')[0].appendChild(scriptNode);
    } catch(e) {}
}

@前端进阶之旅: 代码已经复制到剪贴板
返回按ID检索的元素对象
function $(id) {
    return !id ? null : document.getElementById(id);
}

@前端进阶之旅: 代码已经复制到剪贴板
跨浏览器绑定事件
function addEventSamp(obj,evt,fn){ 
    if(!oTarget){return;}
    if (obj.addEventListener) { 
        obj.addEventListener(evt, fn, false); 
    }else if(obj.attachEvent){ 
        obj.attachEvent('on'+evt,fn); 
    }else{
        oTarget["on" + sEvtType] = fn;
    } 
}

@前端进阶之旅: 代码已经复制到剪贴板
跨浏览器删除事件
function delEvt(obj,evt,fn){
    if(!obj){return;}
    if(obj.addEventListener){
        obj.addEventListener(evt,fn,false);
    }else if(oTarget.attachEvent){
        obj.attachEvent("on" + evt,fn);
    }else{
        obj["on" + evt] = fn;
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
为元素添加on方法
Element.prototype.on = Element.prototype.addEventListener;
 
NodeList.prototype.on = function (event, fn) {、
    []['forEach'].call(this, function (el) {
        el.on(event, fn);
    });
    return this;
};

@前端进阶之旅: 代码已经复制到剪贴板
为元素添加trigger方法
Element.prototype.trigger = function (type, data) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(type, true, true);
    event.data = data || {};
    event.eventName = type;
    event.target = this;
    this.dispatchEvent(event);
    return this;
};
 
NodeList.prototype.trigger = function (event) {
    []['forEach'].call(this, function (el) {
        el['trigger'](event);
    });
    return this;
};

@前端进阶之旅: 代码已经复制到剪贴板
检验URL链接是否有效
function getUrlState(URL){ 
    var xmlhttp = new ActiveXObject("microsoft.xmlhttp"); 
    xmlhttp.Open("GET",URL, false);  
    try{  
            xmlhttp.Send(); 
    }catch(e){
    }finally{ 
        var result = xmlhttp.responseText; 
        if(result){
            if(xmlhttp.Status==200){ 
                return(true); 
             }else{ 
                   return(false); 
             } 
         }else{ 
             return(false); 
         } 
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
格式化CSS样式代码
function formatCss(s){//格式化代码
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
    s = s.replace(/;\s*;/g, ";"); //清除连续分号
    s = s.replace(/\,[\s\.\#\d]*{/g, "{");
    s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
    s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
    s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
    return s;
}

@前端进阶之旅: 代码已经复制到剪贴板
压缩CSS样式代码
function compressCss (s) {//压缩代码
    s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
    s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
    s = s.replace(/;\s*;/g, ";"); //清除连续分号
    s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
    return (s == null) ? "" : s[1];
}

@前端进阶之旅: 代码已经复制到剪贴板
获取当前路径
var currentPageUrl = "";
if (typeof this.href === "undefined") {
    currentPageUrl = document.location.toString().toLowerCase();
}else {
    currentPageUrl = this.href.toString().toLowerCase();
}

@前端进阶之旅: 代码已经复制到剪贴板
判断是否移动设备
function isMobile(){
    if (typeof this._isMobile === 'boolean'){
        return this._isMobile;
    }
    var screenWidth = this.getScreenWidth();
    var fixViewPortsExperiment = rendererModel.runningExperiments.FixViewport ||rendererModel.runningExperiments.fixviewport;
    var fixViewPortsExperimentRunning = fixViewPortsExperiment && (fixViewPortsExperiment.toLowerCase() === "new");
    if(!fixViewPortsExperiment){
        if(!this.isAppleMobileDevice()){
            screenWidth = screenWidth/window.devicePixelRatio;
        }
    }
    var isMobileScreenSize = screenWidth < 600;
    var isMobileUserAgent = false;
    this._isMobile = isMobileScreenSize && this.isTouchScreen();
    return this._isMobile;
}

@前端进阶之旅: 代码已经复制到剪贴板
判断是否移动设备访问
function isMobileUserAgent(){
    return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
}

@前端进阶之旅: 代码已经复制到剪贴板
判断是否苹果移动设备访问
function isAppleMobileDevice(){
    return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
}

@前端进阶之旅: 代码已经复制到剪贴板
判断是否安卓移动设备访问
function isAndroidMobileDevice(){
    return (/android/i.test(navigator.userAgent.toLowerCase()));
}

@前端进阶之旅: 代码已经复制到剪贴板
判断是否Touch屏幕
function isTouchScreen(){
    return (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
}

@前端进阶之旅: 代码已经复制到剪贴板
判断是否打开视窗
function isViewportOpen() {
    return !!document.getElementById('wixMobileViewport');
}

@前端进阶之旅: 代码已经复制到剪贴板
获取移动设备初始化大小
function getInitZoom(){
    if(!this._initZoom){
        var screenWidth = Math.min(screen.height, screen.width);
        if(this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()){
            screenWidth = screenWidth/window.devicePixelRatio;
        }
            this._initZoom = screenWidth /document.body.offsetWidth;
        }
    return this._initZoom;
}

@前端进阶之旅: 代码已经复制到剪贴板
获取移动设备最大化大小
function getZoom(){
    var screenWidth = (Math.abs(window.orientation) === 90) ? Math.max(screen.height, screen.width) : Math.min(screen.height, screen.width);
    if(this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()){
        screenWidth = screenWidth/window.devicePixelRatio;
    }
    var FixViewPortsExperiment = rendererModel.runningExperiments.FixViewport || rendererModel.runningExperiments.fixviewport;
    var FixViewPortsExperimentRunning = FixViewPortsExperiment && (FixViewPortsExperiment === "New" || FixViewPortsExperiment === "new");
    if(FixViewPortsExperimentRunning){
        return screenWidth / window.innerWidth;
    }else{
        return screenWidth / document.body.offsetWidth;
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
获取移动设备屏幕宽度
function getScreenWidth(){
    var smallerSide = Math.min(screen.width, screen.height);
    var fixViewPortsExperiment = rendererModel.runningExperiments.FixViewport || rendererModel.runningExperiments.fixviewport;
    var fixViewPortsExperimentRunning = fixViewPortsExperiment && (fixViewPortsExperiment.toLowerCase() === "new");
    if(fixViewPortsExperiment){
        if(this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()){
            smallerSide = smallerSide/window.devicePixelRatio;
        }
    }
    return smallerSide;
}

@前端进阶之旅: 代码已经复制到剪贴板
完美判断是否为网址
function IsURL(strUrl) {
    var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i
    if (regular.test(strUrl)) {
        return true;
    }else {
        return false;
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
获取页面高度
function getPageHeight(){
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
                    ? a
                    : g.documentElement;
    return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}

@前端进阶之旅: 代码已经复制到剪贴板
获取页面scrollLeft
function getPageScrollLeft(){
    var a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
}

@前端进阶之旅: 代码已经复制到剪贴板
获取页面可视宽度
function getPageViewWidth(){
    var d = document, a = d.compatMode == "BackCompat"
                    ? d.body
                    : d.documentElement;
    return a.clientWidth;
}

@前端进阶之旅: 代码已经复制到剪贴板
获取页面宽度
function getPageWidth(){
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
                    ? a
                    : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}

@前端进阶之旅: 代码已经复制到剪贴板
获取页面scrollTop
function getPageScrollTop(){
    var a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
}

@前端进阶之旅: 代码已经复制到剪贴板
获取页面可视高度
function getPageViewHeight() {
    var d = document, a = d.compatMode == "BackCompat"
                    ? d.body
                    : d.documentElement;
    return a.clientHeight;
}

@前端进阶之旅: 代码已经复制到剪贴板
去掉url前缀
function removeUrlPrefix(a){
    a=a.replace(/：/g,":").replace(/．/g,".").replace(/／/g,"/");
    while(trim(a).toLowerCase().indexOf("http://")==0){
        a=trim(a.replace(/http:\/\//i,""));
    }
    return a;
}

@前端进阶之旅: 代码已经复制到剪贴板
随机数时间戳
function uniqueId(){
    var a=Math.random,b=parseInt;
    return Number(new Date()).toString()+b(10*a())+b(10*a())+b(10*a());
}

@前端进阶之旅: 代码已经复制到剪贴板




← JavaScript常用API合集
JavaScript数组、字符串、对象常用方法 →
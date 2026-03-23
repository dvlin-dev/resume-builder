100个JavaScript代码片段
实现字符串长度截取
function cutstr(str, len) {
        var temp;
        var icount = 0;
        var patrn = /[^\x00-\xff]/;
        var strre = "";
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
                break
            }
        }
        return strre + "..."
    }

@前端进阶之旅: 代码已经复制到剪贴板
获取域名主机
function getHost(url) {
        var host = "null";
        if(typeof url == "undefined"|| null == url) {
            url = window.location.href;
        }
        var regex = /^\w+\:\/\/([^\/]*).*/;
        var match = url.match(regex);
        if(typeof match != "undefined" && null != match) {
            host = match[1];
        }
        return host;
}

@前端进阶之旅: 代码已经复制到剪贴板
清除空格
 String.prototype.trim = function() {
         var reExtraSpace = /^\s*(.*?)\s+$/;
         return this.replace(reExtraSpace, "$1")
     }

@前端进阶之旅: 代码已经复制到剪贴板
替换全部
    String.prototype.replaceAll = function(s1, s2) {
        return this.replace(new RegExp(s1, "gm"), s2)
    }

@前端进阶之旅: 代码已经复制到剪贴板
转义html标签
 function HtmlEncode(text) {
         return text.replace(/&/g, '&amp').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
     }

@前端进阶之旅: 代码已经复制到剪贴板
生JavaScript还原html标签
 function HtmlDecode(text) {
         return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
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




























































































← JavaScript事件机制
JavaScript作用域分析总结 →
一、基本使用
1.1 API 介绍

复制、剪切、粘贴事件

copy 发生复制操作时触发;
cut 发生剪切操作时触发;
paste 发生粘贴操作时触发

每个事件都有一个 before 事件对应：beforecopy、beforecut、beforepaste。这几个 before 一般不怎么用，所以我们把注意力放在另外三个事件就可以了

触发条件

鼠标右键菜单的复制、粘贴、剪切
使用了相应的键盘组合键，比如:command+c、command+v

使用姿势

以 copy 为例

document.body.oncopy = e => {
  // 监听全局复制 做点什么
};
// 还有这种写法：
document.addEventListener('copy', e => {
  // 监听全局复制 做点什么
});

@前端进阶之旅: 代码已经复制到剪贴板

上面是在document.body上全局监听的，然而很多人不知道的是，我们还可以为某些 dom 单独添加剪切板事件

// html结构
<div id="test1"></div>
<div id="test2"></div>

<script>
    // 写法一样：
    let test1 = document.querySelector('#test1');
    test1.oncopy = e => {
        // 监听test1发生的复制事件 做点什么
        // test1发生的复制事件会触发回调，其他地方不会触发回调
    }
</script>

@前端进阶之旅: 代码已经复制到剪贴板

其他事件也是一样的

1.2 clipboardData

clipboardData 对象:用于访问以及修改剪贴板中的数据

不同浏览器，所属的对象不同：在 IE 中这个对象是window对象的属性，在Chrome、Safari和Firefox中，这个对象是相应的event对象的属性。所以我们在使用的时候，需要做一下如下兼容

document.body.oncopy = e => {
  let clipboardData = e.clipboardData || window.clipboardData;
  // 获取clipboardData对象 + do something
};

@前端进阶之旅: 代码已经复制到剪贴板

对象方法

对象有三个方法: getData()、setData()、clearData()

getData() 访问剪切板中的数据

getData()接受一个text参数，即要取得的数据的格式

在复制、剪切、粘贴触发的事件的数据

实际上在 chorme 上测试只有paste粘贴的时候才能用getData()访问到数据，用法如下

// 要粘贴的数据：

document.body.onpaste = e => {
  let clipboardData = e.clipboardData || window.clipboardData; // 兼容处理
  console.log('要粘贴的数据', clipboardData.getData('text'));
};

@前端进阶之旅: 代码已经复制到剪贴板

被复制/剪切的数据：

在复制和剪切中的数据，需要通过window.getSelection(0).toString()来访问:

document.body.oncopy = e => {
  console.log('被复制的数据:', window.getSelection(0).toString());
};

@前端进阶之旅: 代码已经复制到剪贴板

setData(): 修改剪切板中的数据

第一个参数也是text，第二个参数是要放在剪切板中的文本

clearData()

二、应用
2.1 复制大段文本

实现类知乎/掘金复制大段文本添加版权信息

实现很简单：取消默认复制之后，主要是在被复制的内容后面添加信息，然后根据 clipboardData 的 setData()方法将信息写入剪贴板

// 掘金这里不是全局监听，应该只是监听文章的dom范围内。
document.body.oncopy = event => {
  event.preventDefault(); // 取消默认的复制事件
  let textFont,
    copyFont = window.getSelection(0).toString(); // 被复制的文字 等下插入
  // 防知乎掘金 复制一两个字则不添加版权信息 超过一定长度的文字 就添加版权信息
  if (copyFont.length > 10) {
    textFont =
      copyFont +
      '\n' +
      '作者：OBKoro1\n' +
      '链接：https://juejin.im/user/58714f0e325b123db4a2eb95372/posts\n' +
      '来源：掘金\n' +
      '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。';
  } else {
    textFont = copyFont; // 没超过十个字 则采用被复制的内容。
  }
  if (event.clipboardData) {
    return event.clipboardData.setData('text', textFont); // 将信息写入粘贴板
  } else {
    // 兼容IE
    return window.clipboardData.setData('text', textFont);
  }
};

@前端进阶之旅: 代码已经复制到剪贴板

然后 command+c、command+v，输出:

你复制的内容
作者：OBKoro1
链接：https://juejin.im/user/58714f0eb123db4a2eb95372/posts
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

@前端进阶之旅: 代码已经复制到剪贴板
2.2 防复制功能
禁止复制+剪切
禁止右键，右键某些选项:全选，复制，粘贴等。
禁用文字选择，能选择却不能复制，体验很差。
user-select 用 css 禁止选择文本
// 禁止右键菜单
document.body.oncontextmenu = e => {
    console.log(e, '右键');
    return false;
    // e.preventDefault();
};
// 禁止文字选择。
document.body.onselectstart = e => {
    console.log(e, '文字选择');
    return false;
    // e.preventDefault();
};
// 禁止复制
document.body.oncopy = e => {
    console.log(e, 'copy');
    return false;
    // e.preventDefault();
}
// 禁止剪切
document.body.oncut = e => {
    console.log(e, 'cut');
    return false;
    // e.preventDefault();
};
// 禁止粘贴
document.body.onpaste = e => {
    console.log(e, 'paste');
    return false;
    // e.preventDefault();
};

@前端进阶之旅: 代码已经复制到剪贴板
/** css 禁止文本选择 这样不会触发js**/
body {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

@前端进阶之旅: 代码已经复制到剪贴板
使用e.preventDefault()也可以禁用，但建议使用return false这样就不用去访问e和e的方法了。
示例中document.body全局都禁用了，也可以对 dom(某些区域)进行禁用

破解防复制

上面的防复制方法通过js+css实现的，所以思路就是：禁用js+取消user-select样式。

Chrome浏览器的话：打开浏览器控制台，按F1进入Setting，勾选Disable JavaScript(禁止 js)。

此时如果还不能复制的话，就要去找user-select样式,取消这个样式就可以了

2.3 点击复制功能

不能使用 clipboardData

在 IE 中可以用window.clipboardData.setData('text','内容')实现
上文提到过，在 IE 中clipboardData是window的属性
而其他浏览器则是相应的event对象的属性，这实际上是一种安全措施，防止未经授权的访问,为了兼容其他浏览器，所以我们不能通过clipboardData来实现这种操作

具体做法

创建一个隐藏的input框
点击的时候，将要复制的内容放进input框中
选择文本内容input.select()。这里只能用input或者textarea才能选择文本
document.execCommand("copy")，执行浏览器的复制命令
function copyText() {
  var text = document.getElementById('text').innerText; // 获取要复制的内容也可以传进来
  var input = document.getElementById('input'); // 获取隐藏input的dom
  input.value = text; // 修改文本框的内容
  input.select(); // 选中文本
  document.execCommand('copy'); // 执行浏览器复制命令
  alert('复制成功');
}

@前端进阶之旅: 代码已经复制到剪贴板
2.4 第三方库clipboard

https://github.com/zenorocha/clipboard.js

← JavaScript防抖节流原理
Javascript常用方法函数收集 →
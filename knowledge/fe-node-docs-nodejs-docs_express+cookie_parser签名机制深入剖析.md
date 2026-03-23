写在前面

本文先简单介绍session跟cookie的区别与联系，接着深入剖析express-session中间件的实现。关于express-session的基础使用，可参见笔者前面的文章。

session vs cookie vs 登录态

HTTP是无状态的，也就是说，同个用户，多次访问同一个网站，网站无法区分前后访问的是否同个用户。cookie跟session的出现很好的解决了这个问题。

抛开两者的学术定义，从应用的角度来讲，session跟cookie就是一对好基友，可以用来实现用户的身份识别。

session是保存在服务端的小段数据，cookie是保存在用户本地的小段数据，它们一般是一一对应的。

上面的解释比较抽象，先举两个常见的例子：用户登录 和 登录态检验。

用户登录
张三：在网站输入用户名(zhang)、密码，点击“登录”。
浏览器：向服务端发送登录请求。
服务端：收到登录请求，对 用户名、密码 进行校验，且校验通过。
服务端：把张三的用户名 zhang 写到本地文件 session.txt。（session）
服务端：请求成功返回，附带 Set-Cookie:uid=zhang 首部。
浏览器：收到服务端返回，检测到 Set-Cookie 首部，将cookie(uid=zhang)保存到本地。(cookie)
登录态检验

张三再次访问网站：

张三：访问网站的个人主页。
浏览器：向服务端发送访问请求（带上之前的cookie）。
服务端：解析cookie，找到uid=zhang。
服务端：查找本地session.txt，发现uid=zhang这条记录，判断用户已登录。
服务端：返回个人主页。
express-session实现原理

关键配置如下。其中，saveUninitialized若为true，对状态为“未初始化”的会话，服务端会自动为该会话创建session id，并保存到本地。

对于需要实现登录功能的站点，需要将saveUninitialized设置为false。

app.use(session({
    name: identityKey,
    secret: 'chyingp',  // 用来对session id相关的cookie进行签名
    store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
    resave: false,  // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 10 * 1000  // 有效期，单位是毫秒
    }
}));

@前端进阶之旅: 代码已经复制到剪贴板

从请求的生命周期来看下express-session是怎么发挥作用的。

首先，是一个“未初始化”的请求（比如第一次访问网站的用户）

app.use(session(/* 配置项 */));
app.use('/', function(req, res, next){
    res.end('ok');
});

@前端进阶之旅: 代码已经复制到剪贴板
关注点
防止cookie篡改
登录态超时机制
登录态主动失效机制

← crypto模块之理论篇
express+session实现简易身份认证 →
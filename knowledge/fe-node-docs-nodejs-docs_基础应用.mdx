路由

在 BS 架构中，路由的概念都是一样的，可理解为根据客户端请求的 URL 映射到不同的方法实现，更多的一般都是针对 URL 中的路径，或者是参数，又或者是锚点这些信息进行映射。

场景
注册一个账户 --> [post] --> 
http://localhost:88/register
注册成功的情况下跳转到登录界面进行登录 --> [post] --> 
http://localhost:88/login
登录成功进行获取学生信息 --> [get] --> 
http://localhost:88/students
同时可以获取订单信息 --> [get] --> 
http://localhost:88/orders
如何访问不存在的路由则抛出错误信息。
const http = require('http')
const url = require('url')
const qs = require('querystring');
const util = require('util');

http.createServer((request, response) => {
    let urlObj = url.parse(request.url, true);
    let pathname = urlObj.pathname;
    let method = request.method.toUpperCase();
    let params = urlObj.query;
    if(method == 'POST'){
        let postData = '';
        request.on('data', (_data) => {
            postData += '_data';
        })
        request.on('end', () => {
            postData = qs.parse(postData);
            let result = {};
            switch(pathname){
                case '/login':
                    //连接数据库，实现登陆逻辑
                    result = {status: true};
                    break;
                case '/register':
                    //连接数据库，实现注册逻辑
                    result = {status: true};
                    break;
                default :
                    result = {status: false, message: '没有对应的请求'};
                    break;                  
            }
            response.end(util.inspect(result))
        })
    } else {
        let result = {};
        switch(pathname){
            case '/students':
                //连接数据库，获取学生信息
                result = {status: true, data: [], params};
                break;
            case '/orders':
                //连接数据库，获取订单信息
                result = {status: true, data: [], params};
                break;
            default :
                result = {status: false, message: '没有对应的请求', params};
                break;
        }
        response.end(util.inspect(result))
    }
}).listen(88)

@前端进阶之旅: 代码已经复制到剪贴板
Demo
const http = require('http')
const url = require('url')
const qs = require('querystring');
const util = require('util');

http.createServer((request, response) => {
    let urlObj = url.parse(request.url, true);
    let pathname = urlObj.pathname;
    let method = request.method.toUpperCase();
    let params = urlObj.query;
    if(method == 'POST'){
        let postData = '';
        request.on('data', (_data) => {
            postData += '_data';
        })
        request.on('end', () => {
            postData = qs.parse(postData);
            let result = {};
            switch(pathname){
                case '/login':
                    //连接数据库，实现登陆逻辑
                    result = {status: true};
                    break;
                case '/register':
                    //连接数据库，实现注册逻辑
                    result = {status: true};
                    break;
                default :
                    result = {status: false, message: '没有对应的请求'};
                    break;                  
            }
            response.end(util.inspect(result))
        })
    } else {
        let result = {};
        switch(pathname){
            case '/students':
                //连接数据库，获取学生信息
                result = {status: true, data: [], params};
                break;
            case '/orders':
                //连接数据库，获取订单信息
                result = {status: true, data: [], params};
                break;
            default :
                result = {status: false, message: '没有对应的请求', params};
                break;
        }
        response.end(util.inspect(result))
    }
}).listen(88)

@前端进阶之旅: 代码已经复制到剪贴板
request

一个第三方的模块，可用于发起 http 或 https 请求，可理解成服务端的 ajax 请求。可用于代简单的服务器代理，用法和 ajax 类似。

在使用前需要先安装 npm install request --save

GET 请求
request.get('https://cnodejs.org/api/v1/topics?page=1&limit=10', (error, response, body) => {
    console.log(body)
})
//or
request('https://cnodejs.org/api/v1/topics?page=1&limit=10', (error, response, body) => {
    console.log(body)
})

@前端进阶之旅: 代码已经复制到剪贴板
多参数设置
exports.get = function(url, options) {
    options = options || {};
    var httpOptions = {
        url: url,
        method: 'get',
        timeout: options.timeout || 10000,
        headers: options.headers || default_post_headers,
        proxy: options.proxy || '',
        agentOptions: agentOptions,
        params: options.params || {}
    }
    if(options.userAgent){
        httpOptions.headers = {
            'User-Agent': userAgents[options.userAgent],
        }
    }

    try{
        request.get(httpOptions, function(err, res, body) {
            if (err) {
                options.callback({status: false, error: err})
            } else {
                options.callback({status: res.statusCode == 200, error: res, data: body})
            }
        }).on('error', logger.error);
    } catch(err){
        console.log('http error');
    }
}

@前端进阶之旅: 代码已经复制到剪贴板
POST 请求

request支持application/x-www-form-urlencoded和multipart/form-data实现表单上传。

application/x-www-form-urlencoded (URL-Encoded Forms)
request.post('http://service.com/upload', {form:{key:'value'}})
// or
request.post('http://service.com/upload').form({key:'value'})
// or
request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ })

@前端进阶之旅: 代码已经复制到剪贴板
multipart/form-data (Multipart Form Uploads)
var formData = {
  // Pass a simple key-value pair
  my_field: 'my_value',
  // Pass data via Buffers
  my_buffer: new Buffer([1, 2, 3]),
  // Pass data via Streams
  my_file: fs.createReadStream(__dirname + '/unicycle.jpg'),
  // Pass multiple values /w an Array
  attachments: [
    fs.createReadStream(__dirname + '/attachment1.jpg'),
    fs.createReadStream(__dirname + '/attachment2.jpg')
  ],
  // Pass optional meta-data with an 'options' object with style: {value: DATA, options: OPTIONS}
  // Use case: for some types of streams, you'll need to provide "file"-related information manually.
  // See the `form-data` README for more information about options: https://github.com/form-data/form-data
  custom_file: {
    value:  fs.createReadStream('/dev/urandom'),
    options: {
      filename: 'topsecret.jpg',
      contentType: 'image/jpeg'
    }
  }
};
request.post({url:'http://service.com/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});

@前端进阶之旅: 代码已经复制到剪贴板
常用多参数设置
exports.form_post = function(url, postdata, options) {
    // console.log(`${moment().format()} HttpFormPost: ${url}`)
    return new Promise((resolve, reject) => {
        options = options || {};
        var httpOptions = {
            url: url,
            form: postdata,
            method: 'post',
            timeout: options.timeout || 3000,
            headers: options.headers || default_post_headers,
            proxy: options.proxy || '',
            agentOptions: agentOptions
        };
        request(httpOptions, function(err, res, body) {
            if (err) {
                reject(err);
            } else {
                if (res.statusCode == 200) {
                    resolve(body);
                } else {
                    reject(res.statusCode);
                }
            }
        }).on('error', logger.error);
    });
};

@前端进阶之旅: 代码已经复制到剪贴板













← node部署
1.0 本地路径处理 path →
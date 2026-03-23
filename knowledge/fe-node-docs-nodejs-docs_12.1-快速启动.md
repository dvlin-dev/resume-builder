项目demo
快速启动
demo地址

https://github.com/poetries/daily-code-practice/tree/master/node/koa/koa2-demo/project/

环境准备
初始化数据库
安装MySQL5.6以上版本
创建数据库koa_demo
create database koa_demo;

@前端进阶之旅: 代码已经复制到剪贴板
配置项目config.js

https://github.com/poetries/daily-code-practice/tree/master/node/koa/koa2-demo/project/

const config = {
  // 启动端口
  port: 3001,

  // 数据库配置
  database: {
    DATABASE: 'koa_demo',
    USERNAME: 'root',
    PASSWORD: 'abc123',
    PORT: '3306',
    HOST: 'localhost'
  }
}

module.exports = config

@前端进阶之旅: 代码已经复制到剪贴板
启动脚本
# 安装淘宝镜像cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 安装依赖
cnpm install

# 数据建库初始化
npm run init_sql

# 编译react.js源码
npm run start_static

# 启动服务
npm run start_server 

@前端进阶之旅: 代码已经复制到剪贴板
访问项目demo

http://localhost:3001/admin

← 11.1 开发debug
12.2 框架设计 →
一、Taro 的安装与使用
1.1 安装
$ npm install -g @tarojs/cli

@前端进阶之旅: 代码已经复制到剪贴板
taro -V

@前端进阶之旅: 代码已经复制到剪贴板
1.2 使用

使用命令创建模板项目

$ taro init myApp

@前端进阶之旅: 代码已经复制到剪贴板

1.2.1 微信小程序

选择微信小程序模式，需要自行下载并打开微信开发者工具，然后选择项目根目录进行预览

微信小程序编译预览及打包

# npm script
$ npm run dev:weapp
$ npm run build:weapp

@前端进阶之旅: 代码已经复制到剪贴板
1.2.2 百度小程序

选择百度小程序模式，需要自行下载并打开
百度开发者工具，然后在项目编译完后选择项目根目录下 dist 目录进行预览

百度小程序编译预览及打包

# npm script
$ npm run dev:swan
$ npm run build:swan

@前端进阶之旅: 代码已经复制到剪贴板
1.2.3 支付宝小程序

选择支付宝小程序模式，需要自行下载并打开
支付宝小程序开发者工具，然后在项目编译完后选择项目根目录下 dist 目录进行预览

支付宝小程序编译预览及打包：

# npm script
$ npm run dev:alipay
$ npm run build:alipay

@前端进阶之旅: 代码已经复制到剪贴板
1.2.4 H5

H5 编译预览及打包：

# npm script
$ npm run dev:h5

# 仅限全局安装
$ taro build --type h5 --watch

@前端进阶之旅: 代码已经复制到剪贴板
1.2.5 React Native

React Native 端运行需执行如下命令，React Native 端相关的运行说明请参见 React Native 
教程

# npm script
$ npm run dev:rn

@前端进阶之旅: 代码已经复制到剪贴板
1.3 更新 Taro

Taro 提供了更新命令来更新 CLI 工具自身和项目中 Taro 相关的依赖。

更新 taro-cli 工具

# taro
$ taro update self
# npm

@前端进阶之旅: 代码已经复制到剪贴板

更新项目中 Taro 相关的依赖，这个需要在你的项目下执行

$ taro update project

@前端进阶之旅: 代码已经复制到剪贴板
二、Taro 开发说明与注意事项























































← React全部api解读
Webpack4打包机制原理解析 →
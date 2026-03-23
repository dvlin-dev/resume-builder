一、环境搭建
$ npm install dva-cli -g

# 创建应用
$ dva new dva-quickstart

# 启动
$ npm start

@前端进阶之旅: 代码已经复制到剪贴板

react项目的推荐目录结构（如果使用dva脚手架创建，则自动生成如下）

|── /mock/             # 数据mock的接口文件  
|── /src/              # 项目源码目录（我们开发的主要工作区域）   
|   |── /components/   # 项目组件（用于路由组件内引用的可复用组件）   
|   |── /routes/       # 路由组件（页面维度） 
|   |  |── route1.js  
|   |  |── route2.js   # 根据router.js中的映射，在不同的url下，挂载不同的路由组件
|   |  └── route3.js    
|   |── /models/       # 数据模型（可以理解为store，用于存储数据与方法）  
|   |  |── model1.js  
|   |  |── model2.js   # 选择分离为多个model模型，是根据业务实体进行划分
|   |  └── model3.js  
|   |── /services/     # 数据接口（处理前台页面的ajax请求，转发到后台）   
|   |── /utils/        # 工具函数（工具库，存储通用函数与配置参数）     
|   |── router.js       # 路由配置（定义路由与对应的路由组件）  
|   |── index.js       # 入口文件  
|   |── index.less      
|   └── index.html     
|── package.json       # 项目信息  
└── proxy.config.js    # 数据mock配置

@前端进阶之旅: 代码已经复制到剪贴板

使用 antd

npm i babel-plugin-import --save

@前端进阶之旅: 代码已经复制到剪贴板

babel-plugin-import 是用来按需加载 antd 的脚本和样式的

编辑 .webpackrc，使 babel-plugin-import 插件生效
{
+  "extraBabelPlugins": [
+    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
+  ]
}

@前端进阶之旅: 代码已经复制到剪贴板
二、初识Dva
2.1 Dva的特性
dva = React-Router + Redux + Redux-saga

@前端进阶之旅: 代码已经复制到剪贴板
仅有 5 个API，仅有5个主要的api
支持 HMR，支持模块的热更新
支持 SSR (ServerSideRender)，支持服务器端渲染
支持 Mobile/ReactNative，支持移动手机端的代码编写
支持TypeScript
支持路由和 Model 的动态加载
2.2 Dva的五个API

2.2.1 app = dva(Opts)

app = dva(Opts)：创建应用，返回 dva 实例。(注：dva 支持多实例)**

在opts可以配置所有的hooks

const app = dva({
     history,
     initialState,
     onError,
     onAction,
     onStateChange,
     onReducer,
     onEffect,
     onHmr,
     extraReducers,
     extraEnhancers,
});

@前端进阶之旅: 代码已经复制到剪贴板

hooks包含如下配置项

1、 onError((err, dispatch) => {})

effect 执行错误或 subscription 通过done 主动抛错时触发，可用于管理全局出错状态
注意：subscription 并没有加 try...catch，所以有错误时需通过第二个参数 done 主动抛错
app.model({
  subscriptions: {
    setup({ dispatch }, done) {
      done(e)
    },
  },
})

@前端进阶之旅: 代码已经复制到剪贴板

2、 onAction(fn | fn[])

在action被dispatch时触发，用于注册 redux 中间件。支持函数或函数数组格式

例如我们要通过 redux-logger 打印日志
import createLogger from 'redux-logger';
const app = dva({
  onAction: createLogger(opts),
})

@前端进阶之旅: 代码已经复制到剪贴板

3、 onStateChange(fn)

state 改变时触发，可用于同步 state 到 localStorage，服务器端等

4、 onReducer(fn)

封装 reducer 执行，比如借助 redux-undo 实现 redo/undo

import undoable from 'redux-undo';
const app = dva({
  onReducer: reducer => {
    return (state, action) => {
      const undoOpts = {};
      const newState = undoable(reducer, undoOpts)(state, action);
      // 由于 dva 同步了 routing 数据，所以需要把这部分还原
      return { ...newState, routing: newState.present.routing };
    },
  },
})

@前端进阶之旅: 代码已经复制到剪贴板

5、 onEffect(fn)

封装 effect 执行。比如 dva-loading 基于此实现了自动处理 loading 状态

6、 onHmr(fn)

热替换相关，目前用于 babel-plugin-dva-hmr

7、 extraReducers

指定额外的 reducer，比如 redux-form 需要指定额外的 form reducer

import { reducer as formReducer } from 'redux-form'
const app = dva({
  extraReducers: {
    form: formReducer,
  },
})

@前端进阶之旅: 代码已经复制到剪贴板

这里比较常用的是，history的配置，一般默认的是hashHistory，如果要配置 history为 browserHistory，可以这样

import createHistory from 'history/createBrowserHistory';
const app = dva({
  history: createHistory(),
});

@前端进阶之旅: 代码已经复制到剪贴板
initialState`：指定初始数据，优先级高于 `model` 中的 `state`，默认是 `{}`，但是基本上都在`modal`里面设置相应的`state

@前端进阶之旅: 代码已经复制到剪贴板
2.2.2 app.use(Hooks)

app.use(Hooks)：配置 hooks 或者注册插件

这里最常见的就是dva-loading插件的配置

import createLoading from 'dva-loading';
...
app.use(createLoading(opts));

@前端进阶之旅: 代码已经复制到剪贴板

但是一般对于全局的loading我们会根据业务的不同来显示相应不同的loading图标，我们可以根据自己的需要来选择注册相应的插件

2.2.3 app.model(ModelObject)

app.model(ModelObject)：这个是你数据逻辑处理，数据流动的地方

2.2.4 app.unmodel(namespace)

取消 model 注册，清理 reducers,effects 和 subscriptions。subscription 如果没有返回 unlisten 函数，使用 app.unmodel 会给予警告

2.2.5 app.router(Function)

注册路由表，这一操作步骤在dva中也很重要

// 注册路由
app.router(require('./router'))


// 路由文件
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage'
import TodoList from './routes/TodoList'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Route path="/" component={IndexPage} />
        <Route path='/todoList' components={TodoList}/>
    </Router>
  )
}
export default RouterConfig

@前端进阶之旅: 代码已经复制到剪贴板

如果我们想解决组件动态加载问题，我们的路由文件也可以按照下面的写法来写

import { Router, Switch, Route } from 'dva/router'
import dynamic from 'dva/dynamic'

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    component: () => import('./routes/IndexPage'),
  })

  const Users = dynamic({
    app,
    models: () => [import('./models/users')],
    component: () => import('./routes/Users'),
  })

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  )
}

export default RouterConfig

@前端进阶之旅: 代码已经复制到剪贴板

其中dynamic(opts) 中opt包含三个配置项：

app: dva 实例，加载 models 时需要
models: 返回 Promise 数组的函数，Promise返回 dva model`
component：返回 Promise的函数，Promise返回 React Component
2.2.6 app.start

启动应用，即将我们的应用跑起来



































← React router原理
MobX总结 →
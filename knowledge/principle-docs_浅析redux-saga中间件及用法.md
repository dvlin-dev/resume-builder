一、redux-thunk
1.1 redux的副作用处理

redux中的数据流大致是

UI—————>action（plain）—————>reducer——————>state——————>UI

@前端进阶之旅: 代码已经复制到剪贴板

redux是遵循函数式编程的规则，上述的数据流中，action是一个原始js对象（plain object）且reducer是一个纯函数，对于同步且没有副作用的操作，上述的数据流起到可以管理数据，从而控制视图层更新的目的
如果存在副作用函数，那么我们需要首先处理副作用函数，然后生成原始的js对象。如何处理副作用操作，在redux中选择在发出action，到reducer处理函数之间使用中间件处理副作用

redux增加中间件处理副作用后的数据流大致如下：

UI——>action(side function)—>middleware—>action(plain)—>reducer—>state—>UI

@前端进阶之旅: 代码已经复制到剪贴板

在有副作用的action和原始的action之间增加中间件处理，从图中我们也可以看出，中间件的作用就是：

转换异步操作，生成原始的action，这样，reducer函数就能处理相应的action，从而改变state，更新UI
1.2 redux-thunk源码

在redux中，thunk是redux作者给出的中间件，实现极为简单，10多行代码

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;

@前端进阶之旅: 代码已经复制到剪贴板

这几行代码做的事情也很简单，判别action的类型，如果action是函数，就调用这个函数，调用的步骤为

action(dispatch, getState, extraArgument);

@前端进阶之旅: 代码已经复制到剪贴板

发现实参为dispatch和getState，因此我们在定义action为thunk函数是，一般形参为dispatch和getState

1.3 redux-thunk的缺点
thunk`的缺点也是很明显的，`thunk`仅仅做了执行这个函数，并不在乎函数主体内是什么，也就是说`thunk`使得`redux`可以接受函数作为`action`，但是函数的内部可以多种多样。比如下面是一个获取商品列表的异步操作所对应的`action

@前端进阶之旅: 代码已经复制到剪贴板
export default ()=>(dispatch)=>{
    fetch('/api/goodList',{ //fecth返回的是一个promise
      method: 'get',
      dataType: 'json',
    }).then(function(json){
      var json=JSON.parse(json);
      if(json.msg==200){
        dispatch({type:'init',data:json.data});
      }
    },function(error){
      console.log(error);
    });
};

@前端进阶之旅: 代码已经复制到剪贴板

从这个具有副作用的action中，我们可以看出，函数内部极为复杂。如果需要为每一个异步操作都如此定义一个action，显然action不易维护

action不易维护的原因

action的形式不统一
就是异步操作太为分散，分散在了各个action中
二、redux-saga 简介

redux-saga是一个 redux中间件，它具有如下特性

集中处理 redux 副作用问题。
被实现为 generator 。
类 redux-thunk 中间件。
watch/worker（监听->执行） 的工作形式

redux-saga的优点

集中处理了所有的异步操作，异步接口部分一目了然
action是普通对象，这跟redux同步的action一模一样
通过Effect，方便异步接口的测试
通过worker 和watcher可以实现非阻塞异步调用，并且同时可以实现非阻塞调用下的事件监听
异步操作的流程是可以控制的，可以随时取消相应的异步操作

基本用法

使用createSagaMiddleware方法创建saga 的Middleware，然后在创建的redux的store时，使用applyMiddleware函数将创建的saga Middleware实例绑定到store上，最后可以调用saga Middleware的run函数来执行某个或者某些Middleware。
在saga的Middleware中，可以使用takeEvery或者takeLatest等API来监听某个action，当某个action触发后，saga可以使用call发起异步操作，操作完成后使用put函数触发action，同步更新state，从而完成整个State的更新。
三、redux-saga使用案例
redux-saga是控制执行的generator，在redux-saga中action是原始的js对象，把所有的异步副作用操作放在了saga函数里面。这样既统一了action的形式，又使得异步操作集中可以被集中处理
redux-saga是通过genetator实现的，如果不支持generator需要通过插件babel-polyfill转义。我们接着来实现一个输出hellosaga的例子

创建一个helloSaga.js文件

export function * helloSaga() {
  console.log('Hello Sagas!');
}

@前端进阶之旅: 代码已经复制到剪贴板

在redux中使用redux-saga中间件

在main.js中

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './sagas'
const sagaMiddleware=createSagaMiddleware();
const store = createStore(
 reducer,
 applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(helloSaga);
//会输出Hello, Sagas!

@前端进阶之旅: 代码已经复制到剪贴板

和调用redux的其他中间件一样，如果想使用redux-saga中间件，那么只要在applyMiddleware中调用一个createSagaMiddleware的实例。唯一不同的是需要调用run方法使得generator可以开始执行

四、redux-saga使用细节
4.1 声明式的Effect

在redux-saga中提供了一系列的api，比如take、put、all、select等API，在redux-saga中将这一系列的api都定义为Effect。这些Effect执行后，当函数resolve时返回一个描述对象，然后redux-saga中间件根据这个描述对象恢复执行generator中的函数

redux-thunk的大体过程

action1(side function)`—>`redux-thunk`监听—>执行相应的有副作用的方法—>`action2(plain object)

@前端进阶之旅: 代码已经复制到剪贴板

转化到action2是一个原始js对象形式的action，然后执行reducer函数就会更新store中的state

redux-saga的大体过程

action1(plain object)——>redux-saga监听—>执行相应的Effect方法——>返回描述对象—>恢复执行异步和副作用函数—>action2(plain object)

对比redux-thunk我们发现，redux-saga中监听到了原始js对象action，并不会马上执行副作用操作，会先通过Effect方法将其转化成一个描述对象，然后再将描述对象，作为标识，再恢复执行副作用函数

4.2 Effect提供的具体方法

下面来介绍几个Effect中常用的几个方法，从低阶的API，比如take，call(apply)，fork，put，select等，以及高阶API，比如takeEvery和takeLatest等

import {take,call,put,select,fork,takeEvery,takeLatest} from 'redux-saga/effects'

@前端进阶之旅: 代码已经复制到剪贴板
4.2.1 take

take这个方法，是用来监听action，返回的是监听到的action对象。比如

const loginAction = {
   type:'login'
}

@前端进阶之旅: 代码已经复制到剪贴板

在UI Component中dispatch一个action

dispatch(loginAction)

@前端进阶之旅: 代码已经复制到剪贴板

在saga中使用：

const action = yield take('login');

@前端进阶之旅: 代码已经复制到剪贴板

可以监听到UI传递到中间件的Action,上述take方法的返回，就是dipath的原始对象。一旦监听到login动作，返回的action为：

{
  type:'login'
}

@前端进阶之旅: 代码已经复制到剪贴板















← MobX总结
Redux之浅析中间件 →
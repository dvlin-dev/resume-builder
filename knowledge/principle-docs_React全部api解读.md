组件类

组件类，详细分的话有三种类，第一类说白了就是我平时用于继承的基类组件Component,PureComponent,还有就是react提供的内置的组件，比如Fragment,StrictMode,另一部分就是高阶组件forwardRef,memo等。

Component

Component是class组件的根基。类组件一切始于Component。对于React.Component使用，我们没有什么好讲的。我们这里重点研究一下react对Component做了些什么。

react/src/ReactBaseClasses.js
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}


@前端进阶之旅: 代码已经复制到剪贴板

这就是Component函数，其中updater对象上保存着更新组件的方法。

我们声明的类组件是什么时候以何种形式被实例化的呢？

react-reconciler/src/ReactFiberClassComponent.js

@前端进阶之旅: 代码已经复制到剪贴板

constructClassInstance

function constructClassInstance(
    workInProgress,
    ctor,
    props
){
   const instance = new ctor(props, context);
    instance.updater = {
        isMounted,
        enqueueSetState(){
            /* setState 触发这里面的逻辑 */
        },
        enqueueReplaceState(){},
        enqueueForceUpdate(){
            /* forceUpdate 触发这里的逻辑 */
        }
    }
}


@前端进阶之旅: 代码已经复制到剪贴板

对于Component， react 处理逻辑还是很简单的，实例化我们类组件，然后赋值updater对象，负责组件的更新。然后在组件各个阶段，执行类组件的render函数，和对应的生命周期函数就可以了。

PureComponent

PureComponent和 Component用法，差不多一样，唯一不同的是，纯组件PureComponent会浅比较，props和state是否相同，来决定是否重新渲染组件。所以一般用于性能调优，减少render次数。

什么叫做浅比较，我这里举个列子：

class Index extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={
           data:{
              name:'alien',
              age:28
           }
        }
    }
    handerClick= () =>{
        const { data } = this.state
        data.age++
        this.setState({ data })
    }
    render(){
        const { data } = this.state
        return <div className="box" >
        <div className="show" >
            <div> 你的姓名是: { data.name } </div>
            <div> 年龄： { data.age  }</div>
            <button onClick={ this.handerClick } >age++</button>
        </div>
    </div>
    }
}


@前端进阶之旅: 代码已经复制到剪贴板

点击按钮，没有任何反应，因为PureComponent会比较两次data对象，都指向同一个data,没有发生改变，所以不更新视图。

解决这个问题很简单，只需要在handerClick事件中这么写：

 this.setState({ data:{...data} })


@前端进阶之旅: 代码已经复制到剪贴板

浅拷贝就能根本解决问题。

memo

React.memo和PureComponent作用类似，可以用作性能优化，React.memo 是高阶组件，函数组件和类组件都可以使用， 和区别PureComponent是 React.memo只能对props的情况确定是否渲染，而PureComponent是针对props和state。

React.memo 接受两个参数，第一个参数原始组件本身，第二个参数，可以根据一次更新中props是否相同决定原始组件是否重新渲染。是一个返回布尔值，true 证明组件无须重新渲染，false证明组件需要重新渲染，这个和类组件中的shouldComponentUpdate()正好相反 。

React.memo: 第二个参数 返回 true 组件不渲染 ， 返回 false 组件重新渲染。 shouldComponentUpdate: 返回 true 组件渲染 ， 返回 false 组件不渲染。

接下来我们做一个场景，控制组件在仅此一个props数字变量，一定范围渲染。

例子🌰：

控制 props 中的 number ：

1 只有 number 更改，组件渲染。
2 只有 number 小于 5 ，组件渲染。
function TextMemo(props){
    console.log('子组件渲染')
    if(props)
    return <div>hello,world</div> 
}

const controlIsRender = (pre,next)=>{
   if(pre.number === next.number  ){ // number 不改变 ，不渲染组件
       return true 
   }else if(pre.number !== next.number && next.number > 5 ) { // number 改变 ，但值大于5 ， 不渲染组件
       return true
   }else { // 否则渲染组件
       return false
   }
}

const NewTexMemo = memo(TextMemo,controlIsRender)
class Index extends React.Component{
    constructor(props){
        super(props)
        this.state={
            number:1,
            num:1
        }
    }
    render(){
        const { num , number }  = this.state
        return <div>
            <div>
                改变num：当前值 { num }  
                <button onClick={ ()=>this.setState({ num:num + 1 }) } >num++</button>
                <button onClick={ ()=>this.setState({ num:num - 1 }) } >num--</button>  
            </div>
            <div>
                改变number： 当前值 { number } 
                <button onClick={ ()=>this.setState({ number:number + 1 }) } > number ++</button>
                <button onClick={ ()=>this.setState({ number:number - 1 }) } > number -- </button>  
            </div>
            <NewTexMemo num={ num } number={number}  />
        </div>
    }
}


@前端进阶之旅: 代码已经复制到剪贴板

效果：

完美达到了效果，React.memo一定程度上，可以等价于组件外部使用shouldComponentUpdate ，用于拦截新老props，确定组件是否更新。

forwardRef

官网对forwardRef的概念和用法很笼统，也没有给定一个具体的案例。很多同学不知道 forwardRef具体怎么用，下面我结合具体例子给大家讲解forwardRef应用场景。

1 转发引入Ref

这个场景实际很简单，比如父组件想获取孙组件，某一个dom元素。这种隔代ref获取引用，就需要forwardRef来助力。

function Son (props){
    const { grandRef } = props
    return <div>
        <div> i am alien </div>
        <span ref={grandRef} >这个是想要获取元素</span>
    </div>
}

class Father extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <Son grandRef={this.props.grandRef}  />
        </div>
    }
}

const NewFather = React.forwardRef((props,ref)=><Father grandRef={ref}  {...props} />  )

class GrandFather extends React.Component{
    constructor(props){
        super(props)
    }
    node = null 
    componentDidMount(){
        console.log(this.node)
    }
    render(){
        return <div>
            <NewFather ref={(node)=> this.node = node } />
        </div>
    }
}


@前端进阶之旅: 代码已经复制到剪贴板

效果

react不允许ref通过props传递，因为组件上已经有 ref 这个属性,在组件调和过程中，已经被特殊处理，forwardRef出现就是解决这个问题，把ref转发到自定义的forwardRef定义的属性上，让ref，可以通过props传递。

2 高阶组件转发Ref

一文吃透hoc文章中讲到，由于属性代理的hoc，被包裹一层，所以如果是类组件，是通过ref拿不到原始组件的实例的，不过我们可以通过forWardRef转发ref。

function HOC(Component){
  class Wrap extends React.Component{
     render(){
        const { forwardedRef ,...otherprops  } = this.props
        return <Component ref={forwardedRef}  {...otherprops}  />
     }
  }
  return  React.forwardRef((props,ref)=> <Wrap forwardedRef={ref} {...props} /> ) 
}
class Index extends React.Component{
  componentDidMount(){
      console.log(666)
  }
  render(){
    return <div>hello,world</div>
  }
}
const HocIndex =  HOC(Index,true)
export default ()=>{
  const node = useRef(null)
  useEffect(()=>{
     /* 就可以跨层级，捕获到 Index 组件的实例了 */ 
    console.log(node.current.componentDidMount)
  },[])
  return <div><HocIndex ref={node}  /></div>
}



@前端进阶之旅: 代码已经复制到剪贴板

如上，解决了高阶组件引入Ref的问题。

lazy

React.lazy 和 Suspense 技术还不支持服务端渲染。如果你想要在使用服务端渲染的应用中使用，我们推荐 Loadable Components 这个库

React.lazy和Suspense配合一起用，能够有动态加载组件的效果。React.lazy 接受一个函数，这个函数需要动态调用 import()。它必须返回一个 Promise ，该 Promise 需要 resolve 一个 default export 的 React 组件。

我们模拟一个动态加载的场景。

父组件

import Test from './comTest'
const LazyComponent =  React.lazy(()=> new Promise((resolve)=>{
      setTimeout(()=>{
          resolve({
              default: ()=> <Test />
          })
      },2000)
}))
class index extends React.Component{   
    render(){
        return <div className="context_box"  style={ { marginTop :'50px' } }   >
           <React.Suspense fallback={ <div className="icon" ><SyncOutlined  spin  /></div> } >
               <LazyComponent />
           </React.Suspense>
        </div>
    }
}


@前端进阶之旅: 代码已经复制到剪贴板

我们用setTimeout来模拟import异步引入效果。

Test

class Test extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log('--componentDidMount--')
    }
    render(){
        return <div>
            <img src={alien}  className="alien" />
        </div>
    }
}


@前端进阶之旅: 代码已经复制到剪贴板

效果

Suspense

何为Suspense, Suspense 让组件“等待”某个异步操作，直到该异步操作结束即可渲染。

用于数据获取的 Suspense 是一个新特性，你可以使用 <Suspense> 以声明的方式来“等待”任何内容，包括数据。本文重点介绍它在数据获取的用例，它也可以用于等待图像、脚本或其他异步的操作。

上面讲到高阶组件lazy时候，已经用 lazy + Suspense模式，构建了异步渲染组件。我们看一下官网文档中的案例：

const ProfilePage = React.lazy(() => import('./ProfilePage')); // 懒加载
<Suspense fallback={<Spinner />}>
  <ProfilePage />
</Suspense>


@前端进阶之旅: 代码已经复制到剪贴板
Fragment

react不允许一个组件返回多个节点元素，比如说如下情况

render(){
    return <li> 🍎🍎🍎 </li>
           <li> 🍌🍌🍌 </li>
           <li> 🍇🍇🍇 </li>
}


@前端进阶之旅: 代码已经复制到剪贴板

如果我们想解决这个情况，很简单，只需要在外层套一个容器元素。

render(){
    return <div>
           <li> 🍎🍎🍎 </li>
           <li> 🍌🍌🍌 </li>
           <li> 🍇🍇🍇 </li>
    </div>
}


@前端进阶之旅: 代码已经复制到剪贴板

但是我们不期望，增加额外的dom节点，所以react提供Fragment碎片概念，能够让一个组件返回多个元素。 所以我们可以这么写

<React.Fragment>
    <li> 🍎🍎🍎 </li>
    <li> 🍌🍌🍌 </li>
    <li> 🍇🍇🍇 </li>
</React.Fragment>


@前端进阶之旅: 代码已经复制到剪贴板

还可以简写成：

<>
    <li> 🍎🍎🍎 </li>
    <li> 🍌🍌🍌 </li>
    <li> 🍇🍇🍇 </li>
</>


@前端进阶之旅: 代码已经复制到剪贴板

和Fragment区别是，Fragment可以支持key属性。<></>不支持key属性。

温馨提示。我们通过map遍历后的元素，react底层会处理，默认在外部嵌套一个<Fragment>。

比如：

{
   [1,2,3].map(item=><span key={item.id} >{ item.name }</span>)
}


@前端进阶之旅: 代码已经复制到剪贴板

react底层处理之后，等价于：

<Fragment>
   <span></span>
   <span></span>
   <span></span>
</Fragment>


@前端进阶之旅: 代码已经复制到剪贴板
Profiler

Profiler这个api一般用于开发阶段，性能检测，检测一次react组件渲染用时，性能开销。

Profiler 需要两个参数：

第一个参数：是 id，用于表识唯一性的Profiler。

第二个参数：onRender回调函数，用于渲染完成，接受渲染参数。

实践：

const index = () => {
  const callback = (...arg) => console.log(arg)
  return <div >
    <div >
      <Profiler id="root" onRender={ callback }  >
        <Router  >
          <Meuns/>
          <KeepaliveRouterSwitch withoutRoute >
              { renderRoutes(menusList) }
          </KeepaliveRouterSwitch>
        </Router>
      </Profiler> 
    </div>
  </div>
}


@前端进阶之旅: 代码已经复制到剪贴板

结果

onRender

0 -id: root -> Profiler 树的 id 。
1 -phase: mount -> mount 挂载 ， update 渲染了。
2 -actualDuration: 6.685000262223184 -> 更新 committed 花费的渲染时间。
3 -baseDuration: 4.430000321008265 -> 渲染整颗子树需要的时间
4 -startTime : 689.7299999836832 -> 本次更新开始渲染的时间
5 -commitTime : 698.5799999674782 -> 本次更新committed 的时间
6 -interactions: set{} -> 本次更新的 interactions 的集合

尽管 Profiler 是一个轻量级组件，我们依然应该在需要时才去使用它。对一个应用来说，每添加一些都会给 CPU 和内存带来一些负担。

StrictMode

StrictMode见名知意，严格模式，用于检测react项目中的潜在的问题，。与 Fragment 一样， StrictMode 不会渲染任何可见的 UI 。它为其后代元素触发额外的检查和警告。

严格模式检查仅在开发模式下运行；它们不会影响生产构建。

StrictMode目前有助于：

①识别不安全的生命周期。
②关于使用过时字符串 ref API 的警告
③关于使用废弃的 findDOMNode 方法的警告
④检测意外的副作用
⑤检测过时的 context API

实践:识别不安全的生命周期

对于不安全的生命周期，指的是UNSAFE_componentWillMount，UNSAFE_componentWillReceiveProps , UNSAFE_componentWillUpdate

外层开启严格模式：
<React.StrictMode> 
    <Router  >
        <Meuns/>
        <KeepaliveRouterSwitch withoutRoute >
            { renderRoutes(menusList) }
        </KeepaliveRouterSwitch>
    </Router>
</React.StrictMode>

我们在内层组件中，使用不安全的生命周期:
class Index extends React.Component{    
    UNSAFE_componentWillReceiveProps(){
    }
    render(){      
        return <div className="box" />   
    }
}

效果：

@前端进阶之旅: 代码已经复制到剪贴板


































← 跟 React 学设计模式
Taro原理 →
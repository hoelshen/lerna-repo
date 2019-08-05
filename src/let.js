console.log('require', require);


1.//预加载模块  preloadModules()
2.//NativeModule.require()引入“internal/module”  代码
3.//将内建的库绑定到全局对象

module1


class Component {
  constructor(value){
      this.value = value;
  }

  method(){
      return this.value
  }

}




// autobind-decorator

// es7已经淘汰了bind的写法 ，而使用::  ：：obj.method


//object 有如下语法

//delegat 可以将一个对象的方法、属性等委托给另一个对象。
//koa的上下文对象ctx可以访问一些request和response上的方法、属性，原因在于，request或者response上的方法、属性被委托给了ctx对象


// 先获得delegate引用对象


const delegate = require('delegate');
const proto = {


}

/***
* response delegation
* 
* 
*  */

delegate(proto, 'response')
  .method('redirect')
  // ... 
  .access('body')
  // ... 

  //将上面的代码委托给response上的属性
  app.use(function(ctx, next){
      ctx.body = 'xxx'
      //ctx.redirect('/url')
  })

//es7的装饰器作用
//在原有的基础函数上，不扰乱原先的代码


// new 产生的对象  类型是object  实例对象是各个类型 Array  Number  
//  object.prototype.toString Array  Number
// undefined 比较特殊 oBJECT


// configure 是用来检测安装平台的目标特征的



function name(){



}

var o = {
    myfunc(){

    }
}
console.log(o.myfunc.name)



//macro  setTimeout  setInterval

//macroTask
//microTask  microTask  microTask
//macroTask
//microTask  microTask  microTask

//micro  console.log   promise   
//promsie 永远会在队列尾部添加微观任务


var r = new Promise(function(resolve, reject){
    console.log("a");
    resolve()
});
r.then(() => console.log("c"));
console.log("b")

//seTimeout 将代码切分为两快

// abc


// console.log('sync1');

// setTimeout(function () {
//     console.log('setTimeout1')
// }, 0);

// var promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('setTimeoutPromise')
//     }, 0);
//     console.log('promise');
//     resolve();
// });


// promise.then(() => {
//     console.log('pro_then');
//     setTimeout(() => {
//         console.log('pro_timeout');
//     }, 0)
// })

// setTimeout(function () {
//     console.log('last_setTimeout')
// }, 0);
// console.log('sync2');


//解答
// sync1   
// promise
// pr_then
// sync2
// setTimeoutPromise
// pro_timeout
// setTimeout1
// last_setTimeout


function  test(...arg){
    console.log(this.variable + arg)
}

var obj = {
    variable :1
}

test();

test.apply(obj,[2,2,3])
test.call(obj,2)
var c = test.bind(obj,3);
c();

//把obj绑定到thisObj,这时thisObj就具备了obj的属性和方法。 
// 与call和apply不同的是，bind绑定之后返回绑定完成的函数， 不会立即执行，需要再显式执行一次此函数才能完成调用。


7.29
变量作用域的基本单元是function，创建一个块作用域



let  声明 
var 声明的变量总是归属于包含函数（即全局，如果在最顶层的话）


过早访问 let 声明的引用导致的这个referenceerror 叫做临时死亡区错误 

你在访问一个已经声明但还没有初始化的变量  ？？？


const 是对赋值做锁定  不对值的改变锁定  例如：数组 对象 


格式化后
var x = 10,
  y = 20;
[y, x] = [x, y]
console.log(x, y)
new Promise(function (resolve) {
  resolve(1)
}).then(function (value) {
  console.log(value)
})



Promise.resolve(1).then(function (value) {
  console.log(' Promise.resovle' + value)
})

var error = new Error('this is a error')

new Promise更为强大
Promise.resolve更为便捷


new Promise(function(resolve, reject){
  reject(error)
}).catch(function(err){
  console.log('Promise.resolve' + err)
})

Promise.reject(error).catch(function(err){
  console.log('Promise.resolve'+err)
})

//以下是更为便捷的写法
function hello(i){
  return Promise.resolve(i)
}
hello(1).then(function(){
  console.log('promise.reslove1=' + value)
})

// Promise.resolve返回的是prmise对象，相当于 new Promise(resolve,reject)实例

// Promise.prototype.then()方法的语法如下 
p.then(onFulfilled,onRejected);
// p.then(function(value)){}

p.catch(onRejected)
// p.catch(function(reson)) {}


// Promise.all(iterable) 和Promise.race(iterable)


// generator 的弊端是没有执行器， 本身也不是为流程控制而生的，所以出现了co

// async 函数的执行过程
// generator本意是iterator生成器  函数运行到yield时退出， 并保留上下文


// co 适用于调用promise 的场景， 

co(function*(){
  var result = yield Promise.resolve(true)
  return result
}).then(function(value){
  console.log(value)
},function(err){
  console.error(err.stack)
})



// 可以在async/await 里面使用 try catch //同步函数


// await 的用法 大概分为三种
// await + async 
// await + Promise
// await+ co+ generaor


// await + co + generator 用法
 const co = require('co')
 const Promise = require('bluebird')

 const fs = Promise.promisifyAll(require('fs'))

 async function main(){
  const contents = co(function*{
    var result = yield.fs.readFilAsyn('myfiles.js', 'utf8')
    return result;
  })
 }

//  await后面接promise ，promise自身就足够应付所有流程






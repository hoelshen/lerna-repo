const PENDING =  "pending"
const FULFILLED =  "fulfilled"
const REJECTED =  "rejected"

function MyPromise(executor){
  // executor：这是实例Promise对象时在构造器中传入的参数，一般是一个function(resolve,reject){}
  let that = this;
  this.status = PENDING;
  this.value = undefined;
  this.reason = undefined;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];


  function resolve(value){
    if(value instanceof Promise) {
        return value.then(resolve, reject);
    }
    // 要确保 onFulfilled 和 onRejected 方法异步执行
    setTimeout(() => {
        // 调用resolve 回调对应onFulfilled函数
        if (that.status === PENDING) {
            // 只能由pedning状态 => fulfilled状态 (避免调用多次resolve reject)
            that.status = FULFILLED;
            that.value = value;
            that.onFulfilledCallbacks.forEach(cb => cb(that.value));
        }
    });

  }
  function reject(reason){
    setTimeout(() => {
        // 调用reject 回调对应onRejected函数
        if (that.status === PENDING) {
            // 只能由pedning状态 => rejected状态 (避免调用多次resolve reject)
            that.status = REJECTED;
            that.reason = reason;
            that.onRejectedCallbacks.forEach(cb => cb(that.reason));
        }
    });
  }
  // executor方法可能会抛出异常，需要捕获
  try {
    executor(resolve, reject);
  } catch (e) {
      reject(e);
  }
}


MyPromise.prototype.resolvePromise = function(promise2, x, resolve, reject) {
  let self = this;
  let called = false; // called 防止多次调用
  //因为promise2是上一个promise.then后的返回结果，所以如果相同，会导致下面的.then会是同一个promise2，一直都是，没有尽头
  //相当于promise.then之后return了自己，因为then会等待return后的promise，导致自己等待自己，一直处于等待
  if (promise2 === x) {
      return reject(new TypeError('循环引用'));
  }
  //如果x不是null，是对象或者方法
  if (x !== null && (Object.prototype.toString.call(x) === '[object Object]' || Object.prototype.toString.call(x) === '[object Function]')) {
      // x是对象或者函数
      try {
          let then = x.then;

          if (typeof then === 'function') {
              then.call(x, (y) => {
                  // 别人的Promise的then方法可能设置了getter等，使用called防止多次调用then方法
                  if (called) return;
                  called = true;
                  // 成功值y有可能还是promise或者是具有then方法等，再次resolvePromise，直到成功值为基本类型或者非thenable
                  self.resolvePromise(promise2, y, resolve, reject);
              }, (reason) => {
                  if (called) return;
                  called = true;
                  reject(reason);
              });
          } else {
              if (called) return;
              called = true;
              resolve(x);
          }
      } catch (reason) {
          if (called) return;
          called = true;
          reject(reason);
      }
  } else {
      // x是普通值，直接resolve
      resolve(x);
  }
}


MyPromise.prototype.then = function(onFulfilled, onRejected) {
  //获取下this
  let self = this;

  //链式调用 在创建一个promise
  let promsie2 = null;

  //解决onFulfilled、onRejected没有传值的问题
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : y => y
  onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}

  promsie2 = new MyPromise((resolve,reject)=>{
    if(this.status === PENDING){
      //保存回调函数
      self.onFulfilledCallbacks.push(()=>{
        setTimeout(()=>{
          try{

            let x= onFulfilled(self.value);

            self.resolvePromise(promise2, x, resolve, reject);
          } catch(err){
            reject(this.reason)
          }
        },0)
      });

      self.onRejectedCallbacks.push(()=>{
        //promsie 本身是一个异步方法， 属于微任务一列，必须得在执行栈执行完了再去取他的值，所以返回值都得包一层异步setTimeout
        setTimeout(()=>{
          try{
            let x=  onRejected(self.reason)
            self.resolvePromise(promise2, x, resolve, reject);
          } catch(err){
            reject(this.reason)
          }
        },0)
      })
    }


    if(this.status === FULFILLED){
      console.log('then FULFILLED')
      setTimeout(() => {
          try {
              let x = onFulfilled(self.value);

              self.resolvePromise(promise2, x, resolve, reject);
          } catch (reason) {
              reject(reason);
          }
      }, 0);
    }
  
    if(this.status === REJECTED){
      console.log('then REJECTED')
      setTimeout(() => {
          try {
              let x = onRejected(self.reason);
              self.resolvePromise(promise2, x, resolve, reject);
          } catch (reason) {
              reject(reason);
          }
      })
    }
  })

  return promsie2

};

function start() {  
  return new MyPromise((resolve, reject) => {  
    resolve('start');  
  });  
}  
start()  
.then(data => {  
  // promise start  
  console.log('result of start: ', data);  
  return MyPromise.resolve(1); // p1  
})  
.then(data => {  
  // promise p1  
  console.log('result of p1: ', data);  
  return MyPromise.resolve(2); // p2  
})  
.then(data => {  
  // promise p2  
  console.log('result of p2: ', data);  
  return MyPromise.resolve(3); // p3  
})  
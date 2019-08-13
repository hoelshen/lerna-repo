const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
      //控制状态，使用了一次之后，接下来的都不被使用
      this.state = PENDING;
      this.value = null;
      this.reason = null;
      // 存放成功回调的函数
      this.onFulfilledCallbacks = [];
      // 存放失败回调的函数
      this.onRejectedCallbacks = [];
      // 定义resolve函数
      const resolve = value => {
        if (this.state === PENDING) {
            this.value = value;
            this.state = FULFILLED;
            this.onFulfilledCallbacks.map(fn => fn());
        }
    }
    
      
      // 定义reject函数
      const reject = value => {
        if (this.state === PENDING) {
            this.value = value;
            this.reason = REJECTED;
            this.onRejectedCallbacks.map(fn => fn());
        }
    }
      
      // executor方法可能会抛出异常，需要捕获
      try {
           // 将resolve和reject函数给使用者  
          executor(resolve, reject);
      } catch (error) {
          // 如果在函数中抛出异常则将它注入reject中
          reject(error);
      }
  }

    resolvePromise(promise2, x, resolve, reject) {
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

    then(onFulfilled, onRejected) {
    let self = this;
    let promise2 = null;
    //解决onFulfilled,onRejected没有传值的问题
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : y => y
    //因为错误的值要让后面访问到，所以这里也要跑出个错误，不然会在之后then的resolve中捕获
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
        throw err;
    }

    promise2 = new MyPromise((resolve, reject) => {
        if (self.state === PENDING) {
            console.log('then PENDING')
            self.onFulfilledCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(self.value);
                    console.log(333333, x, typeof x);
                        self.resolvePromise(promise2, x, resolve, reject);
                    } catch (reason) {
                        reject(reason);
                    }
                }, 0)

            });
            self.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.reason);
                        self.resolvePromise(promise2, x, resolve, reject);
                    } catch (reason) {
                        reject(reason);
                    }
                }, 0);
            });
        }

        if (self.state === FULFILLED) {
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

        if (self.state === REJECTED) {
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
    });

    return promise2;
    }
    //catch方法
    catch(onRejected){
        return this.then(null,onRejected)
    }
    finally(fn) {
        return this.then(value => {
            fn();
            return value;
        }, reason => {
            fn();
            throw reason;
        });
    };
    static resolve(val) {
        return new MyPromise((resolve, reject) => {
            resolve(val)
        })
    }
    //reject方法
    static reject(val) {
        return new MyPromise((resolve, reject) => {
            reject(val)
        })
    }
    static all(promiseArr) {
        return new MyPromise((resolve, reject) => {
            let result = [];
    
            promiseArr.forEach((promise, index) => {
                promise.then((value) => {
                    result[index] = value;
    
                    if (result.length === promiseArr.length) {
                        resolve(result);
                    }
                }, reject);
            });
        });
    }
    static race(promiseArr) {
        return new MyPromise((resolve, reject) => {
            promiseArr.forEach(promise => {
                promise.then((value) => {
                    resolve(value);
                }, reject);
            });
        });
    }
    static deferred() {
        let dfd = {};
        dfd.promies = new MyPromise((resolve, reject) => {
            dfd.resolve = resolve;
            dfd.rfeject = reject;
        });
        return dfd;
    };
}


var p1 = new MyPromise(function (resolve) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
})

p1.then(function (val) {
  console.log(val)
  var p3 = new MyPromise(function (resolve) {
    setTimeout(function () {
      resolve(val + 1);
    }, 1000);
  });

  return p3;
}).then(function (val) {
  console.log(val);
  var p4 = new MyPromise(function (resolve) {
    setTimeout(function () {
      resolve(val + 1);
    }, 1000);
  });
  return p4
}).then(function (val){
  console.log(val);
  var p4 = new MyPromise(function (resolve) {
    setTimeout(function () {
      resolve(val + 1);
    }, 1000);
  });
});
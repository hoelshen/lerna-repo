/**
 * 模拟 async 函数的实现，该段代码取自 Secrets of the JavaScript Ninja (Second Edition)，p159
 */
// 接收生成器作为参数，建议先移到后面，看下生成器中的代码
var myAsync = generator => {
  // 注意 iterator.next() 返回对象的 value 是 promiseAjax()，一个 promise
  const iterator = generator();

  // handle 函数控制 async 函数的 挂起-执行
  const handle = iteratorResult => {
    if (iteratorResult.done) return;

    const iteratorValue = iteratorResult.value;

    // 只考虑异步请求返回值是 promise 的情况
    if (iteratorValue instanceof Promise) {
      // 递归调用 handle，promise 兑现后再调用 iterator.next() 使生成器继续执行
    
      iteratorValue
        .then(result => handle(iterator.next(result)))
        .catch(e => iterator.throw(e));
    }
  };

  try {
    handle(iterator.next());
  } catch (e) {
    console.log(e);
  }
};

myAsync(function*() {
  try {
    const a = yield Promise.resolve(1);
    const b = yield Promise.reject(a + 10);
    const c = yield Promise.resolve(b + 100);
    console.log(a, b, c); // 输出 1，11，111
  } catch (e) {
    console.log("出错了：", e);
  }
});

// myAsync 函数接受一个生成器作为参数，控制生成器的 挂起 可达到使整个 myAsync 函数在异步代码请求过程 挂起 的效果；
// myAsync 函数内部通过定义handle函数，控制生成器的 _挂起-执行_。


// 1）首先调用generator()生成它的控制器，即迭代器iterator，此时，生成器处于挂起状态；
// 2）第一次调用handle函数，并传入iterator.next()，这样就完成生成器的第一次调用的；
// 3）执行生成器，遇到yield生成器再次挂起，同时把yield后表达式的结果（未完成的 promise）传给 handle；
// 4）生成器挂起的同时，异步请求还在进行，异步请求完成（promise 兑现）后，会调用handle函数中的iteratorValue.then()；
// 5）iteratorValue.then()执行时内部递归调用handle，同时把异步请求回的数据传给生成器（iterator.next(result)），生成器更新数据再次执行。如果出错直接结束；
// 6）3、4、5 步重复执行，直到生成器结束，即iteratorResult.done === true，myAsync 结束调用。
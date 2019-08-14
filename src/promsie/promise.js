

function Defer(executor){
  this.value = null;//代理的值

  if(!(this instanceof Defer)){
    throw " Defer is a constructor and should be called width 'new' keyword "
  }

  if(typeof executor !== 'function'){
    throw ' Defer params must be a function '
  }

}



Defer.prototype = {
  

}







this.then = function(onFulfilled, onRejected) {
  return new Promise(function(resolve, reject) {
    handle({ 
      onFulfilled: onFulfilled, 
      onRejected: onRejected, 
      resolve: resolve, 
      reject: reject 
    })
  })
}
function handle(deferred) {
  nextTick(function() {
    var cb = state ? deferred.onFulfilled : deferred.onRejected
    if (typeof cb !== 'function'){
      (state ? deferred.resolve : deferred.reject)(value)
      return
    }
    var ret
    try {
      ret = cb(value)
    }
    catch (e) {
      deferred.reject(e)
      return
    }
    deferred.resolve(ret)
  })
}


//首先会执行 onFulfilled 函数，即 p1 的 then 回调函数，此时创建 p3 返回赋值给 ret。然后再调用 deferred 的 resolve，其实是调用了 p2 的 resolve，将 p3 作为参数传入。

function resolve(newValue) {
  if (delegating)
    return
  resolve_(newValue)
}

function resolve_(newValue) {
  if (state !== null)
    return
  try {
    if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.')
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then
      if (typeof then === 'function') {
        delegating = true
        then.call(newValue, resolve_, reject_)
        return
      }
    }
  } catch (e) { reject_(e) }
}


then.call(newValue, function resolve_ (newValue) {
  // 更新状态
  state = true

  // 记住 resolve 的参数
  value = newValue
  finale()
}, reject_);



var p1 = new Defer(function (resolve) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
})

p1.then(function (val) {
  console.log(val)
  var p3 = new Defer(function (resolve) {
    setTimeout(function () {
      resolve(val + 1);
    }, 1000);
  });

  return p3;
}).then(function (val) {
  console.log(val);
  var p4 = new Defer(function (resolve) {
    setTimeout(function () {
      resolve(val + 1);
    }, 1000);
  });
  return p4
}).then(function (val){
  console.log(val);
  var p4 = new Defer(function (resolve) {
    setTimeout(function () {
      resolve(val + 1);
    }, 1000);
  });
});


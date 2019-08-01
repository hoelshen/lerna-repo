hello('xx.html').then(log).then(function () {
  return world('./xxx.js').then(log)
}).catch(err => {
  console.log(err)
})

Promise.prototype.then() = function (success, fail) {
  this.done(success)
  this.fail(fail)
  return this
}

//整个promise 还有这种写法
hell('./xx.json').then(function (data) {
  return new Promise(function (reslove, reject) {
    console.log('promise ' + data)
    reslove(data)
  })


}).then(function (data) {
  return new Promise(function (reslove, reject) {
    console.log('promise ' + data)
    reslove(data)
  })
}).then(function (data) {
  return new Promise(function (reslove, reject) {
    console.log('promise ' + data)
    reslove(data)
  })
}).catch(function (err) {
  console.log(err)
})
// 装饰器函数
function logable(target, key, descriptor) {
  return Object.assign({}, descriptor, {
    value: function (...params) {
      console.log(`this is ${descriptor.value.name || [unknown]}`)
      descriptor.value.apply(this, params)
    }
  })
}

class Foobar {
  // 使用装饰器
  @logable
  tom () {
    // 业务代码
  }
} 
const foo = new Foobar();
foo.tom();
// console.log('a');

// setTimeout(()=>{console.log('b')}, 0)

// console.log('c');

// Promise.resolve()
//   .then(()=>{console.log('d')})
//   .then(()=>{console.log('e')})

//   console.log('f');

// acfdeb

// 先同步 在 queueMicrotask  在queueMacrotask


setTimeout(_=> console.log(4));

new Promise(resolve=>{
  resolve()
  console.log(1)
}).then(_=>{
  console.log(3)
})

console.log(2)

// 2.1.3.4
//分析 浏览器 遇到promise 但是里面有个console.log所以先执行了1
// 之后就是micro的值，明确一点就是then里面的才是micro 存起来 推入栈中

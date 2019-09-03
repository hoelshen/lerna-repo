/**
 * 作为对象的属性/键值，会以一种特别的方式存储，使得这个属性不吹安在对这个对象的一般属性枚举中
 * 
 */


 var o ={
   foo: 42,
   [Symbol('bar')] : 'hello world',
   baz: true
 }
console.log(' Object.getOwnPropertyNames(o)', Object.getOwnPropertyNames(o));
console.log(' Object.getOwnPropertyNames(o)', Object.getOwnPropertySymbols(o))

// next()迭代

var greeting = 'hello world';

var it = greeting[Symbol.iterator]();

console.log(it.next())
console.log(it.next())

console.log(it.next())

//在消耗完毕的迭代器上调用next（）不会出错



/**
 * 用for of 循环  等价的for形式 解释迭代器
 */


// for(var v, res; (res = it.next()) && !it.done;){
//   var res = it.value;
//   console.log(v)
// }


/*
生成器可以返回一个值， 恢复它的控制代码也可以反回一个值。
yield 的组合方式是右结合
*/

function *foo(x){
  if(x<3){
    x = yield *foo(x +1)
  }
  return x * 2 
}

var ssss= foo(1)
console.log('1',ssss);
// it.next()

function *foo(){
  yield 1;
  yield 2;
  yield 3;
  return console.log(2)
}

var it = foo();
console.log(it.next())
console.log(it.next())
console.log(it.return(42))


it.next();
// it.next();
// it.next();

function *foo(){
  try{
    yield 1;
    yield 2;
    yield 3;

  }finally{
    console.log('cleanup')
  }
}

for(var v of foo()){
  console.log(v)
}

// var it = foo();
// it.next();
// it.return(42);


// transpire生成器
// 顺序执行的任务队列



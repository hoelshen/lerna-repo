


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


import bar from 'B'

export default function foo(x){
  if(x > 10) return bar(x-1)
  return x*2
}

import foo from 'A'

export default function bar(y){
  if(y >5) return foo(y/2)
  return y*3
}



var m = {};
var x= {id:1};
var y = {id:2};

m[x] = "foo";
m[y]="baz";
console.log(m[x])
console.log(m[y])

// 对象作为映射的主要缺点是不能使用非字符串值作为键
// x 和 y 两个对象字符串化都是"[objcet objcet]",所以m中只设置了一个键


var m = new WeakMap();
var x = {id:1}
 y= {id:3}
 z= {id:4}
v= {id:5}

m.set(x,y);
x= null;
y =null

m.set(x,y)
w = null

var arrLike = {
  length:3,
  0: 'foo',
  1: 'bar'
}

var arr = Array.from(arrLike)

console.log(arr)

//创建数组和子类型
of  from 都使用访问它们的构造器来构造数组。 所以使用基类 Array
 那么得到的array实例
 如果使用子类 那么得到子类实例

 fill

 //用指定值填充已存在的数组
 var a = Array(4).fill(undefined)
 console.log(a);

 var a = [null,null,null,null].fill(42, 1, 3)
 console.log(a);

 var a= [1,2,3,4,5]
 a.some(function matcher(v){
   return v === '2'
 })

 a.some(function matcher(){
   return v === 7;
 })

// 如果需要严格匹配的索引值， 那么使用indexof(..)
// 如果需要自定义匹配的索引值， 那么使用findIndex(..)

var points = [
  {x:10, y:20},
  {x:20, y:30},
  {x:30, y:40},
  {x:40, y:50},
  {x:50, y:60} 
]

points.findIndex(function matcher(point){
  return 
  (point.x  % 3 == 0 && point.y % 4 === 0)

})

识别 NaN, -0 值， 那么应该选择Object.is()

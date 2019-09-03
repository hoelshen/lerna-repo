



const len1 = "🐸"
const len2 = "😂"
// const s1 ="e\u0301\u0330"
console.log('len', len1.length)
console.log('len', len2.length)
// console.log('len', s1.length)
 

var s1 = "abc\u0301d";
console.log([...s1.normalize()][2])

/**
 * 关于symbol
有几点要注意的
1。不能对symbol 使用new。 它并不是一个构造器，也不会创建一个对象
2。传给symbol的参数是可选的，如果传入的话 最好是一个为这个symbol的用途给用户描述的字符串

符号本身的内部值-- 被称为它的名称
实现了单例模式的模块

 */







const INSTANCE = Symbol('instance');

function HappyFace(){
  if(HappyFace[INSTANCE]) return HappyFace[INSTANCE];
  function smile(){}

  return HappyFace[INSTANCE] = {
    smile: smile
  }
}


var me = HappyFace();
var you = HappyFace();
console.log(me==you)

// 全局符号注册 优化全局变量  Symbol.for()


const INSTANCE = Symbol.for('instance');

function HappyFace(){
  if(HappyFace[INSTANCE]) return HappyFace[INSTANCE];
  function smile(){}

  return HappyFace[INSTANCE] = {
    smile: smile
  }
}


const s = Symbol.for('something cool');
const desc = Symbol.keyFor(s);
console.log(desc)

const s2 = Symbol.for(desc);
console.log(s2 ===s)














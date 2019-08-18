const foo1 = function foo(){
  console.log('1')
  return 1
}
const foo2 = function foo(){
  console.log('2')
  return 2
}
const foo3 = function foo(){
  console.log('3')
  return 3
}

export {foo1} ;
export {foo2} ;

export default {foo3}
// export function foo(){
//   console.log('1')
// }
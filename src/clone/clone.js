//1. Json.string
  // JSON.parse(JSON.stringify())

//2. 
const obj = {
  a:1,
  b:{
    c:{
      c:2
    }
  },
  c:[2, 4,7]
}
function clone(obj){
  if(typeof obj == 'object'){
    let targetClone = Array.isArray(obj) ?{} : [];
    for(let i in obj){
      targetClone[i] = obj[i]
    }
    return targetClone
  } else {
    return obj
  }
}
const obj2 =clone(obj)
console.log('obj2: ', obj2);

// 如果是更深层次的拷贝可以继续递归直到属性为原始类型。

// 3.

// 解决循环引用  可以额外开辟一个存储空间， 来存储当前对象和拷贝对象的对应关系 选用map 这种数据结构
function clone(target, map = new Map()) {
  if (typeof target === 'object') {
      let cloneTarget = Array.isArray(target) ? [] : {};
      if (map.get(target)) {
          return map.get(target);
      }
      map.set(target, cloneTarget);
      for (const key in target) {
          cloneTarget[key] = clone(target[key], map);
      }
      return cloneTarget;
  } else {
      return target;
  }
};





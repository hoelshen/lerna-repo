function toArray (list, start){
  start = start || 0
  let i = list.length - start
  const ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}
var ss =  toArray([1,2,3,4,5], 3)
console.log('ss: ', ss);
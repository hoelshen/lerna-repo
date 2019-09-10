//1. indexof
function sort(arr) {
  var filtered = arr.filter((item, idx, arr) => {
    return arr.indexOf(item) === idx
  })
}

//其去重原理为 数组匹配到的第一次出现位置
var spread = [12, 5, 8, 8, 130, 44, 130]
var filtered = spread.filter((item, idx, arr) => {
  console.log('id', arr.indexOf(item))
})
// 筛选符合条件找到的第一个索引值等于当前索引值的数组
console.log('数组去重结果', filtered)

//id 0
//id 1
//id 2
//id 4
//id 5
//id 4
//数组去重结果[]

//2. new set
var spread = [12, 5, 8, 8, 130, 44,130]
var filtered = new Set(spread)  //会是对象的形式 所以需要结构 变成数组[...{}] // 或者Array.from()
console.log('数组去重结果', filtered)

//数组去重结果 Set(5) {12, 5, 8, 130, 44}

//3.keys
array.forEach(element => {
  
});
var arr=[12, 5, 8, 8, 130, 44,130,'a','b','a']
var obj={};
arr.forEach(function(item){
  obj[item]=item;
})
Object.keys(obj)
console.log(Object.keys(obj))



//# 数组去掉空字符串
1. 
var spread = ['A', '', 'B', null, undefined, 'C', '  ']
var filtered = spread.filter((item, idx, arr) => {
  return item && item.trim()
})
console.log('数组中的空字符串删掉', filtered) // => ["A", "B", "C"]


function quickSort(array) {
  if (array.length < 2) return array
  let pivot = array[array.length - 1]
  let left = array.filter((v, i) => v <= pivot && i != array.length -1)
  let right = array.filter(v => v > pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}
const utils = {
  randomNum() {
    return Math.floor(Math.random() * 100)
  },
  randomArray() {
    return Array.from(Array(this.randomNum()), _ => this.randomNum())
  }
}


let array = utils.randomArray()
console.log(quickSort(array))


const quickSort = function([head,...tail]) { 
  return head === undefined ?  
  [] : 
   [ 
   ...quickSort(tail.filter(x=>x < head)), 
   head,  
   ...quickSort(tail.filter(x=>x >= head)) 
   ]; 
};

// 冒泡排序的核心是两两交换
for(let i = 0; i< array.length-1; i++){
  if(array[i]> array[i+1]){
    swap[array, i, i+1]
  }
}
function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}
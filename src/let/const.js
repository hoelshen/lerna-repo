const text = 'outside';

function login(){
  console.log(text);
  let text = 'inside';  //报提前使用错误
  
}

login();

const arr = [];
arr.push('1');
console.log(arr);

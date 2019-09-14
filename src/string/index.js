

var expr = 'A';
var expr = new String('A');

console.log('expr: ', expr);
switch (expr) {
  case 'A':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'B':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

1. 
//  string是个对象   对象的默认值是 null
new String()  == new String('')  
// 都是声明一个新的空字符串，是空串不是 null

// ==:比较引用类型比较的是地址值是否相同

var yiifaa = 'yiifaa',
    str1 = new String(yiifaa),
    str2 = String(yiifaa)



str1 === yiifaa
//
str2 === yiifaa
//
typeof str1 === typeof str2


// /  类型为string，为基本类型
typeof yiifaa
//  类型为object，为引用类型
typeof str1
//  类型为string，为基本类型
typeof str2

// 根据JS的语法，要满足===的条件如下： 
// 1. 如果是引用类型，则两个变量必须指向同一个对象（同一个地址）； 
// 2. 如果是基本类型，则两个变量除了类型必须相同外，值还必须相等

//  false， 因为str1为引用类型
str1 === yiifaa
//  true， 因为都是基本类型，并且值相等
str2 === yiifaa
// false， 虽然都是字符串，但分别为object与string
typeof str1 === typeof str2
// function f1() {
//   var n = 999;
//   nAdd = function () {
//     n += 1
//   }

//   f3 = function(){
//     alert(3)
//   }

//   function f2() {
//     alert(n);
//     // return 3      
//   }
//   return f2;
// }
// var result = f1();
// alert(result())
// console.log(result());
// result(); // 999
// nAdd();
// result(); // 1000
// f3();
// function f1(){
//   var n =999;
// }
// console.log(n);
// alert(n)


// var name = "The Window";
// var object = {
//   name: "My Object",
//   getNameFunc: function () {
//     return function () {
//       return this.name;
//     };
//   }
// };
// alert(object.getNameFunc()());


// var name = "The Window";
// var object = {
//   name: "My Object",
//   getNameFunc: function () {
//     var that = this;
//     return function () {
//       return that.name;
//     };
//   }
// };
// alert(object.getNameFunc()());


var arr = document.getElementsByTagName("p");
for(var i = 0; i<arr.length; i++){
  // (function (arg){//这个函数对象有一个本地私有变量arg(形参)，该函数的function scope的closure对象属性有两个引用：arr和i。i的值随外部改变，但是本地的私有变量(形参)arg不会受影响，其值在一开始被调用时就决定了
  //      arr[i].onclick = function () {//onclick函数实例的function scope的closure对象属性有一个引用arg
  //            alert(arg+1);//只要外部空间的arg不变，这里的引用值就不会改变
  //      }
  // })(i);//立即执行匿名函数，传递下标i(实参)  
  arr[i].onclick = (function(arg){
    return function(){
      alert(arg+1)
    }
  })(i)
}
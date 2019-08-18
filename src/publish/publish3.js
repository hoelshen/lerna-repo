


// // 渲染列表
// const Render = {
//   // 初始化
//   init: function (arr) {
//   const fragement = document.createDocumentFragment();

//   arr.forEach(a => {
//     var li = document.createElement('li');
//     li.textContent = a;
//       fragement.appendChild(li);
//     })
//     ul.appendChild(fragement);
//   },
//   change(value){
//     var li = document.createElement('li');
//     li.textContent = value;
//     const fragement = document.createDocumentFragment();
//     fragement.appendChild(li);
//     ul.appendChild(fragement);
//   }
// };
// // 初始化
// window.onload = function () {
//   const btn = document.getElementById('btn');
//   const ul = document.getElementById('ul'); 

// // 初始数组
// const arr = [1, 2, 3, 4];
//   Render.init(arr);

// // 监听数组
// const newArr = new Proxy(arr, {
//   get: function(target, key, receiver) {
//     return Reflect.get(target, key, receiver);
//   },
//   set: function(target, key, value, receiver) {
//     if (key !== 'length') {
//       Render.change(value);
//     }
//     return Reflect.set(target, key, value, receiver);
//   },
// });

//   // push数字
//   btn.addEventListener('click', function () {
//     newArr.push(newArr.length+1)
//   });
// }













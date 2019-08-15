


// var obj = {
//   a: 1
// };
// Object.observe(obj, output); //为对象指定监视时调用的回调函数

// obj.b = 2; //添加属性
// obj.a = 2; //修改属性值
// Object.defineProperties(obj, {
//   a: {
//     enumerable: false
//   }
// }); //修改属性设定
// delete obj.b; //删除属性  
// function output(change) {
//   //回调函数，可以在此处书写在页面上的输出。
// }


// Object.defineProperty(
//   obj,
//   'a',
//   {
//     get:function(){
//       return 
//     },
//    set:function(val){
//      console.log('val: ', val);
//      return  2 + val
//    } 
//   }
// );  //writable
// const a = obj.a;
// console.log('a: ', a);
// {type: "reconfigure",}

// Object.preventExtensions(); 
// {type: "preventExtensions",}

// Object.setPrototypeOf ||  __proto__setter  || 
// {type: "setPrototype",}




// function observer(changes) {
//   for (var change of changes) {
//     if (change.type == "recalc") {
//       change.object.c =
//         change.object.oldValue +
//         change.object.a +
//         change.object.b;
//     }
//   }
// }

// function changeObj(a, b) {
//   var notifier = Object.getNotifier(obj);
//   obj.a = a * 2;
//   obj.b = b * 3;
//   // 把改变事件排到一个集合中 
//   notifier.notify({
//     type: "recalc",
//     name: "c",
//     oldValue: obj.c
//   });
// }
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// Object.observe(
//     obj,
//     observer,    
//     ['recalc']
// )
// Object.deliverChangeRecords(observer);

// changeObj(3, 11)
// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);

// 我们用完成改变事件记录来调用notifier.notify()



// var obj = {
//   a: 1,
//   b: 2
// };
// Object.observe(obj, function observer(changes) {
//   for (var change of changes) {
//     if (change.type == "setPrototype") {
//       Object.unobserve(
//         change.object, observer
//       );
//       break;
//     }
//   }
// });



var obj3 = {_time: new Date(0)};
var notifier = Object.getNotifier(obj3); //获取Notifier对象

Object.defineProperties(obj3, { //设置对象的可访问属性 
  _time: {
      enumerable: false,
      configrable: false
  },
  seen: {
      set: function(val) {
          var notifier = Object.getNotifier(this);
          notifier.notify({
              type: 'time_updated', //定义time_updated事件
              name: 'seen',
              oldValue: this._time
          });
          this._time = val;
      },
      get: function() {
          return this._time;
      }
  }
});
Object.observe(obj3, output); //为对象指定监视时调用的回调函数
function output (changes) {
  changes.forEach(function(change, i) {
    console.log(change, i)
  });
}
obj3.seen = new Date(2013, 0, 1, 0, 0, 0); //触发time_updated事件
Object.deliverChangeRecords(output); 
obj3.seen = new Date(2013, 0, 2, 0, 0, 0); //触发time_updated事件
Object.deliverChangeRecords(output); 
obj3.seen = new Date(2013, 0, 3, 0, 0, 0); //触发time_updated事件
Object.deliverChangeRecords(output); 
obj3.seen = new Date(2013, 0, 4, 0, 0, 0); //触发time_updated事件
Object.deliverChangeRecords(output); 
obj3.seen = new Date(2013, 0, 5, 0, 0, 0); //触发time_updated事件
Object.deliverChangeRecords(output); 
obj3.seen = new Date(2013, 0, 6, 0, 0, 0); //触发time_updated事件
Object.deliverChangeRecords(output); 
obj3.seen = new Date(2013, 0, 7, 0, 0, 0); //触发time_updated事件
Object.deliverChangeRecords(output); 
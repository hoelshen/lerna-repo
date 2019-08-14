var obj = {
  a: 1,
  b: 2
};
Object.observe(
  obj,
  function (changes) {
    for (var change of changes) {
      console.log(change);
    }
  },
  ["add", "update", "delete", "reconfigure"]
);
// obj.c = 3;
// { name: "c", object: obj, type: "add" }
// obj.a = 42;
// { name: "a", object: obj, type: "update", oldValue: 1 }
// delete obj.b;
// { name: "b", object: obj, type: "delete", oldValue: 2 }
// function add(){
//   console.log('d:',obj.a)
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




function observer(changes) {
  for (var change of changes) {
    if (change.type == "recalc") {
      change.object.c =
        change.object.oldValue +
        change.object.a +
        change.object.b;
    }
  }
}

function changeObj(a, b) {
  var notifier = Object.getNotifier(obj);
  obj.a = a * 2;
  obj.b = b * 3;
  // 把改变事件排到一个集合中 
  notifier.notify({
    type: "recalc",
    name: "c",
    oldValue: obj.c
  });
}
var obj = {
  a: 1,
  b: 2,
  c: 3
};
// Object.observe(
//     obj,
//     observer,    
//     ['recalc']
// )
Object.deliverChangeRecords(observer);

changeObj(3, 11)
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

// 我们用完成改变事件记录来调用notifier.notify()



var obj = {
  a: 1,
  b: 2
};
Object.observe(obj, function observer(changes) {
  for (var change of changes) {
    if (change.type == "setPrototype") {
      Object.unobserve(
        change.object, observer
      );
      break;
    }
  }
});
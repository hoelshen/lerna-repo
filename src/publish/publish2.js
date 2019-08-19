// class EventEmit{

//   constructor(){
//     this._events = this._events || new Map();
//   }
//   //apply call 
//   //在少参数时， call的性能更好
//   //在多参数时， apply 的性能更好
//   emit(type, ...args){
//     let handler;
//     // 从储存事件键值对的this._events中获取对应事件回调函数
//     handler = this._events.get(type);
//     if (args.length > 0) {
//       handler.apply(this, args);
//     } else {
//       handler.call(this);
//     }
//     return true;
//   }
//   // 监听名为type的事件
//   on(type, fn){
//   // 将type事件以及对应的fn函数放入this._events中储存
//   if (!this._events.get(type)) {
//     this._events.set(type, fn);
//   }
//   }
// }


// function  Pub(){
//   this.handler  = {}
// }

// Pub.prototype = {
//   on(name,cb){
//     console.log('cb: ', cb);
//     let self = this;
//     if( !(name in self.handler) ){
//       this.handler[name] = [];
//     }
//     self.handler[name].push(cb)
//     return this
//   },
//   emit(name){
//     console.log('name: ', name);
//     let self = this;
//     let handlerArg = Array.prototype.slice.call(arguments, 1);

//     for(let i in self.handler[name]){
//       self.handler[name][i].apply(self,handlerArg)

//     }
//     return self
//   }
// }

// var pub = new Pub();

// pub.on('some', function(data){
//   console.log('data: ', data);
//   console.log('触发了', data+1)
// })
// pub.on('some1', function(data){
//   console.log('some1', data+2)
// })

// pub.emit('some', 2);
// pub.emit('some1', 2);











function Pub(){
  this.handlers = {}
}

Pub.prototype = {
  //注册  绑定名称 和 回调
  on(name, cb){
    console.log('name: ', name);
    var self  = this;
    if( !(name in self.handlers)){
      self.handlers[name] = [];
    }
    self.handlers[name].push(cb)
    return this
  },
  //激活
  emit(name){
    var self = this;
    var handlerArg = Array.prototype.slice.call(arguments, 1);

    for(let i in self.handlers[name]){
      self.handlers[name][i].apply(self, handlerArg);
    }
    return self;
  },
  remove(name, cb){
     //移除事件
     console.log('name, cb: ', name, cb);

     let fns = this.handlers[name]
     if(!fns || !cb){
          return false
     }
     for(let l = fns.length -1; l >=0; l--){
          let _fn = fns[l];
          console.log('_fn: ', _fn);
          console.log('name, cb: ',  cb == _fn );

          if(_fn()  == cb()){
               console.log('1')
               fns.splice(l,1)
          };
     }
  }
}

var pub = new Pub();
pub.on('some', function(data){
  console.log('data: ', data);
  console.log('触发some', data+1)
})
pub.on('some1', function(data){
  console.log('data1: ', data);
  console.log('触发some1', data+2)
})

pub.emit('some', 2);

pub.emit('some1', 2);

pub.remove('some', function(data){
     console.log('data: ', data);
     console.log('触发some', data+1)
})
pub.emit('some', 4);
// window.onload = function(){

//  var test = document.getElementById("btn");
//   // 创建事件
//  var evt = document.createEvent('Event');
//  // 定义事件类型
//  evt.initEvent('customEvent',true,true);
//  // 监听事件
//  console.log('test: ', test);
//  test.addEventListener('customEvent',function(){
//       console.log("111");
//  },false);
//  // 触发事件
//  test.dispatchEvent(evt);

//  //自定义事件无非就是监听事件，然后自己运行回调函数，上面的initevent
//  //  第二个参数是是否冒泡
//  //  第三个参数是否使用preventDefault()阻止默认行为



// }

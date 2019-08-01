




// function laterCallback(){
//   console.log('print me later');
// }
// process.nextTick(laterCallback);

// console.log('print me first');

// //nextTick入队列  _tickCallback出队列

// //所有的js文件都处在loadEnvironment阶段
// //node常见的核心模块
// //1.module.runMain
// 启动main模块
// Module.runMain = function(){
//   //加载main模块
//   Module._load(process.argv[1], null, true);
//   //将nextTickQueue 中的回调函数先执行完

//   process._tickCallBack();
// }


// 文件的存取
// var module = new Module(filename,parent);
// if(isMain){
//   process.mainModule = module;
//   module.id = '.';
// }
// Module._cache[filename] = module;
// tryModuleLoad(module,filename);
// return module.exports;


// //Native模块
// function NativeModule(id){
//   this.filename = `$[id].js`;
//   this.id = id;
//   this.export  = {};
//   this.loaded = false;
//   this.loading = false;
// }


// node的核心模块
// //fs读取
// fs.readFile = function(path, options, callback){
//   callback = maybeCallback(callback || options);
//   options = getOptions(options, { flag: 'r'});

//   if(handleError( (path = getPathFromURL(path)), callback))
//     return;
//   if(!nullCheck(path,callback))
//     return;

//   var context = new ReadFileContext(callback, options.encoding);
//   context.isUserFd = isFd(path);

//   var req = new FSReqWrap();
//   req.context = context;
//   req.onComplete = readFileAfterOpen;

//   if(context.isUserFd){
//     process.nextTick(function(){
//       req.onComplete(null, path);
//     })
//     return;
//   }

//   binding.open(pathModule,_makeLong(path));
// }

// //libv不是单线程 线程池
// 队列管理
// process.nextTick()入列
// process._tickCallBack 出列

// 如何在合适的时候加入操作
// 通过timer（定时器、setTomeout、setinterval等）
// 通过setImmediate()


// 首先处理microtask队列里的事件，然后再从macrotask队列中取出一个事件并执行。 再一次事件循环中，microtask永远在mcrotask之前执行
// microtask  举例
//   process.nextTick
//   Promise

// macrotask 举例
//   setTimeout
//   setInterval
//   setImmediate
//   I/O

//   一个任务应该从macrotask队列开始执行，当这个macrotask结束后，所有的microtask将在同一个周期执行。


// node  nextTick原理
// function _tickCallBack(){
//   do{
//     //Node.js 在执行任务时，会一次性把Eventloop队列中的所有任务都取出来，依次执行
//     while(tickInfo[kIndex] < tickInfo[kLength]){
//       ++tickInfo[kIndex];
//       const tock = nextTickQueue.shift();
//       const callback = tock.callback;
//       const args = tock.args;


//       if(async_hook_fields[kDestory] > 0)
//         emitDestory(tock[async_id_symbol]);
      
//         _combinedTickCallback(args,callback);

//     }


    
//   }

// }


// const PI = Math.PI;
// exports.area = r => PI * r *r

// const circle = require('./circle.js')
// console.log(circle.area)


// 在node.js 和commonjs的区别主要体现在module.exports对象的具体实现上

// node.js 中。 module.exports是真正的特殊对象，是真正的对外暴露出口，而exports只是一个变量，是被默认的module.exports绑定。

// commonjs规范里没哦鱼module.exports对象。 在node.js中，它的实际含义是一个完全预先构建对象，不经过module.exports是不可能对外暴露对象


// main.js
//  console.log('main starting');
//  var a = require('./a.js');
//  var b = require('./b.js');
//  console.log('in main,', a.done, b.done)


// a.js
// console.log('a strating');
// exports.done = false;
// var b = require('./b.js');
// console.log('in a, b,.done', b.done);
// exports.done = true;
// console.log('a done');

// b.js
// console.log('b strating');
// exports.done = false;
// var b = require('./a.js');
// console.log('in a, b,.done', b.done);
// exports.done = true;
// console.log('b done');

// 先执行a.js
// console.log('a starting');
// exports.done = false;
// //只执行到这里，将输出返回调用模块(b.js),以下被丢弃
// var b = require('./b.js')
// console.log('in a,b.done = %j', b.done);
// exports.done = true;
// console.log('a done');

// 在执行b.js

// main starting
// a starting
// b starting
// in b,a.done = false;
// b done 
// in a,b.done = false;

// a done 
// in main, a.done=true, b.done=true;


// module.exports才是真正的接口， exports知不够是它的一个辅助工具
// 最终结果返回给调用方的是module.exports， 而不是exports。所有的exports收集到的属性和方法，最终都赋值给module.exports 

// module.exports 如果具备一些属性和方法， 那么exports收集来的信息将被忽略
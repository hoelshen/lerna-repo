const EventEmitter = require('events');
// const EventEmitter = require('./node-v10.16.0/lib/events.js');

// const observer = new EventEmitter();

// observer.on('topic', function(){
//   console.log('topic has occured')
// })

// observer.once('topic', function(msg){
//   console.log('message: '+ msg)
// })

// function main(){
//   console.log('start');
//   observer.emit('topic')
//   console.log('end')
// }

// main();


// const EventEmitter = require('./node-v10.16.0/lib/events.js');
// const util = require('./node-v10.16.0/lib/util.js')

// const myEmitter = function(){

// } 

// util.inherits(myEmitter, EventEmitter);

// myEmitter.on('event', (a,b)=>{
//   console.log(`'a+b'=${a+b}`);
// })

// myEmitter.emit('event', (1,2))


// myEmitter.setMaxListeners(Infinity);
// myEmitter();

// const EventEmitter = require('./node-v10.16.0/lib/events.js');
// import EventEmitter from 'events';
const observer = new EventEmitter();
// 获取监听信息
function onlyOnce(){
  console.log(observer.listeners('firstConnection'));
  observer.removeListener("firstConnection", onlyOnce);
  console.log(observer.listeners('firstConnection'))
}
observer.on("firstConnection", onlyOnce)
observer.emit("firstConnection")

const client = require('./node-v10.16.0/lib/http.js');
const clientRequest = client.ClientRequest;






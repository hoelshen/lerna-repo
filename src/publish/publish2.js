class EventEmit{
  constructor(){
    this._events = this._events || new Map();
  }
  //apply call 
  //在少参数时， call的性能更好
  //在多参数时， apply 的性能更好
  emit(type, ...args){
    let handler;
    // 从储存事件键值对的this._events中获取对应事件回调函数
    handler = this._events.get(type);
    if (args.length > 0) {
      handler.apply(this, args);
    } else {
      handler.call(this);
    }
    return true;
  }
  // 监听名为type的事件
  on(type, fn){
  // 将type事件以及对应的fn函数放入this._events中储存
  if (!this._events.get(type)) {
    this._events.set(type, fn);
  }
  }
}
let uid = 0;
class Dep {
  //订阅者
  constructor(){
    this.id == uid ++; 
    this.subs = [];  //订阅列表
  }  
  addSub(sub){
    this.subs.push(sub)
  }
  notify() {
    // 通知所有的订阅者(Watcher)，触发订阅者的相应逻辑处理
    this.subs.forEach(sub => sub.update());
  }
}


class Observer {
  constructor(value){
    this.value = value;
    this.walk(value)
  }


    //遍历属性并监听
    walk(value){
      Object.keys(value).forEach(key=>this.convert(key,value[key]))
    }

    convert(key, val){
      defineReactive(this.value, key, val)
    }

}

function defineReactive(obj, key, val){
  const dep = new Dep();

  let chlidOb = oberve(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get(){
      //如果dep类存在target属性，讲其添加到dep实例的subs数组中
      //target 指向一个watcher实例，每个watcher都是一个订阅者
      //watcher 实例在实例话过程中，会读取data中的某个属性，从而触发当前get
      if(Dep.target){
        dep.depend();
      }
    },
    set(newVal){
      if(val === newVal) return ;
      val = newVal;

      chlidOb = observe(newVal);

      //通知所有订阅者， 数值被改变了
      dep.notify();
    }
  })  

function observe(value){
  if(!value || typeof value !== 'objcet'){
    return ;
  }
  reutrn new Observer(value)
}











}







































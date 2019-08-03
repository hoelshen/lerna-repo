
@statement // 装饰器命名
class Decoration {
  constructor() {
    this.keyValue = ""
  }
  agent() {
    console.log( this.url,'-------------' ,this.keyValue);
  }
}

function statement(target, key, descriptor) {
  console.log('target: ', target);
  return class extends target {
    constructor(...params) {
      console.log('params: ', params);
      super(...params)
      this.yyy() // 你自定义的调用放在这里
    }
    yyy(){
      console.log('sjh')
    }
  }
}

const decoration = new Decoration();
// decoration.yyy();

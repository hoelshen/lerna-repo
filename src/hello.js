class Decoration {
  constructor() {
    this.keyValue = ""
  }
  @statement // 装饰器命名
  url = 'aaa'; //被装饰的属性
  agent() {
    console.log( this.url,'-------------' ,this.keyValue);
  }
}

// function statement(proto, key, descriptor){
//   console.log('sdsdsd',proto, key, descriptor);
//   descriptor.writable = false;  //被装饰属性不可写
// }


function statement(proto, key, descriptor) {
  console.log('sdsdsd',proto, key, descriptor);

  descriptor.writable = true
  // console.log(descriptor.initializer()) //被装饰的属性值；装饰私有属性特有的一个属性

  descriptor.initializer = function () {
    return 'url的值被修改了'
  }
}

var os = new Decoration();
console.log(os.agent());
class Decoration {
  constructor() {
    this.keyValue = "";
  }
  url='1'
  @pro //装饰原型属性
  agent() {
    console.log(this.url + "----------" + this.keyValue);
  }
}

function pro(proto, key, descriptor){
    console.log(proto, key, descriptor)//打印结果如下图; 
    let oldValue = descriptor.value //被装饰的函数
     descriptor.value = function(){
         console.log('被装饰的函数重写')
     }
}

var os = new Decoration();
  os.agent()


// class Decoration {
//   constructor() {
//     this.keyValue = "";
//   }
//   @skin
//   agent() {
//     console.log(this.keyValue + "----------" + this.age);
//   }
// }

// function skin(traget) {
//   traget.age = '18' //添加一个属性age并赋值18
// }

// var os = new Decoration();
// os.agent();
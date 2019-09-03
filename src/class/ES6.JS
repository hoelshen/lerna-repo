// class Point {
//   constructor (name, area) {
//     this.name = name;
//     this.area = area
//     // ...
//   }

//   toString () {
//     console.log('ssss')
//     // ...
//   }

//   toValue () {
//     // ...
//   }
// }

// 等同于下边的代码
// Point.prototype.constructor = function () { }
// Point.prototype.toString = function () { }
// Point.prototype.toValue = function () { }

// const point = new Point()
// point.toString()


// class Widget {
//   constructor(snaf){
//     this.snaf = snaf;
//   }
//   foo (baz) {
//     console.log(this.snaf)
//     bar.call(this, baz);
//   }

//   // ...
// }

// function bar(baz) {
//   console.log('baz', baz)
//   return this.snaf = baz;
// }


// const widget = new Widget('obj');
// const sjh = widget.foo('1');
// console.log('widget',widget.snaf)
// console.log('obj',widget.snaf)


// function Person(name) {
//   if (new.target !== undefined) {
//     this.name = name;
//   } else {
//     throw new Error('必须使用 new 命令生成实例');
//   }
// }

// // 另一种写法
// function Person(name) {
//   if (new.target === Person) {
//     this.name = name;
//   } else {
//     throw new Error('必须使用 new 命令生成实例');
//   }
// }

// var person = new Person('张三'); // 正确
// var notAPerson = Person.call(person, '张三');  // 报错

// class Rectangle {
//   constructor(length, width) {
//     console.log(new.target === Rectangle);
//     // ...
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super(length, width);
//   }
// }

// var obj = new Square(3); // 输出 false



// const obj = function Person(){
//   console.log('obj')

// }
// console.log('obj', obj.name)


(function a (){
  console.log('a', this)
})()

// function A(){
//    this.sayThis = function(){
//     console.log('sayThis', this)
//   }
// }
// function  B(){
//   console.log("thisb", this)
// }
// console.log('c: ', A.call(B));
// A.call(B)
// const a = new A();
// const { sayThis } =  a
// console.log('a', sayThis() )


// class Logger {
//   constructor() {
//     this.printName = this.printName.bind(this);
//   }
//   printName(name = 'there') {
//       this.print( `Hello ${name}` );
//   }

//   print(text) {
//       console.log(text);
//   }
// }

// const logger = new Logger();
// const {
//   printName
// } = logger;

// console.log('printName', logger.printName())
// console.log('printName', printName())

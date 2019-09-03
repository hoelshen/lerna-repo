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


// class Point {
//   constructor(){
//     console.log("this", this)
//   }
// }

// var point = new Point()
// //this指向point
// console.log(point.constructor === Point.prototype.constructor) // true


// class B {}
// let b = new B();

// b.constructor === B.prototype.constructor // true

// (function a(){
//   console.log('a', this)
// })()

//this 指向 window 

// class Foo {
//   constructor() {
//     return Object.create(null);
//   }
// }

// console.log('new Foo() instanceof Foo', new Foo() instanceof Foo);
// 实例不再指向 Foo

// class Foo {
//   constructor() {
//     return Object.create(null);
//   }
// }

// Foo()


// class Point {

//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   toString() {
//     return '(' + this.x + ', ' + this.y + ')';
//   }

// }

// var point = new Point(2, 3);

// point.toString() // (2, 3)

// point.hasOwnProperty('x') // true
// point.hasOwnProperty('y') // true
// point.hasOwnProperty('toString') // false
// point.__proto__.hasOwnProperty('toString') // true

// x 和 y 都是实例对象point 自身的属性（因为定义在 this 变量上）， 所以 hasOwnPropery 返回 tru， 而toString是原型对象的属性（定义在 Point类上）， 所以 hasOwnProperty 方法返回 false. 


// class MyClass {
//   constructor() {
//     // ...
//   }
//   get prop() {
//     return console.log('getter', 'getter');
//   }
//   set prop(value) {
//     console.log('setter: '+value);
//   }
// }

// let inst = new MyClass();

// inst.prop = 123;
// // setter: 123

// inst.prop


// class Foo {
//   #privateValue = 42;
//   static getPrivateValue(foo) {
//     return foo.#privateValue;
//   }
// }

// console.log('Foo.getPrivateValue(new Foo());', Foo.getPrivateValue(new Foo())) // 



















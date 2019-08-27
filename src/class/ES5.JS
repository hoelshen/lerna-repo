// function Person(name, age, sex){
//   this.name = name;
//   this.age = age;
//   this.sex =sex;
// }


// Person.prototype.sayHello = function(){
//   console.log(this.name)
// }



// function Person(name){



// }

// Person.prototype = {
//   constructor : Person,
//   sayHello: function(){


//   }
// }



// var obj1 = new Person('red', 10, 'man');
// var obj2 = new Person('yellow', 11, 'male');
// console.log('obj1.sayHello === obj2.sayHello',obj1.sayHello() === obj2.sayHello())


// class Rectangle {
//   // constructor
//   constructor(height, width) {
//       this.height = height;
//       this.width = width;
//   }
//   // Getter
//   get area() {
//       return this.calcArea()
//   }
//   // Method
//   calcArea() {
//       return this.height * this.width;
//   }
// }
// const square = new Rectangle(10, 10);

// console.log(square.area);

// wyqn();

// const wyqn = function(){
//   console.log('wyqn')
// }



//函数表达式 
//var math ={
//   'factorial': function factorial(n){
//     if(n<=1){
//       return 1
//     }
//     return n* factorial(n-1)
//   }
// }
// const wyqn = math.factorial(3);
// console.log('wyqn: ', wyqn);
// wyqn


//借用构造函数继承   
// .call/ apply 函数的时候将参数传给父类， 再将 父类 的属性绑定到 子类 的 this 上
//缺点 就是没有继承到父类的原型方法和属性
function Person(name, grade) {
  this.name = name //实例属性
  this.grade = grade // 实例属性
  // this.sayHello = function() {   //实例方法
  //   console.log('hello', this.name)
  // }
}

// Person.prototype.sayHello = function(){
//   console.log('hello' ,this.name)
// }

function Student(name, grade, sex) {
  // Person.apply(this,arguments)
  // Person.call(this, name, grade)
  // this.sex = sex;
  // this.name = name  //实例属性
  // this.grade = grade  // 实例属性
  this.sayIntroduce = function () {
    console.log('sayIntroduce', this.name)
  }
}
// var std1 = new Student('b', 11, 'man')
// var Per1 = new Person('sjh', 23, 'man')
// Per1.sayHello()
// console.log('Per1.name', Per1.sex) //拿不到子类的东西， 不然就是双向绑定了
// Per1.sayIntroduce() //拿不到子类的东西， 不然就是双向绑定了
// std1.sayHello();
// std1.sayIntroduce();
// console.log('std1.name: ', std1.name);
// console.log('std1.grade: ', std1.grade);
// console.log('std1.sex: ', std1.sex);

// console.log('std1.name: ', Person);
// console.log( " student instanceof Student",  std1 instanceof Student)
// console.log( " student instanceof Student",  std1 instanceof Person)




//prototype继承

// Student.prototype = new Person();
// Student.prototype.constructor = Student;
// var std1 = new Student('b', 11)
// console.log('std1.name: ', std1.name);
// console.log('std1.grade: ', std1.grade);
// console.log('std1.prototype: ', Student.prototype);
// // std1.sayHello();


//直接继承
// Student.prototype = Person.prototype;
// Student.prototype.constructor = Student;
// var std1 = new Student('b', 11)
// // std1.sayHello();
// console.log(Student.prototype.constructor); //Student
// console.log(Person.prototype.constructor); //Student




// 空对象
// var Obj = function () {}
// Obj.prototype = Person.prototype
// Student.prototype = Obj.prototype;
// Student.prototype = new Obj();
// Student.prototype.constructor = Student;


// function Animal(name) {
//   this.name = name
// }
// Animal.prototype.species = 'animal'

// function Leo(name) {

//   Animal.call(this, name)

// }

// Leo.prototype = Animal.prototype
// Leo.prototype.constructor = Leo


// console.log('Leo.prototype.constructor', Leo.prototype.constructor);

// console.log('Leo.prototype', Leo.prototype)



// function Animal(name) {
//   this.name = name
// }
// Animal.prototype.species = 'animal'

// function Leo(name) {
//   Animal.call(this, name)
// }
// Leo.prototype = new Animal()
// Leo.prototype.contructor = Leo



var ar1 = new Array()
console.log( typeof ar1)
var ar2 = [];
console.log(typeof ar2)
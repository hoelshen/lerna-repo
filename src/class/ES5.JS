
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
function Person(name){
  this.name = name
}

Person.prototype.sayHello = function(){
  console.log('hello' ,this.name)
}

function Student(name, grade, sex){
  Person.apply(this,arguments)
  this.name = name;
  this.grade = grade
  this.sex = sex;
  this.sayIntroduce = function(){
    console.log('sayIntroduce', this.name)
  }
}
var std1 = new Student('b', 11)
var Per1 = new Person('sjh')
Per1.sayHello()
std1.sayHello();
// std1.sayIntroduce();
// console.log('std1.name: ', std1.name);
// console.log('std1.name: ', std1.grade);
// console.log('std1.name: ', Person);
console.log( " student instanceof Student",  std1 instanceof Student,  )
console.log( " student instanceof Student",  std1 instanceof Person,  )










//构造函数绑定

// Student.prototype = new Person();
// Student.prototype.constrctor = Student;
// var std1 = new Student('b', 11)
// std1.sayHello();

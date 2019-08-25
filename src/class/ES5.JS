// function Person(name, age, sex){
//   this.name = name;
//   this.age = age;
//   this.sex =sex;
// }


// Person.prototype.sayHello = function(){
//   console.log(this.name)
// }



function Person(name){



}

Person.prototype = {
  constructor : Person,
  sayHello: function(){


  }
}



var obj1 = new Person('red', 10, 'man');
var obj2 = new Person('yellow', 11, 'male');
console.log('obj1.sayHello === obj2.sayHello',obj1.sayHello() === obj2.sayHello())


class Rectangle {
  // constructor
  constructor(height, width) {
      this.height = height;
      this.width = width;
  }
  // Getter
  get area() {
      return this.calcArea()
  }
  // Method
  calcArea() {
      return this.height * this.width;
  }
}
const square = new Rectangle(10, 10);

console.log(square.area);


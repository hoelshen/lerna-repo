class Parent{
  constructor(){
    if(new.target === Parent){
      console.log('Parent instaniated');
    }
    else{
      console.log('A child instantiated')
    }
  }
}


class Child extends Parent{}


var a = new Parent();
//Parent instantiated

var b = new Child();
//A child instantiated
//constructor实际上被给定了类的词法名称。 
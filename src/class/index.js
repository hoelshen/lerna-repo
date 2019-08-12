var o1 = {
  foo(){
    console.log('o1:foo')
  }
}

var o2 = {
  foo(){
    super.foo();
    console.log("o2: foo")
  }
}

Object.setPrototypeOf(o2, o1);

o2.foo();
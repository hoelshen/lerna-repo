class Person {
  @nonenumerable
  get kidCount() { return this.children.length; }
}

// let description = {
//   type: 'accessor',
//   get: specifiedGetter,
//   enumerable: true,
//   configurable: true
// }

function nonenumerable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}

var person = new Person();

person.kidCount();

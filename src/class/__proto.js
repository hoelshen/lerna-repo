let obj1 = new Object();
obj.toString();

console.log('obj', obj.prototype)
console.log('obj', obj)

// 当函数以构造函数调用时，它所创建的对象中都会有一个隐含的属性指向该构造函数的原型对象，我们可以通过__proto__来访问该属性
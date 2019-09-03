"use strict";

var obj = {
  foo: {
    bar: {
      baz: function baz() {
        return 42;
      }
    }
  }
};
var baz = obj?.foo?.bar?.baz(); // 42

console.log('baz', baz);

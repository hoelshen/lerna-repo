class Point {
  constructor (name, area) {
    this.name = name;
    this.area = area
    // ...
  }

  toString () {
    console.log('ssss')
    // ...
  }

  toValue () {
    // ...
  }
}

// 等同于下边的代码
// Point.prototype.constructor = function () { }
// Point.prototype.toString = function () { }
// Point.prototype.toValue = function () { }

const point = new Point()
point.toString()
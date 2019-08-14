"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function get1() {
  return 1;
}

function get2() {
  return 2;
}

function get3() {
  return 3;
}

function get4() {
  return 4;
}

(function () {
  var _async = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var g1, g2, g3, g4;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {} catch (err) {
              console.log('err: ', err);
            }

            g1 = get1();
            g2 = get2();
            g3 = get3();
            g4 = get4();
            _context.next = 7;
            return Promise.all([g1, g2, g3, g4]).then(function (data) {
              console.log(data);
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function async() {
    return _async.apply(this, arguments);
  }

  return async;
})()();

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      console.log('gen: ', gen);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function tell() {
  return new Promise(function (reslove, reject) {
    if (true) {
      reslove(1);
    } else {
      reject(2);
    }
  });
}

var a =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return tell().then(function (res) {
                  console.log('res', res);
                })["catch"](function (err) {
                  console.log('err: ', err);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

    return function a() {
      return _ref.apply(this, arguments);
    };
  }();

console.log('a', a());
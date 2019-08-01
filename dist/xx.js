"use strict";

var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

var Decoration = (_class = (_temp =
/*#__PURE__*/
function () {
  function Decoration() {
    _classCallCheck(this, Decoration);

    _initializerDefineProperty(this, "url", _descriptor, this);

    this.keyValue = "";
  }

  _createClass(Decoration, [{
    key: "agent",
    //被装饰的属性
    value: function agent() {
      console.log('this.url+', this.keyValue);
    }
  }]);

  return Decoration;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "url", [statement], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'aaa';
  }
})), _class);

function statement(proto, key, descriptor) {
  console.log('sdsdsd', proto, key, descriptor);
  console.log('2323232323', this);
  descriptor.writable = fasle; //被装饰属性不可写
}

var os = new Decoration();
console.log(os.agent);

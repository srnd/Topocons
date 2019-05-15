"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodDrink = function SvgFoodDrink(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M13 2a1 1 0 0 0-.535 1.854C12.168 7.75 10 12.024 10 16c0 .267.01.506.016.756a1 1 0 0 0 .011.527c.13 3.01.666 4.76.559 6.026-.122 1.436-.586 2.673-.586 3.324 0 .94.497 1.367 1.35 1.367h7.3c.853 0 1.35-.427 1.35-1.367 0-.651-.464-1.887-.586-3.324-.122-1.437.586-3.49.586-7.309 0-3.976-2.168-8.25-2.465-12.146A1 1 0 0 0 17 2h-4zm1.352 3h1.296c.141 1.005.375 2.005.635 3h-2.566c.26-.995.494-1.995.635-3zm-1.97 8h5.235c.23 1.038.383 2.04.383 3 0 2.009-.21 3.498-.379 4.695-.016.111-.022.198-.037.305h-5.166c-.015-.107-.021-.193-.037-.305A38.471 38.471 0 0 1 12.078 18H14a1 1 0 1 0 0-2h-2c0-.96.153-1.962.383-3z"
  }));
};

var _default = SvgFoodDrink;
exports["default"] = _default;
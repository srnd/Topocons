"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFunction = function SvgFunction(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M22.047 3c-6.277 0-6.98 7.011-7.347 9h-3.268l-.417 2h3.339c-1.855 11.024-2.65 11.781-3.565 11.781-.83-2.323-1.434-3.066-2.692-3.066-1.764 0-2.122 1.454-2.122 2.005C5.975 25.958 7 27 9 27c7.403 0 7.993-6.073 9.153-13h3.416l.417-2h-3.528c.371-2.876.769-7.035 1.862-7.781.181.48.848 3.066 2.696 3.066 1.986 0 2.152-1.852 2.152-2.07C25.166 4.551 24.792 3 22.047 3z"
  }));
};

var _default = SvgFunction;
exports["default"] = _default;
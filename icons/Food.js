"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFood = function SvgFood(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M11.627 3l-.797 2.07c8.318.647 13.453 5.782 14.1 14.1l2.07-.797C27 9.883 20.117 3 11.627 3zm-1.555 4.04L3.092 25.19c-.413 1.075.642 2.13 1.717 1.717l18.152-6.98c-.385-7.872-5.016-12.504-12.889-12.889zM12.5 10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm4.5 5a2 2 0 1 1 .001 3.999A2 2 0 0 1 17 15zm-8 3a2 2 0 1 1 .001 3.999A2 2 0 0 1 9 18z"
  }));
};

var _default = SvgFood;
exports["default"] = _default;
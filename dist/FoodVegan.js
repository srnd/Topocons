"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodVegan = function SvgFoodVegan(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M20.455 4C17 4 15 7 15 7s-2-3-5.455-3A6.545 6.545 0 0 0 3 10.545c0 6.341 7.421 12.406 10.796 15.052 0 0 .55.403 1.204.403s1.204-.403 1.204-.403C19.579 22.951 27 16.886 27 10.545A6.545 6.545 0 0 0 20.455 4zm-6.15 16.328l-5.616-9.2A.742.742 0 0 1 9.322 10h1.057c.383 0 .734.211.915.548l3.376 6.302c.141.264.52.264.661 0l3.376-6.302c.18-.337.532-.548.914-.548h1.057c.579 0 .935.634.633 1.128l-5.616 9.2a.814.814 0 0 1-1.39 0z"
  }));
};

var _default = SvgFoodVegan;
exports["default"] = _default;
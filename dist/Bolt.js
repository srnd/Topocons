"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBolt = function SvgBolt(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M17 2a1 1 0 0 0-.877.521l-7.95 12.913v.002A1 1 0 0 0 8 16a1 1 0 0 0 1 1h5.5l-1.48 9.8a1 1 0 0 0-.02.2 1 1 0 0 0 1 1 1 1 0 0 0 .883-.533h.002l7.922-12.877-.01-.018A.974.974 0 0 0 23 14a1 1 0 0 0-1-1h-5.5l1.455-9.705A1 1 0 0 0 18 3a1 1 0 0 0-1-1z"
  }));
};

var _default = SvgBolt;
exports["default"] = _default;
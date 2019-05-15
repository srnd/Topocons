"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStoreDrive = function SvgStoreDrive(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M7 2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7zm8 3a6 6 0 1 1-3.375 10.959l1.254-1.88c.418-.628-.328-1.376-.955-.958l-1.883 1.256A6 6 0 0 1 15 5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM5 21.443V26a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4.557A3.96 3.96 0 0 1 23 22H7a3.96 3.96 0 0 1-2-.557zM22 24a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
  }));
};

var _default = SvgStoreDrive;
exports["default"] = _default;
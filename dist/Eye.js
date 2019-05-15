"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEye = function SvgEye(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M15 5C6.082 5 .321 14.211.217 14.379A1 1 0 0 0 0 15a1 1 0 0 0 .162.545 1 1 0 0 0 .004.006C.183 15.586 5.019 25 15 25c9.939 0 14.767-9.321 14.826-9.436a1 1 0 0 0 .012-.02A1 1 0 0 0 30 15a1 1 0 0 0-.215-.62 1 1 0 0 0-.002-.001C29.68 14.21 23.918 5 15 5zm0 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 4a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
  }));
};

var _default = SvgEye;
exports["default"] = _default;
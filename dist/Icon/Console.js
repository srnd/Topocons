"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgConsole = function SvgConsole(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M5 4a2 2 0 0 0-2 2v19a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V6a2 2 0 0 0-2-2H5zm0 5h20v15H5V9zm3.99 3.99a1 1 0 0 0-.697 1.717L10.586 17l-2.293 2.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-.717-.303zM15 19a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6z"
  }));
};

var _default = SvgConsole;
exports["default"] = _default;
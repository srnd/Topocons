"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDeleteErase = function SvgDeleteErase(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    style: {
      lineHeight: "normal",
      textIndent: 0,
      textAlign: "start",
      textDecorationLine: "none",
      textDecorationStyle: "solid",
      textDecorationColor: "#000",
      textTransform: "none",
      blockProgression: "tb",
      isolation: "auto",
      mixBlendMode: "normal"
    },
    d: "M19 2.016c-.883 0-1.764.334-2.432 1.002L3.02 16.568a3.456 3.456 0 0 0 0 4.866l4.548 4.548c.59.59 1.35.905 2.127.973A1 1 0 0 0 10 27h8a1 1 0 1 0 0-2h-4.586l12.568-12.568a3.456 3.456 0 0 0 0-4.866l-4.548-4.548A3.433 3.433 0 0 0 19 2.016zm-8.293 9.691l6.586 6.586-6.275 6.275a1.423 1.423 0 0 1-2.036 0L4.434 20.02a1.426 1.426 0 0 1 0-2.038l6.273-6.275zM22 25a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgDeleteErase;
exports["default"] = _default;
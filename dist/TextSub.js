"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTextSub = function SvgTextSub(props) {
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
    d: "M14.97 4.973a2 2 0 0 0-.284.027H7a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V7h5v16h-1a1 1 0 1 0 0 2h2.676a2 2 0 0 0 .648 0H18a1 1 0 1 0 0-2h-1V7h5v1a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1h-7.68a2 2 0 0 0-.35-.027zM27.474 20.04l-2.543 1.732v2.192l2.412-1.63h.13v7.706h2.544v-10h-2.543z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgTextSub;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgImageCrop = function SvgImageCrop(props) {
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
    d: "M7.477 2.979A1.5 1.5 0 0 0 6 4.5V6H4.5a1.5 1.5 0 0 0 0 3H6v12.5C6 22.864 7.136 24 8.5 24H21v1.5a1.5 1.5 0 0 0 3 0V24h1.5a1.5 1.5 0 1 0 0-3H10.414L21 10.414V19h3V7.414l2.707-2.707a1 1 0 0 0-.727-1.717 1 1 0 0 0-.687.303L22.586 6H11v3h8.586L9 19.586V4.5a1.5 1.5 0 0 0-1.523-1.521z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgImageCrop;
exports["default"] = _default;
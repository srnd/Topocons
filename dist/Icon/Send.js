"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSend = function SvgSend(props) {
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
    d: "M14.963 4a1 1 0 0 0-.838.514l-10 18A1 1 0 0 0 5 24h6.586l2.707 2.707a1 1 0 0 0 1.414 0L18.414 24H25a1 1 0 0 0 .875-1.486l-10-18A1 1 0 0 0 14.963 4zM15 7.06L23.299 22H18a1 1 0 0 0-.707.293L15 24.586v-9.854c0-.817-1.152-.99-1.393-.209L11.307 22H6.7L15 7.06z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgSend;
exports["default"] = _default;
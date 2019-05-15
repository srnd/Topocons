"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTextFormatUnderline = function SvgTextFormatUnderline(props) {
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
    d: "M7 4a1 1 0 1 0 0 2v9c0 4.17 3.409 8 8 8s8-3.83 8-8V6a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2v10.822c0 2.088-1.522 3.956-3.6 4.158A4.004 4.004 0 0 1 11 17V6a1 1 0 1 0 0-2H7zm0 21a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H7z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgTextFormatUnderline;
exports["default"] = _default;
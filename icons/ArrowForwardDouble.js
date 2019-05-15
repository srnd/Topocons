"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrowForwardDouble = function SvgArrowForwardDouble(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
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
    d: "M6.99 3.99a1 1 0 0 0-.697 1.717L15.586 15l-9.293 9.293a1 1 0 1 0 1.414 1.414l10-10a1 1 0 0 0 0-1.414l-10-10a1 1 0 0 0-.717-.303zm7 0a1 1 0 0 0-.697 1.717L22.586 15l-9.293 9.293a1 1 0 1 0 1.414 1.414l10-10a1 1 0 0 0 0-1.414l-10-10a1 1 0 0 0-.717-.303z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgArrowForwardDouble;
exports["default"] = _default;
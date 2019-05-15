"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCheckDouble = function SvgCheckDouble(props) {
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
    d: "M21.98 7.99a1 1 0 0 0-.687.303L12 17.586l-3.283-3.283a1 1 0 0 0-.01-.01A1 1 0 0 0 8 14a1 1 0 0 0-1 1 1 1 0 0 0 .293.707L10.586 19 9 20.586l-6.293-6.293a1 1 0 1 0-1.414 1.414l7 7a1 1 0 0 0 1.414 0l13-13a1 1 0 0 0-.727-1.717zM28 8a1 1 0 0 0-.707.293L15 20.586l-.293-.293-1.414 1.414 1 1a1 1 0 0 0 1.414 0l12.99-12.99A1 1 0 0 0 29 9a1 1 0 0 0-1-1z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgCheckDouble;
exports["default"] = _default;
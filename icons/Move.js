"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMove = function SvgMove(props) {
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
    d: "M14.984 2.986a1 1 0 0 0-.777.391 1 1 0 0 0-.004.006l-2.91 2.91a1 1 0 1 0 1.414 1.414L14 6.414V11a1 1 0 1 0 2 0V6.414l1.293 1.293a1 1 0 1 0 1.414-1.414l-2.916-2.916a1 1 0 0 0-.807-.39zM6.98 10.99a1 1 0 0 0-.687.303l-2.912 2.912a1 1 0 0 0-.004 1.588 1 1 0 0 0 .006.004l2.91 2.91a1 1 0 1 0 1.414-1.414L6.414 16H11a1 1 0 1 0 0-2H6.414l1.293-1.293a1 1 0 0 0-.727-1.717zm16.01 0a1 1 0 0 0-.697 1.717L23.586 14H19a1 1 0 1 0 0 2h4.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l2.912-2.912a1 1 0 0 0 .004-1.588 1 1 0 0 0-.006-.004l-2.91-2.91a1 1 0 0 0-.717-.303zm-8.006 6.996A1 1 0 0 0 14 19v4.586l-1.293-1.293a1 1 0 0 0-.717-.303 1 1 0 0 0-.697 1.717l2.912 2.912a1 1 0 0 0 1.592-.002l2.91-2.91a1 1 0 0 0-.717-1.72 1 1 0 0 0-.697.306L16 23.586V19a1 1 0 0 0-1.016-1.014z"
  }));
};

var _default = SvgMove;
exports["default"] = _default;
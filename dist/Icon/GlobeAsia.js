"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGlobeAsia = function SvgGlobeAsia(props) {
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
    d: "M15 3C8.384 3 3 8.384 3 15s5.384 12 12 12 12-5.384 12-12S21.616 3 15 3zm0 2c1.997 0 3.85.589 5.408 1.592L20 7l-1-1h-2v2h1l1 1 1 1v2l1 2h1v1h1l1-1h.951c.033.33.049.662.049 1l-2 1-1 1 1 2-1 2v1.145A9.964 9.964 0 0 1 15 25a9.985 9.985 0 0 1-9.955-10.91L6 16h1v-2l1-1 1 3h1v-5h1l1-1-1-1 1-2 1 2h1V7l.66-1.982c.114-.004.225-.018.34-.018zm-2 11l-2.057 1.959L11 20l1 1 1-1h1l1 1h1l1-2-1-3-1 1-2-1zm6 4v2l1-1-1-1zm-.988 1.97L16 23v1l3-1-.988-1.03z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgGlobeAsia;
exports["default"] = _default;
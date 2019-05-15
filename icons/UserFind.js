"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUserFind = function SvgUserFind(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
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
    d: "M15 3.002c-4.242 0-6 2.721-6 6 0 1.104.527 2.213.527 2.213-.212.122-.56.51-.472 1.197.164 1.283.72 1.61 1.074 1.637C10.264 15.246 11.55 16.777 12 17v2c-1 3-9 1-9 8h12.76A7.963 7.963 0 0 1 14 22c0-3.66 2.46-6.738 5.814-7.69.02-.087.048-.176.057-.261.354-.027.91-.354 1.074-1.637.088-.689-.26-1.075-.472-1.197 0 0 .527-1.002.527-2.213 0-2.428-.953-4.5-3-4.5 0 0-.711-1.5-3-1.5zM22 16c-3.302 0-6 2.698-6 6s2.698 6 6 6a5.954 5.954 0 0 0 3.469-1.117l2.824 2.824a1 1 0 1 0 1.414-1.414l-2.824-2.824A5.954 5.954 0 0 0 28 22c0-3.302-2.698-6-6-6zm0 2c2.221 0 4 1.779 4 4s-1.779 4-4 4-4-1.779-4-4 1.779-4 4-4z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgUserFind;
exports["default"] = _default;
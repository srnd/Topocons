"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGlobeAmerica = function SvgGlobeAmerica(props) {
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
    d: "M15 3C8.384 3 3 8.384 3 15s5.384 12 12 12 12-5.384 12-12S21.616 3 15 3zm0 2c.338 0 .67.016 1 .049V6h2v-.543a9.978 9.978 0 0 1 5 3.553V12l1 2v1h1a9.977 9.977 0 0 1-8.617 9.895L20 22l1-1 1-2v-1l-1-1h-1l-1-1-1-1h-2l-1 1v1l-1 1v2l2 1-1.977 3.951A9.984 9.984 0 0 1 5 15a9.967 9.967 0 0 1 4-7.994V8L8 9v2l1 3 4 2h1v-1l-3-1v-2h3l1-2 2-1V8l-3-2-1.398-.7C13.37 5.113 14.172 5 15 5zm-1 8v1h2v-1h-2z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgGlobeAmerica;
exports["default"] = _default;
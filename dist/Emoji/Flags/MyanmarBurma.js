"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMyanmarBurma = function SvgMyanmarBurma(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32 62c13.06 0 24.17-8.35 28.29-20H3.71C7.83 53.65 18.94 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M32 2C18.94 2 7.83 10.35 3.71 22h56.57C56.17 10.35 45.06 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M60.29 42a30.086 30.086 0 0 0 0-20H3.71a30.086 30.086 0 0 0 0 20h56.58z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M32 41.08L43.74 50 39.3 35.5 51 26.51l-14.48-.04L32 12l-4.52 14.47-14.48.04 11.69 8.99L20.26 50z"
  }), _react["default"].createElement("linearGradient", {
    id: "myanmar-burma_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 62,
    x2: 32,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1a1a"
  }), _react["default"].createElement("stop", {
    offset: 0.102,
    stopColor: "#393939",
    stopOpacity: 0.949
  }), _react["default"].createElement("stop", {
    offset: 0.347,
    stopColor: "#7f7f7f",
    stopOpacity: 0.826
  }), _react["default"].createElement("stop", {
    offset: 0.569,
    stopColor: "#b6b6b6",
    stopOpacity: 0.716
  }), _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#dedede",
    stopOpacity: 0.621
  }), _react["default"].createElement("stop", {
    offset: 0.908,
    stopColor: "#f6f6f6",
    stopOpacity: 0.546
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0.5
  })), _react["default"].createElement("circle", {
    opacity: 0.1,
    fill: "url(#myanmar-burma_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgMyanmarBurma;
exports["default"] = _default;
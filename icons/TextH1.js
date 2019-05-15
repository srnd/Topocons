"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTextH1 = function SvgTextH1(props) {
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
    d: "M3.97 4.973A2 2 0 0 0 3.687 5H1a1 1 0 1 0 0 2h1v14H1a1 1 0 1 0 0 2h2.676a2 2 0 0 0 .648 0H7a1 1 0 1 0 0-2H6v-6h8v6h-1a1 1 0 1 0 0 2h2.676a2 2 0 0 0 .648 0H19a1 1 0 1 0 0-2h-1V7h1a1 1 0 1 0 0-2h-2.68a2 2 0 0 0-.35-.027 2 2 0 0 0-.284.027H13a1 1 0 1 0 0 2h1v6H6V7h1a1 1 0 1 0 0-2H4.32a2 2 0 0 0-.35-.027zM26.44 8l-3.561 2.426v3.064l3.377-2.28h.183V22H30V8h-3.56z"
  }));
};

var _default = SvgTextH1;
exports["default"] = _default;
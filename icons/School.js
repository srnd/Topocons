"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSchool = function SvgSchool(props) {
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
    d: "M14.988 3a1 1 0 0 0-.531.16l-6 3.883a1 1 0 1 0 1.086 1.678L10 8.426v4.334l-7.504 4.377a1 1 0 1 0 1.008 1.726L4 18.574V26h9v-4h4v4h9v-7.426l.496.29a1 1 0 1 0 1.008-1.727L20 12.76V8.535l.445.297a1 1 0 1 0 1.11-1.664l-6-4A1 1 0 0 0 14.988 3zM12 8h2v2h-2V8zm4 0h2v2h-2V8zm-8 9h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM8 21h2v2H8v-2zm12 0h2v2h-2v-2z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgSchool;
exports["default"] = _default;
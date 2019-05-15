"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGit = function SvgGit(props) {
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
    d: "M9 3C6.803 3 5 4.803 5 7c0 1.85 1.284 3.406 3 3.855v8.29c-1.716.45-3 2.005-3 3.855 0 2.197 1.803 4 4 4s4-1.803 4-4c0-1.85-1.284-3.406-3-3.855v-3.952c.15.083.303.16.459.23 1.306.6 2.85.87 4.338 1.18 1.487.31 2.907.66 3.834 1.188.672.383 1.087.762 1.265 1.385C18.234 19.66 17 21.187 17 23c0 2.197 1.803 4 4 4s4-1.803 4-4c0-1.886-1.332-3.473-3.098-3.887-.279-1.386-1.184-2.434-2.283-3.06-1.323-.754-2.903-1.091-4.416-1.407-1.513-.315-2.968-.606-3.912-1.039-.472-.216-.801-.458-.996-.7C10.1 12.663 10 12.424 10 12v-1.145c1.716-.45 3-2.005 3-3.855 0-2.197-1.803-4-4-4zm0 2c1.116 0 2 .884 2 2a1.979 1.979 0 0 1-1.91 1.99 1 1 0 0 0-.106-.004 1 1 0 0 0-.076.004A1.98 1.98 0 0 1 7 7c0-1.116.884-2 2-2zm-.09 16.01a1 1 0 0 0 .182 0A1.98 1.98 0 0 1 11 23c0 1.116-.884 2-2 2s-2-.884-2-2c0-1.086.838-1.943 1.91-1.99zm12 0a1 1 0 0 0 .182 0A1.98 1.98 0 0 1 23 23c0 1.116-.884 2-2 2s-2-.884-2-2c0-1.086.838-1.943 1.91-1.99z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgGit;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGlobeEurope = function SvgGlobeEurope(props) {
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
    d: "M15 3C8.384 3 3 8.384 3 15s5.384 12 12 12 12-5.384 12-12S21.616 3 15 3zm0 2c1.894 0 3.656.533 5.164 1.443L20 7l1 1-1 1-1-1h-2l-2 2 1 2 1-1v-1h1l1 1-1 1-2 1-2 1h-1v2h1l2-1 1 1h1v-1l1-1 2-1v2h-2v1h2l2 3 1-1v-1h-1v-1h1l.96-.209a9.937 9.937 0 0 1-1.96 5.2V20h-1l-2-3-2 1-3-1-3 1-1 2 1 2h2l1-1 1 1v2.951c-.33.033-.662.049-1 .049-5.535 0-10-4.465-10-10 0-.914.133-1.795.361-2.635L6 12h1V9.01L7.006 9H8l.533-1.629c.412-.35.857-.66 1.322-.94L9 9h2l2-2V6h-1l-1 1V5.834A9.985 9.985 0 0 1 15 5zm-2 5v2h1v-2h-1z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgGlobeEurope;
exports["default"] = _default;
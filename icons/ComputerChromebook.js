"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgComputerChromebook = function SvgComputerChromebook(props) {
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
    d: "M4 5c-1.093 0-2 .907-2 2v15c0 .364.107.704.281 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1.281c.174-.296.281-.636.281-1V7c0-1.093-.907-2-2-2H4zm0 2h22v15H4V7zm11 2a4.986 4.986 0 0 0-3.996 2.004v.002l1.809 1.806A2.49 2.49 0 0 1 15 11.5c.559 0 1.07.19 1.486.5H19.5l-2.264.904c.164.332.264.702.264 1.096 0 .821-.402 1.545-1.014 2h.014l-1.982 2.977A5 5 0 1 0 15 9zm-3.996 2.006A4.97 4.97 0 0 0 10 14a5 5 0 0 0 4.51 4.975l.836-2.51c-.114.016-.228.035-.346.035a2.5 2.5 0 0 1-2.5-2.5l-1.496-2.994zM15 13a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgComputerChromebook;
exports["default"] = _default;
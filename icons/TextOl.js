"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTextOl = function SvgTextOl(props) {
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
    d: "M5.475 3.041l-1.528 1.04v1.314l1.448-.977h.08v4.623H7v-6H5.475zM11 6a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H11zm-5 6c-1.356 0-2.264.785-2.264 1.947v.024h1.362v-.028c0-.482.347-.822.85-.822.481 0 .796.288.796.717 0 .344-.218.64-1.076 1.433l-1.846 1.737V18h4.442v-1.156H5.8v-.078l.965-.887c1.036-.923 1.416-1.499 1.416-2.147C8.182 12.7 7.308 12 6 12zm5 2a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H11zm-5.02 6c-1.32 0-2.173.71-2.193 1.822H5.1c.016-.446.35-.742.847-.742.505 0 .819.258.819.672 0 .414-.32.686-.805.686h-.7v.998h.7c.553 0 .887.269.887.707 0 .426-.355.716-.868.716-.548 0-.9-.267-.92-.7H3.68C3.73 25.273 4.626 26 5.955 26c1.393 0 2.363-.718 2.363-1.748 0-.733-.5-1.25-1.285-1.332v-.076a1.283 1.283 0 0 0 1.076-1.29C8.11 20.637 7.242 20 5.98 20zM11 22a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H11z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgTextOl;
exports["default"] = _default;
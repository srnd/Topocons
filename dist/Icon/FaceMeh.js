"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFaceMeh = function SvgFaceMeh(props) {
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
    d: "M15 3C8.384 3 3 8.384 3 15s5.384 12 12 12 12-5.384 12-12S21.616 3 15 3zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S5 20.535 5 15 9.465 5 15 5zm-4.5 8A1.5 1.5 0 0 0 9 14.5a1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5zm9 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5zm-8.438 6a1 1 0 1 0 0 2h7.876a1 1 0 1 0 0-2h-7.875z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgFaceMeh;
exports["default"] = _default;
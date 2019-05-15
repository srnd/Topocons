"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMemo = function SvgMemo(props) {
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
    d: "M7 4C5.355 4 4 5.355 4 7v16c0 1.645 1.355 3 3 3h12.5a1 1 0 0 0 .707-.293l5.5-5.5A1 1 0 0 0 26 19.5V7c0-1.645-1.355-3-3-3H7zm0 2h16c.565 0 1 .435 1 1v12h-3a2 2 0 0 0-2 2v3H7c-.565 0-1-.435-1-1V7c0-.565.435-1 1-1zm3 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2zm-8 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgMemo;
exports["default"] = _default;
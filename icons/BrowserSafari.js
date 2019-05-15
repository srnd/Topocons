"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBrowserSafari = function SvgBrowserSafari(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm-.6 2.03V6h1.2v-.97a9.93 9.93 0 0 1 3.867 1.032l-.487.844 1.04.6.49-.85c1.125.745 2.09 1.71 2.834 2.834l-.85.49.6 1.04.843-.487a9.93 9.93 0 0 1 1.034 3.867H24v1.2h.97a9.93 9.93 0 0 1-1.032 3.867l-.844-.487-.6 1.04.85.49a10.049 10.049 0 0 1-2.834 2.834l-.49-.85-1.04.6.487.843a9.93 9.93 0 0 1-3.867 1.034V24h-1.2v.97a9.93 9.93 0 0 1-3.867-1.032l.487-.844-1.04-.6-.49.85a10.049 10.049 0 0 1-2.834-2.834l.85-.49-.6-1.04-.843.487A9.93 9.93 0 0 1 5.029 15.6H6v-1.2h-.97a9.93 9.93 0 0 1 1.032-3.867l.844.487.6-1.04-.85-.49A10.049 10.049 0 0 1 9.49 6.656l.49.85 1.04-.6-.487-.843A9.93 9.93 0 0 1 14.4 5.029zM21 9l-7.5 4.5L9 21l7.5-4.5L21 9z"
  }));
};

var _default = SvgBrowserSafari;
exports["default"] = _default;
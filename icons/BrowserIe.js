"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBrowserIe = function SvgBrowserIe(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M26.701 7.812c2.444-6.242-2.303-5.805-2.303-5.805-3.047 0-6.855 2.73-6.855 2.73S13 3.533 8.457 6.236c-4.95 3.105-4.787 8.619-4.787 8.619 4.026-5.673 9.629-7.976 9.629-7.976v.375C5.029 12.818 3.071 20.958 2.581 22.618S2.417 28 5.899 28s7.018-2.76 7.018-2.76.761.161 2.829.161c8.706 0 10.772-7.549 10.772-7.549h-7.726s-.542 2.464-3.317 2.464c-3.809 0-3.591-3.91-3.591-3.91h14.743c.709-10.064-8.214-11.509-8.214-11.509s3.153-2.194 5.875-2.194c4.315 0 2.275 4.974 2.275 4.974l.138.135zM12.486 25.128s-5.313 3.173-7.699.975c-1.277-2.2.799-5.313.799-5.313s1.756 3.207 6.9 4.338zm6.39-12.146h-7.013s-.089-3.363 3.594-3.363c3.56 0 3.419 3.363 3.419 3.363z"
  }));
};

var _default = SvgBrowserIe;
exports["default"] = _default;
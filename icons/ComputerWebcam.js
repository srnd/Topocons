"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgComputerWebcam = function SvgComputerWebcam(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3C9.477 3 5 7.477 5 13s4.477 10 10 10 10-4.477 10-10S20.523 3 15 3zm0 5a5 5 0 1 1-.001 10.001A5 5 0 0 1 15 8zm0 2a3 3 0 1 0 3 3c0-.305-.059-.593-.143-.87A1.499 1.499 0 0 1 15 11.5c0-.602.357-1.118.87-1.357A2.968 2.968 0 0 0 15 10zM9.863 23.832L7.53 25.119A1 1 0 0 0 7 26a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1 1 1 0 0 0-.53-.88l-2.333-1.288A11.927 11.927 0 0 1 15 25c-1.841 0-3.578-.428-5.137-1.168z"
  }));
};

var _default = SvgComputerWebcam;
exports["default"] = _default;
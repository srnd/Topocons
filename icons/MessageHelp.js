"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMessageHelp = function SvgMessageHelp(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm0 19.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 15 22.5zm2.068-7C16.406 16.111 16 16.512 16 17h-2c0-1.389.949-2.265 1.711-2.97C16.51 13.292 17 12.799 17 12c0-1.103-.897-2-2-2s-2 .897-2 2h-2c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.715-1.071 2.704-1.932 3.5z"
  }));
};

var _default = SvgMessageHelp;
exports["default"] = _default;
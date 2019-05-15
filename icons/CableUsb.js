"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCableUsb = function SvgCableUsb(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 2.027c-.323 0-.647.14-.832.418l-2 3A1 1 0 0 0 13 7h1v13.2a3.955 3.955 0 0 0-1.504-.52l-2.744-.344A1.988 1.988 0 0 1 8 17.352v-.536A2.99 2.99 0 0 0 10 14a3 3 0 1 0-6 0 2.99 2.99 0 0 0 2 2.816v.536a4.01 4.01 0 0 0 3.504 3.968l2.744.344A1.989 1.989 0 0 1 14 23.648v.63A1.99 1.99 0 0 0 13 26a2 2 0 1 0 4 0 1.99 1.99 0 0 0-1-1.723v-3.629c0-1.016.743-1.858 1.752-1.984l2.744-.344A4.01 4.01 0 0 0 24 14.352V14h.5a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 24.5 8h-3A1.5 1.5 0 0 0 20 9.5v3a1.5 1.5 0 0 0 1.5 1.5h.5v.352a1.988 1.988 0 0 1-1.752 1.984l-2.744.344A3.955 3.955 0 0 0 16 17.2V7h1a1.001 1.001 0 0 0 .832-1.555l-2-3c-.185-.278-.509-.418-.832-.418z"
  }));
};

var _default = SvgCableUsb;
exports["default"] = _default;
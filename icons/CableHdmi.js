"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCableHdmi = function SvgCableHdmi(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M27 9H3a2 2 0 0 0-2 2v5.5c0 .828.672 1.5 1.5 1.5s1.5.672 1.5 1.5.672 1.5 1.5 1.5h19c.828 0 1.5-.672 1.5-1.5s.672-1.5 1.5-1.5 1.5-.672 1.5-1.5V11a2 2 0 0 0-2-2zm-3 7a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0v-1H8v1a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2z"
  }));
};

var _default = SvgCableHdmi;
exports["default"] = _default;
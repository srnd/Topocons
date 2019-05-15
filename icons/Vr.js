"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVr = function SvgVr(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M14.984 1.986A1 1 0 0 0 14 3v5H7a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-7V3a1 1 0 0 0-1.016-1.014zm-14 8A1 1 0 0 0 0 11v9a1 1 0 1 0 2 0v-9A1 1 0 0 0 .984 9.986zm28 0A1 1 0 0 0 28 11v9a1 1 0 1 0 2 0v-9a1 1 0 0 0-1.016-1.014z"
  }));
};

var _default = SvgVr;
exports["default"] = _default;
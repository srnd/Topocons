"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDeleteTrash = function SvgDeleteTrash(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M14.984 2.486A1 1 0 0 0 14 3.5V4H8.5a1 1 0 0 0-1.014 1H6a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2h-1.486A1 1 0 0 0 21.5 4H16v-.5a1 1 0 0 0-1.016-1.014zM6 9l1.793 15.234A1.997 1.997 0 0 0 9.777 26h10.446a1.998 1.998 0 0 0 1.984-1.766L24 9H6z"
  }));
};

var _default = SvgDeleteTrash;
exports["default"] = _default;
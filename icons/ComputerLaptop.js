"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgComputerLaptop = function SvgComputerLaptop(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M27.722 23c.172-.295.278-.634.278-1V7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v15c0 .366.106.705.278 1H0v1a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2v-1h-2.278zM18 22a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1H4V7h22l.001 15H18z"
  }));
};

var _default = SvgComputerLaptop;
exports["default"] = _default;
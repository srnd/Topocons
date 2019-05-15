"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgShieldWarn = function SvgShieldWarn(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3c-4.602 0-9.389 1.037-9.389 1.037l-.004.004A2 2 0 0 0 4 6v6c0 10.398 10.021 14.744 10.021 14.744A2 2 0 0 0 15 27a2 2 0 0 0 .975-.256h.004S26 22.398 26 12V6a2 2 0 0 0-1.611-1.963S19.602 3 15 3zm-1.213 4h2.426l-.201 9h-2.024l-.2-9zm1.217 11.81c.822 0 1.314.443 1.314 1.198 0 .74-.492 1.181-1.314 1.181-.828 0-1.324-.44-1.324-1.181 0-.755.495-1.197 1.324-1.197z"
  }));
};

var _default = SvgShieldWarn;
exports["default"] = _default;
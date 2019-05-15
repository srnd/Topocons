"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMessageWarn = function SvgMessageWarn(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3a2 2 0 0 0-1.846 1.229L2.301 22.947v.002A2 2 0 0 0 2 24a2 2 0 0 0 2 2 2 2 0 0 0 .14-.006l.005.006h21.71l.004-.008A2 2 0 0 0 26 26a2 2 0 0 0 2-2 2 2 0 0 0-.3-1.053l-.016-.027a2 2 0 0 0-.002-.002L16.846 4.228A2 2 0 0 0 15 3zm-1.213 8.36h2.426l-.201 6.472h-2.024l-.2-6.473zm1.217 8.45c.822 0 1.314.443 1.314 1.198 0 .74-.492 1.181-1.314 1.181-.828 0-1.324-.44-1.324-1.181 0-.755.495-1.197 1.324-1.197z"
  }));
};

var _default = SvgMessageWarn;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLegal = function SvgLegal(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M7 4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2V10c0-2.206 1.794-4 4-4h10a2 2 0 0 0-2-2H7zm4 4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H11zm2 4h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zm0 4h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zm0 4h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2z"
  }));
};

var _default = SvgLegal;
exports["default"] = _default;
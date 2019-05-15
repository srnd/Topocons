"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTextParagraph = function SvgTextParagraph(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M20.984 3.986A1 1 0 0 0 20.84 4H11a6 6 0 1 0 0 12h4v9a1 1 0 1 0 2 0V6h3v19a1 1 0 1 0 2 0V6h1a1 1 0 1 0 0-2h-1.846a1 1 0 0 0-.17-.014z"
  }));
};

var _default = SvgTextParagraph;
exports["default"] = _default;
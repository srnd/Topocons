"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgClipboard = function SvgClipboard(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    style: {
      lineHeight: "normal",
      textIndent: 0,
      textAlign: "start",
      textDecorationLine: "none",
      textDecorationStyle: "solid",
      textDecorationColor: "#000",
      textTransform: "none",
      blockProgression: "tb",
      isolation: "auto",
      mixBlendMode: "normal"
    },
    d: "M15 0c-1.645 0-3 1.355-3 3H8C6.355 3 5 4.355 5 6v18c0 1.645 1.355 3 3 3h14c1.645 0 3-1.355 3-3V6c0-1.645-1.355-3-3-3h-4c0-1.645-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zM8 5h4v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5h4c.565 0 1 .435 1 1v18c0 .565-.435 1-1 1H8c-.565 0-1-.435-1-1V6c0-.565.435-1 1-1zm3 6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8zm0 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5zm0 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgClipboard;
exports["default"] = _default;
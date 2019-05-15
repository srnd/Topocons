"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLock = function SvgLock(props) {
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
    d: "M15 2c-3.302 0-6 2.698-6 6v3.305A8.968 8.968 0 0 0 6 18a9 9 0 0 0 9 9 9 9 0 0 0 9-9 8.968 8.968 0 0 0-3-6.695V8c0-3.176-2.516-5.733-5.645-5.928A1 1 0 0 0 15 2zm0 2c2.22 0 4 1.78 4 4v1.945A8.952 8.952 0 0 0 15 9a8.952 8.952 0 0 0-4 .945V8c0-2.22 1.78-4 4-4zm0 12a1.993 1.993 0 1 1 1 3.723V21a1 1 0 0 1-2 0v-1.277A1.99 1.99 0 0 1 13 18a2 2 0 0 1 2-2z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgLock;
exports["default"] = _default;
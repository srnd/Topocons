"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBot = function SvgBot(props) {
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
    d: "M15 0a2 2 0 0 0-2 2 2 2 0 0 0 1 1.73V6H9a4 4 0 0 0-4 4v15h20V10a4 4 0 0 0-4-4h-5V3.729A2 2 0 0 0 17 2a2 2 0 0 0-2-2zm-4 11a2 2 0 1 1 .001 3.999A2 2 0 0 1 11 11zm8 0a2 2 0 1 1 .001 3.999A2 2 0 0 1 19 11zm-17.016.986A1 1 0 0 0 1 13v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1.016-1.014zm26 0A1 1 0 0 0 27 13v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1.016-1.014zM11 19h8a2 2 0 0 1 2 2v2H9v-2a2 2 0 0 1 2-2z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgBot;
exports["default"] = _default;
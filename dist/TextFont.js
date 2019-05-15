"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTextFont = function SvgTextFont(props) {
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
    d: "M10 3c-.634 0-1.198.397-1.412.994l-5 14-.002.006H3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-.229l.715-2h5.028l.715 2h.017l1.584-4.436-3.418-9.57A1.499 1.499 0 0 0 10 3zm10.041 5a1.5 1.5 0 0 0-1.453.996l-5 14a1.5 1.5 0 0 0-.002.004H13a1 1 0 1 0 0 2h1.611a1.5 1.5 0 0 0 .748 0H17a1 1 0 1 0 0-2h-.23l.714-2h5.032l.713 2H23a1 1 0 1 0 0 2h1.646a1.5 1.5 0 0 0 .739 0H27a1 1 0 1 0 0-2h-.586a1.5 1.5 0 0 0-.002-.004l-5-14A1.5 1.5 0 0 0 20.041 8zM10 8.96L11.8 14H8.2L10 8.96zm10 4.997L21.8 19h-3.6l1.8-5.043zM13 27a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H13z"
  }));
};

var _default = SvgTextFont;
exports["default"] = _default;
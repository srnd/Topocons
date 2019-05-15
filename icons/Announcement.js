"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAnnouncement = function SvgAnnouncement(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
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
    d: "M26.984 2.986A1 1 0 0 0 26 4v.404L6 12.5v5l4.674 1.89-.354.837a3.014 3.014 0 0 0 1.592 3.931 1 1 0 0 0 .002 0l2.379 1.008a3.017 3.017 0 0 0 3.934-1.594l.406-.959L26 25.596V26a1 1 0 1 0 2 0V4a1 1 0 0 0-1.016-1.014zm-24 9A1 1 0 0 0 2 13v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1.016-1.014zm9.543 8.157l4.25 1.72-.392.93a.985.985 0 0 1-1.31.531l-2.382-1.008a.985.985 0 0 1-.53-1.31l.364-.863z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgAnnouncement;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLogoGameSteam = function SvgLogoGameSteam(props) {
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
    d: "M6 4a2 2 0 0 0-2 2v11.326l2.535.692a4.002 4.002 0 0 1 2.858-1.957l2.673-3.21A6.127 6.127 0 0 1 12 12a6 6 0 1 1 6 6c-.29 0-.573-.027-.852-.066l-3.209 2.673A3.99 3.99 0 0 1 10 24a4 4 0 0 1-4-4c0-.018.006-.035.006-.053L4 19.4V24a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm12 4c-2.197 0-4 1.803-4 4s1.803 4 4 4 4-1.803 4-4-1.803-4-4-4zm0 2c1.116 0 2 .884 2 2s-.884 2-2 2-2-.884-2-2 .884-2 2-2zm-8 7.5c-.785 0-1.478.369-1.936.936l2.2.6c.533.145.848.695.703 1.228a1.005 1.005 0 0 1-1.23.7l-2.202-.599A2.495 2.495 0 0 0 12.5 20a2.5 2.5 0 0 0-2.5-2.5z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgLogoGameSteam;
exports["default"] = _default;
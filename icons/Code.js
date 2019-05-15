"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCode = function SvgCode(props) {
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
    d: "M16.984 3.986a1 1 0 0 0-.964.819l-4 20a1 1 0 1 0 1.96.39l4-20a1 1 0 0 0-.996-1.209zM7.252 7.988a1 1 0 0 0-.826.434l-4.242 6a1 1 0 0 0 0 1.156l4.242 6a1 1 0 0 0 1.633-1.156L4.225 15l3.834-5.422a1 1 0 0 0-.807-1.59zm15.709 0a1 1 0 0 0-.777 1.59L26.018 15l-3.834 5.422a1 1 0 1 0 1.632 1.156l4.243-6a1 1 0 0 0 0-1.156l-4.243-6a1 1 0 0 0-.855-.434z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgCode;
exports["default"] = _default;
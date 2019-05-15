"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTextH2 = function SvgTextH2(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
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
    d: "M4.477 6.979a1.5 1.5 0 0 0-.22.021H3a1 1 0 1 0 0 2v12a1 1 0 1 0 0 2h1.254a1.5 1.5 0 0 0 .486 0H6a1 1 0 1 0 0-2v-5h7v5a1 1 0 1 0 0 2h1.254a1.5 1.5 0 0 0 .486 0H16a1 1 0 1 0 0-2V9a1 1 0 1 0 0-2h-1.254a1.5 1.5 0 0 0-.27-.021 1.5 1.5 0 0 0-.218.021H13a1 1 0 1 0 0 2v5H6V9a1 1 0 1 0 0-2H4.746a1.5 1.5 0 0 0-.27-.021zM24 9c-2.713 0-4.526 1.57-4.527 3.895v.048h2.72v-.056c0-.964.698-1.645 1.702-1.645.963 0 1.593.576 1.593 1.434 0 .688-.435 1.28-2.152 2.867l-3.693 3.473V21h8.882v-2.316h-4.921v-.155l1.925-1.771c2.073-1.846 2.834-2.995 2.834-4.291C28.363 10.402 26.615 9 24 9z"
  }));
};

var _default = SvgTextH2;
exports["default"] = _default;
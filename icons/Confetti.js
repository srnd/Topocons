"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgConfetti = function SvgConfetti(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M18.5 3L17 4.5 18.5 6 20 4.5 18.5 3zm-8 1a1.5 1.5 0 0 0 0 3h1.512a.996.996 0 0 1 1 .984C13.03 9.64 13 13 13 13s2-3 2-6c0-1.532-1-3-3-3h-1.5zM24 4c-1.093 0-2 .907-2 2v2h-1c-1.093 0-2 .907-2 2v1h-.074c-.818 0-1.614.265-2.268.756l-.072.055-2.32 2.51 1.468 1.359 2.159-2.336c.302-.218.66-.344 1.033-.344H19c1.093 0 2-.907 2-2v-1h1c1.093 0 2-.907 2-2V6h3V4h-3zM5.5 5L4 6.5 5.5 8 7 6.5 5.5 5zm-2 6L2 12.5 3.5 14 5 12.5 3.5 11zm22 0L24 12.5l1.5 1.5 1.5-1.5-1.5-1.5zm-17.51.99a1 1 0 0 0-.697 1.717l.303.303-4.492 11.23c-.416 1.04.616 2.072 1.656 1.656l11.23-4.492.303.303a1 1 0 1 0 1.414-1.414l-4.475-4.475-4.525-4.525a1 1 0 0 0-.717-.303zM23 15c-3 0-6 2-6 2s3.36-.03 5.016-.012a.996.996 0 0 1 .984 1V19.5a1.5 1.5 0 0 0 3 0V18c0-2-1.468-3-3-3zm-1.5 7L20 23.5l1.5 1.5 1.5-1.5-1.5-1.5z"
  }));
};

var _default = SvgConfetti;
exports["default"] = _default;
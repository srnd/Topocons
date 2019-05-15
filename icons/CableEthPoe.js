"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCableEthPoe = function SvgCableEthPoe(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M6 4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14.137L26 12.32V6a2 2 0 0 0-2-2H6zm3 7h12v6h-2v2h-2v2h-4v-2h-2v-2H9v-6zm17.426 6.004a.499.499 0 0 0-.387.299l-3 7A.503.503 0 0 0 23.5 25H26v4.5a.5.5 0 0 0 .96.197l3-7A.503.503 0 0 0 29.5 22H27v-4.5a.5.5 0 0 0-.574-.496z"
  }));
};

var _default = SvgCableEthPoe;
exports["default"] = _default;
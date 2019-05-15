"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBarcode2D = function SvgBarcode2D(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M6 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm14 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4zM6 6h4v4H6V6zm8 0v2h2V6h-2zm6 0h4v4h-4V6zM7 7v2h2V7H7zm14 0v2h2V7h-2zm-7 3v2h2v-2h-2zm-8 4v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm2 2v2h2v-2h-2zm2 0h2v-2h-2v2zm2 0v2h2v-2h-2zm2 0h2v-2h-2v2zm2 0v2h2v-2h-2zm0 2h-2v2h2v-2zm0 2v2h2v-2h-2zm0 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 0v-2h-2v2h2zm-2 0h-2v2h2v-2zm-2 0v-2h-2v2h2zm0-2h2v-2h-2v2zm0-2v-2h-2v2h2zm2 0h2v-2h-2v2zm2 0v2h2v-2h-2zM6 18a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H6zm0 2h4v4H6v-4zm1 1v2h2v-2H7z"
  }));
};

var _default = SvgBarcode2D;
exports["default"] = _default;
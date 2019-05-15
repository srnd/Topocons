"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNotification = function SvgNotification(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3a2 2 0 0 0-2 2v.293A7 7 0 0 0 8 12v2.758A10.24 10.24 0 0 1 5 22a1 1 0 0 0-1 1 1 1 0 0 0 1 1h20a1 1 0 0 0 1-1 1 1 0 0 0-1-1 10.24 10.24 0 0 1-3-7.242V12a7 7 0 0 0-5-6.707V5a2 2 0 0 0-2-2zm-3 23a3 3 0 1 0 6 0h-6z"
  }));
};

var _default = SvgNotification;
exports["default"] = _default;
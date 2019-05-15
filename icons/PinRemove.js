"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPinRemove = function SvgPinRemove(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M1.707.293L.293 1.707l28 28 1.414-1.414L18.52 17.105c1.862-1.107 4.96-3.015 6.722-4.449l.051.051a1 1 0 1 0 1.414-1.414l-8-8a1 1 0 0 0-.717-.303 1 1 0 0 0-.697 1.717l.05.05c-1.433 1.762-3.34 4.861-4.448 6.723L1.707.293zM7.99 12.99a1 1 0 0 0-.697 1.717l8 8a1 1 0 1 0 1.414-1.414l-8-8a1 1 0 0 0-.717-.303zm1.303 6.303l-5 5A1 1 0 0 0 4 25a1 1 0 0 0 1 1 1 1 0 0 0 .707-.293l5-5-1.414-1.414z"
  }));
};

var _default = SvgPinRemove;
exports["default"] = _default;
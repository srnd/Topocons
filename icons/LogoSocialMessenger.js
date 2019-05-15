"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLogoSocialMessenger = function SvgLogoSocialMessenger(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3C8.373 3 3 8.149 3 14.5c0 3.401 1.55 6.447 4 8.553V28l4.836-2.418c1.01.264 2.067.418 3.164.418 6.627 0 12-5.149 12-11.5S21.627 3 15 3zm-1.139 8.357l2.951 2.956 5.272-2.956-5.945 6.444-2.883-3.098-5.41 3.027 6.015-6.373z"
  }));
};

var _default = SvgLogoSocialMessenger;
exports["default"] = _default;
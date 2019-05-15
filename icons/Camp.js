"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCamp = function SvgCamp(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M13.773 3.006a.73.73 0 0 0-.824.666C12.421 9.812 8 10.38 8 16c0 2.872 2.373 6 7 6s7-3.698 7-7c0-4.113-1.363-6.334-2.252-7.629a.675.675 0 0 0-1.15.066c-.26.5-.634 1-1.098 1-.813 0-.979-3.312-3.352-5.265a.743.743 0 0 0-.375-.166zM16 13s1 2 1 5c0 1.145-.855 2-2 2s-2-.964-2-2c0-1.487 1-3 1-3s.405 1 1 1c.924 0 1-3 1-3zm-8.836 9.014a.994.994 0 0 0-1.15.822 1 1 0 0 0 .822 1.15l2.582.43-3.582.598a1 1 0 1 0 .328 1.973L15.5 25.43l9.336 1.556a1 1 0 0 0 .328-1.973l-3.582-.595 2.582-.432a.998.998 0 0 0 .822-1.148.994.994 0 0 0-1.15-.822l-3.986.664C18.53 23.499 16.91 24 15 24c-2.264 0-4.119-.622-5.549-1.605l-2.287-.381z"
  }));
};

var _default = SvgCamp;
exports["default"] = _default;
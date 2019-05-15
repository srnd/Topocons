"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPin = function SvgPin(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M17.99 2.99a1 1 0 0 0-.697 1.717l.053.053C15.406 7.2 13 12 13 12l-2.87.717-.423-.424a1 1 0 0 0-.717-.303 1 1 0 0 0-.697 1.717l8 8a1 1 0 1 0 1.414-1.414l-.424-.424L18 17s4.8-2.406 7.24-4.346l.053.053a1 1 0 1 0 1.414-1.414l-8-8a1 1 0 0 0-.717-.303zm-7.697 15.303l-5.99 5.99-.01.01A1 1 0 0 0 4 25a1 1 0 0 0 1 1 1 1 0 0 0 .707-.293l6-6-1.414-1.414z"
  }));
};

var _default = SvgPin;
exports["default"] = _default;
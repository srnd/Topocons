"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgA11Y = function SvgA11Y(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm0 3a2 2 0 1 1 .001 3.999A2 2 0 0 1 15 6zm7 8h-3a1 1 0 0 0-1 1v7.967a1.034 1.034 0 0 1-2.064.069l-.438-4.57a.5.5 0 0 0-.996-.001l-.438 4.57A1.033 1.033 0 0 1 12 22.967V15a1 1 0 0 0-1-1H8a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z"
  }));
};

var _default = SvgA11Y;
exports["default"] = _default;
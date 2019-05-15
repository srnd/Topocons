"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgForbidden = function SvgForbidden(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm1 3a1 1 0 0 1 1 1v6.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5V9a1 1 0 0 1 2 0V17.088l1.926-1.77.006.008a1.23 1.23 0 0 1 .824-.326c.687 0 1.244.557 1.244 1.244 0 .368-.166.688-.42.916l.008.01-4.87 4.475A4.47 4.47 0 0 1 15.51 23H14a5 5 0 0 1-5-5v-8a1 1 0 0 1 2 0v3.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5V8a1 1 0 0 1 2 0v5.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5V7a1 1 0 0 1 1-1z"
  }));
};

var _default = SvgForbidden;
exports["default"] = _default;
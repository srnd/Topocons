"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBrowserChrome = function SvgBrowserChrome(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3c-3.926 0-7.402 1.895-9.59 4.81l4.342 4.342C10.768 10.283 12.724 9 15 9c1.342 0 2.568.455 3.568 1.2h7.233l-5.432 2.171c.391.797.631 1.682.631 2.629 0 1.972-.965 3.708-2.432 4.8h.032l-4.76 7.141c.38.037.768.059 1.16.059 6.628 0 12-5.372 12-12S21.628 3 15 3zM5.406 7.813A11.934 11.934 0 0 0 3 15c0 6.229 4.747 11.346 10.82 11.94l2.008-6.024c-.274.038-.545.084-.828.084a6 6 0 0 1-6-6L5.406 7.812zM15 11a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z"
  }));
};

var _default = SvgBrowserChrome;
exports["default"] = _default;
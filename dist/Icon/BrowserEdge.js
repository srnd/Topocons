"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBrowserEdge = function SvgBrowserEdge(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M8.41 9.356c-2.855 1.777-4.487 4.303-4.487 4.303s.423-5.295 4.487-8.395C10.026 4.032 12.236 3 15.209 3c1.116 0 3.458.194 5.567 1.494s2.962 2.389 3.911 3.984c.41.688.744 1.572.953 2.425.39 1.597.438 3.509.438 3.509v2.518H11.004s-.368 5.064 6.564 5.064c2.411 0 3.256-.379 4.048-.613 1.241-.367 2.44-1.187 2.44-1.187l.002 5.059S21.221 27 16.935 27c-1.207 0-2.479-.101-3.706-.499-1.072-.348-3.317-1.286-4.819-3.485-.532-.778-1.108-1.812-1.393-2.824-.308-1.093-.305-2.155-.305-2.74 0-2.188.748-4.277 2.045-5.788 1.68-1.956 3.804-2.818 3.804-2.818s-.691.806-1.116 1.811c-.426 1.004-.542 2.015-.542 2.015h8.512s.498-5.086-4.816-5.086c-2.004.002-4.463.696-6.189 1.77z"
  }));
};

var _default = SvgBrowserEdge;
exports["default"] = _default;
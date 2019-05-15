"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCableThunderbolt = function SvgCableThunderbolt(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M15.42 2.006a.498.498 0 0 0-.385.308l-2 5A.5.5 0 0 0 13.5 8H15v3.5a.498.498 0 0 0 .5.5.501.501 0 0 0 .465-.314l2-5A.5.5 0 0 0 17.5 6H16V2.5a.498.498 0 0 0-.58-.494zM6 14c-1.103 0-2 .897-2 2v6.586c0 .534.208 1.036.586 1.414L7 26.414A2.01 2.01 0 0 0 8.414 27h13.172A2.01 2.01 0 0 0 23 26.414L25.414 24c.378-.378.586-.88.586-1.414V16c0-1.103-.897-2-2-2H6zm1 3h16v3H7v-3z"
  }));
};

var _default = SvgCableThunderbolt;
exports["default"] = _default;
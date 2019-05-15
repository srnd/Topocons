"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMarkdown = function SvgMarkdown(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M26 5H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM16 20h-2v-6.2L11 18l-3-4.2V20H6v-9h2l3 4 3-4h2v9zm6 0l-3-3h2v-6h2v6h2l-3 3z"
  }));
};

var _default = SvgMarkdown;
exports["default"] = _default;
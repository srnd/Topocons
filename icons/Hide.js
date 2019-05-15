"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHide = function SvgHide(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M1.707.293L.293 1.707l28 28 1.414-1.414-6.025-6.025c4.095-2.774 6.117-6.651 6.144-6.704A1 1 0 0 0 30 15a1 1 0 0 0-.217-.621C29.68 14.21 23.918 5 15 5c-2.53 0-4.8.75-6.766 1.82L1.707.293zM15 8a7 7 0 0 1 7 7c0 1.572-.53 3.013-1.406 4.18l-2.155-2.155c.354-.593.561-1.283.561-2.025a4 4 0 0 0-4-4c-.742 0-1.432.207-2.025.56L10.82 9.407A6.932 6.932 0 0 1 15 8zM4.951 9.076C1.98 11.576.275 14.287.22 14.377A1 1 0 0 0 0 15a1 1 0 0 0 .166.55C.183 15.587 5.019 25 15 25c1.85 0 3.52-.327 5.02-.854l-2.588-2.59A6.961 6.961 0 0 1 15 22a7 7 0 0 1-7-7c0-.856.161-1.673.443-2.432L4.951 9.076zm6.06 6.035a3.988 3.988 0 0 0 3.876 3.877l-3.875-3.877z"
  }));
};

var _default = SvgHide;
exports["default"] = _default;
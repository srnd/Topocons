"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMoneyCurrencyGbp = function SvgMoneyCurrencyGbp(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm3.297 17h-7.595v-1.622c1.203-.169 2.027-1.054 2.047-2.189a1.69 1.69 0 0 0-.074-.459H10.73v-1.439h1.513c-.236-.574-.399-1.074-.399-1.642 0-1.676 1.385-2.649 3.77-2.649.905 0 1.595.068 2.23.223v1.642a7.997 7.997 0 0 0-1.939-.223c-1.243 0-2.013.527-2.013 1.378 0 .459.122.865.284 1.27h2.818v1.439h-2.392c.041.135.068.284.068.439a2.097 2.097 0 0 1-1.115 1.966v.128h4.743V20z"
  }));
};

var _default = SvgMoneyCurrencyGbp;
exports["default"] = _default;
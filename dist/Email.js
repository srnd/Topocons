"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEmail = function SvgEmail(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M2.537 6l11.274 10.521a1.746 1.746 0 0 0 2.378 0L27.463 6H2.537zM1 7.3v15.286l7.906-7.906L1 7.3zm28 0l-7.906 7.38L29 22.586V7.3zm-18.633 8.745L2.414 24h25.172l-7.955-7.955-2.076 1.937a3.74 3.74 0 0 1-2.557 1.004 3.735 3.735 0 0 1-2.555-1.004l-2.076-1.937z"
  }));
};

var _default = SvgEmail;
exports["default"] = _default;
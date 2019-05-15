"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUserFemale = function SvgUserFemale(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M5 27c0-5 6.957-4.174 8-6.999V19c-3.778 0-5.914-1.884-5.914-1.884 1.974-1.643-.76-13.073 5.963-13.073 0 0 .907-1.043 2.08-1.043 8.218 0 5.51 12.41 7.635 14.154 0 0-1.968 1.846-5.765 1.846v1.001C18.043 22.826 25 22 25 27H5z"
  }));
};

var _default = SvgUserFemale;
exports["default"] = _default;
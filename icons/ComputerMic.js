"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgComputerMic = function SvgComputerMic(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M21 3c-2.878 0-5.27 2.03-5.852 4.734l7.118 7.118C24.97 14.27 27 11.878 27 9a6 6 0 0 0-6-6zm-6.783 6.63L3.219 23.376a1 1 0 0 0 .074 1.332l2 2a.998.998 0 0 0 1.33.074l13.746-10.998-6.152-6.152zM15 14a.999.999 0 0 1 .707 1.707l-2 2a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2-2A.996.996 0 0 1 15 14z"
  }));
};

var _default = SvgComputerMic;
exports["default"] = _default;
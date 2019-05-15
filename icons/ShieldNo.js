"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgShieldNo = function SvgShieldNo(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3c-4.602 0-9.389 1.037-9.389 1.037l-.004.004A2 2 0 0 0 4 6v6c0 10.398 10.021 14.744 10.021 14.744A2 2 0 0 0 15 27a2 2 0 0 0 .975-.256h.004S26 22.398 26 12V6a2 2 0 0 0-1.611-1.963S19.602 3 15 3zm-3 6c.256 0 .512.097.707.293L15 11.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L16.414 13l2.293 2.293a.999.999 0 1 1-1.414 1.414L15 14.414l-2.293 2.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L13.586 13l-2.293-2.293A.999.999 0 0 1 12 9z"
  }));
};

var _default = SvgShieldNo;
exports["default"] = _default;
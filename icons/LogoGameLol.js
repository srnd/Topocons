"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLogoGameLol = function SvgLogoGameLol(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M7 4l2 3.25v15.5L6.875 26h15.082L25 22H14V4H7zm9 .05V6.06c4.493.499 8 4.316 8 8.941a8.946 8.946 0 0 1-1.521 5h2.306A10.916 10.916 0 0 0 26 15c0-5.728-4.402-10.442-10-10.95zM6.873 7.612A10.945 10.945 0 0 0 4 15c0 2.837 1.088 5.418 2.857 7.371L7 22.154v-3.049A8.94 8.94 0 0 1 6 15a8.94 8.94 0 0 1 1-4.105V7.816l-.127-.205z"
  }));
};

var _default = SvgLogoGameLol;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSpam = function SvgSpam(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M9 4a2 2 0 0 0-1.713.97l-.002.003-.012.021a2 2 0 0 0-.048.088L2.363 13.85l.002.002a1.99 1.99 0 0 0 0 2.296l-.002.002 4.85 8.746a2 2 0 0 0 .04.077l.032.054a2 2 0 0 0 .002 0A2 2 0 0 0 9 26h12a2 2 0 0 0 1.713-.97 2 2 0 0 0 .002-.003l.012-.021a2 2 0 0 0 .048-.088l4.862-8.768-.002-.002a1.99 1.99 0 0 0 0-2.296l.002-.002-4.85-8.746-.004-.01a2 2 0 0 0-.068-.121h-.002A2 2 0 0 0 21 4H9zm4.857 5h2.284l-.19 7h-1.904l-.19-7zm1.147 9.455c.879 0 1.408.471 1.408 1.28 0 .792-.53 1.265-1.408 1.265-.886 0-1.414-.473-1.414-1.266 0-.808.528-1.279 1.414-1.279z"
  }));
};

var _default = SvgSpam;
exports["default"] = _default;
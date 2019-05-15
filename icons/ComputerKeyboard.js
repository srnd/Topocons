"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgComputerKeyboard = function SvgComputerKeyboard(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M27 6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-7 4h2v2h-2v-2zm-4 0h2v2h-2v-2zm4 4v2h-2v-2h2zm-8-4h2v2h-2v-2zm4 4v2h-2v-2h2zm-8-4h2v2H8v-2zm4 4v2h-2v-2h2zm-8-4h2v2H4v-2zm0 4h4v2H4v-2zm2 6H4v-2h2v2zm16 0H8v-2h14v2zm4 0h-2v-2h2v2zm0-4h-4v-2h4v2zm0-4h-2v-2h2v2z"
  }));
};

var _default = SvgComputerKeyboard;
exports["default"] = _default;
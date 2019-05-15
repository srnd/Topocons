"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHelp = function SvgHelp(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3c-2.591 0-4.984.83-6.945 2.227l-.125-.125a.999.999 0 0 0-1.414 0L5.102 6.516a.999.999 0 0 0 0 1.414l.125.125A11.93 11.93 0 0 0 3 15c0 2.59.828 4.984 2.225 6.945l-.125.125a.999.999 0 0 0 0 1.414l1.414 1.414a.999.999 0 0 0 1.414 0l.125-.125A11.931 11.931 0 0 0 15 27c2.591 0 4.984-.83 6.945-2.227l.125.125a.999.999 0 0 0 1.414 0l1.414-1.414a.999.999 0 0 0 0-1.414l-.125-.125A11.93 11.93 0 0 0 27 15c0-2.591-.83-4.984-2.227-6.945l.125-.125a.999.999 0 0 0 0-1.414l-1.414-1.414a.999.999 0 0 0-1.414 0l-.125.125A11.93 11.93 0 0 0 15 3zm0 2a9.94 9.94 0 0 1 5.51 1.662l-2.182 2.182A6.956 6.956 0 0 0 15 8a6.956 6.956 0 0 0-3.328.844L9.49 6.662A9.94 9.94 0 0 1 15 5zM6.662 9.49l2.182 2.182A6.956 6.956 0 0 0 8 15c0 1.204.306 2.338.844 3.328l-2.182 2.18A9.94 9.94 0 0 1 5 15a9.94 9.94 0 0 1 1.662-5.51zm16.676 0A9.94 9.94 0 0 1 25 15a9.94 9.94 0 0 1-1.662 5.51l-2.182-2.182c.538-.99.844-2.124.844-3.328a6.956 6.956 0 0 0-.844-3.328l2.182-2.182zM15 10a5 5 0 1 1-.001 10.001A5 5 0 0 1 15 10zm-3.328 11.156c.99.538 2.124.844 3.328.844a6.956 6.956 0 0 0 3.328-.844l2.182 2.182A9.94 9.94 0 0 1 15 25a9.94 9.94 0 0 1-5.51-1.664l2.182-2.18z"
  }));
};

var _default = SvgHelp;
exports["default"] = _default;
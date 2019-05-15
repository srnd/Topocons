"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGame = function SvgGame(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 6c-4.067 0-9.598 1.06-9.604 1.06h-.001a3 3 0 0 0-2.34 2.385l-.004.004-1.967 10.73.002.003A4 4 0 0 0 5 25c1.186 0 2.24-.527 2.973-1.348l.013.008L9.5 22h11l1.514 1.66.013-.008A3.973 3.973 0 0 0 25 25a4 4 0 0 0 3.914-4.818l.002-.002-1.967-10.73-.004-.005a2.999 2.999 0 0 0-2.341-2.384h-.002C24.597 7.059 19.067 6 15 6zm-7 6a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H9v1a1 1 0 0 1-2 0v-1H6a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1zm14 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
  }));
};

var _default = SvgGame;
exports["default"] = _default;
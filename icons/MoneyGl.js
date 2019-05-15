"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMoneyGl = function SvgMoneyGl(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M9 4c-1.167 0-2.67.265-3.945.52s-2.297.51-2.297.51A1 1 0 0 0 2 6v1.277A1.99 1.99 0 0 0 1 9v15a2 2 0 0 0 2 2h10.271A2 2 0 0 0 15 27a2 2 0 0 0 1.73-1H27a2 2 0 0 0 2-2V9a1.99 1.99 0 0 0-1-1.723V6a1 1 0 0 0-.758-.97s-1.022-.255-2.297-.51C23.67 4.265 22.167 4 21 4c-1.167 0-2.67.265-3.945.52-1.14.228-1.87.409-2.055.455-.185-.046-.914-.227-2.055-.455C11.67 4.265 10.167 4 9 4zm0 2c.833 0 2.33.235 3.555.48.803.161 1.06.231 1.445.323v15.95c-.35-.08-.47-.116-1.055-.233C11.67 22.265 10.167 22 9 22c-1.167 0-2.67.265-3.945.52-.586.117-.65.141-1.055.234V6.803c.385-.092.642-.162 1.445-.323C6.67 6.235 8.167 6 9 6zm12 0c.833 0 2.33.235 3.555.48.803.161 1.06.231 1.445.323v15.95c-.404-.092-.47-.116-1.055-.233C23.67 22.265 22.167 22 21 22c-1.167 0-2.67.265-3.945.52-.586.117-.704.153-1.055.234V6.803c.385-.092.642-.162 1.445-.323C18.67 6.235 20.167 6 21 6zm-1 2v1.12c-1.385.307-2.254 1.243-2.254 2.556 0 1.305.766 2.117 2.326 2.443l1.116.238c1.05.226 1.476.54 1.476 1.086 0 .647-.659 1.098-1.59 1.098-1.009 0-1.71-.445-1.793-1.139h-1.73c.054 1.321.978 2.224 2.449 2.5V19h2v-1.102c1.532-.29 2.45-1.25 2.45-2.68 0-1.327-.74-2.07-2.462-2.433l-1.033-.219c-1.003-.213-1.41-.517-1.41-1.045 0-.653.592-1.068 1.488-1.068.866 0 1.495.451 1.578 1.127h1.686c-.044-1.243-.947-2.163-2.297-2.465V8h-2z"
  }));
};

var _default = SvgMoneyGl;
exports["default"] = _default;
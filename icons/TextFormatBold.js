"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTextFormatBold = function SvgTextFormatBold(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M7 4a1 1 0 1 0 0 2h1v18H7a1 1 0 1 0 0 2h11.5c3.584 0 6.5-2.916 6.5-6.5 0-2.631-1.573-4.896-3.826-5.918A5.48 5.48 0 0 0 23 9.5C23 6.467 20.532 4 17.5 4H7zm6 2h2.5C17.43 6 19 7.57 19 9.5S17.43 13 15.5 13H13V6zm0 9h2.5c2.481 0 4.5 2.019 4.5 4.5S17.981 24 15.5 24H13v-9z"
  }));
};

var _default = SvgTextFormatBold;
exports["default"] = _default;
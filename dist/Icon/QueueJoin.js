"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgQueueJoin = function SvgQueueJoin(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M6 0v5H4l3 3 3-3H8V0H6zm17 4a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3zm-8 3a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3zm-8 3a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3zm15 2a2.99 2.99 0 0 0-2.86 2.14C20.267 15.06 21 16.439 21 18v2h6v-5a3 3 0 0 0-3-3h-2zm-8 3a2.99 2.99 0 0 0-2.86 2.14C12.267 18.06 13 19.439 13 21v2h6v-5a3 3 0 0 0-3-3h-2zm-8 3a3 3 0 0 0-3 3v5h8v-5a3 3 0 0 0-3-3H6z"
  }));
};

var _default = SvgQueueJoin;
exports["default"] = _default;
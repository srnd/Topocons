"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMusic = function SvgMusic(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("path", {
    d: "M7.43 21.048c-2.173 1.254-4.814.936-5.88-.91-1.066-1.846-.021-4.293 2.152-5.548 1.423-.822 3.047-.969 4.298-.454V3.971a1 1 0 0 1 .912-.997l11-.97A1 1 0 0 1 21 3v12.886c.076 1.575-.923 3.21-2.57 4.162-2.173 1.254-4.814.936-5.88-.91-1.066-1.846-.021-4.293 2.152-5.548 1.423-.822 3.047-.969 4.298-.454V4.092l-9 .794v12.048c.07 1.536-.927 3.166-2.57 4.114zm10-2.732c1.307-.755 1.861-2.052 1.42-2.816-.44-.764-1.841-.932-3.148-.178-1.307.755-1.861 2.052-1.42 2.816.44.763 1.841.932 3.148.178zm-11 1c1.307-.755 1.861-2.052 1.42-2.816-.44-.764-1.841-.932-3.148-.178-1.307.755-1.861 2.052-1.42 2.816.44.763 1.841.932 3.148.178z"
  }));
};

var _default = SvgMusic;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBroadcast = function SvgBroadcast(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M7.568 4.58a1 1 0 0 0-.619.223C3.94 7.182 2 10.869 2 15c0 4.131 1.94 7.818 4.95 10.197a1 1 0 0 0 1.24-1.57C5.638 21.61 4 18.507 4 15c0-3.507 1.639-6.61 4.19-8.627a1 1 0 0 0-.622-1.793zm14.834 0a1 1 0 0 0-.591 1.793C24.36 8.39 26 11.493 26 15c0 3.507-1.639 6.61-4.19 8.627a1 1 0 1 0 1.24 1.57C26.06 22.818 28 19.131 28 15c0-4.131-1.94-7.818-4.95-10.197a1 1 0 0 0-.648-.223zM10.664 8.502a1 1 0 0 0-.617.223A7.993 7.993 0 0 0 7 15a7.993 7.993 0 0 0 3.047 6.275 1 1 0 1 0 1.238-1.57A5.969 5.969 0 0 1 9 15c0-1.916.892-3.604 2.285-4.705a1 1 0 0 0-.62-1.793zm8.643 0a1 1 0 0 0-.592 1.793A5.969 5.969 0 0 1 21 15a5.969 5.969 0 0 1-2.285 4.705 1 1 0 1 0 1.238 1.57A7.993 7.993 0 0 0 23 15a7.993 7.993 0 0 0-3.047-6.275 1 1 0 0 0-.646-.223zM15 12a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
  }));
};

var _default = SvgBroadcast;
exports["default"] = _default;
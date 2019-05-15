"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMoneyReceipt = function SvgMoneyReceipt(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M23 3l-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2l-2 1zm-7 20h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-7-5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1zm7-3h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-6H10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
  }));
};

var _default = SvgMoneyReceipt;
exports["default"] = _default;
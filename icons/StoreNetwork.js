"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStoreNetwork = function SvgStoreNetwork(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M7 2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7zm9.5 4A3.5 3.5 0 0 1 20 9.5c0 .227-.025.447-.066.662A2.99 2.99 0 0 1 22 13a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3 2.99 2.99 0 0 1 2.033-2.826A2.491 2.491 0 0 1 12.5 8c.273 0 .53.055.775.135A3.501 3.501 0 0 1 16.5 6zM5 21.443V26a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4.557A3.96 3.96 0 0 1 23 22H7a3.96 3.96 0 0 1-2-.557zM22 24a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
  }));
};

var _default = SvgStoreNetwork;
exports["default"] = _default;
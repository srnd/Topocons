"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgImageEdit = function SvgImageEdit(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M4 5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h13.172l3-3H5v-7l2.29-2.29a2.42 2.42 0 0 1 3.42 0l3.263 3.263 2.183 2.183a1.082 1.082 0 0 0 1.525-1.535l-1.152-1.15.76-.76a2.42 2.42 0 0 1 3.422 0l3.375 3.375L28 14.172V7a2 2 0 0 0-2-2H4zm19 3a2 2 0 1 1 .001 3.999A2 2 0 0 1 23 8zm4.496 10c-.307 0-.613.117-.848.352l-.847.847 3 3 .847-.847a1.2 1.2 0 0 0 0-1.698l-1.302-1.302a1.199 1.199 0 0 0-.85-.352zM24.6 20.4l-4.8 4.8.9.3.3 1.5 1.5.3.3.9 4.8-4.8-3-3zm-5.909 7.291l-.666 1.89a.3.3 0 0 0-.002.003v.002a.3.3 0 0 0-.023.113.3.3 0 0 0 .3.301.3.3 0 0 0 .106-.02h.002l1.9-.671-1.617-1.618z"
  }));
};

var _default = SvgImageEdit;
exports["default"] = _default;
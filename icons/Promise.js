"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPromise = function SvgPromise(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M8.5 3A1.5 1.5 0 0 0 7 4.5V22a4 4 0 0 0 4 4h7.324a5 5 0 0 0 4.16-2.227l.909-1.363a3.535 3.535 0 0 0-.442-4.46l-.603-.602-3.573-3.05a1.631 1.631 0 0 0-2.285.15 1.652 1.652 0 0 0 .026 2.228l2.347 2.48a.5.5 0 1 1-.726.688l-2.348-2.483a2.63 2.63 0 0 1-.71-1.832 2.541 2.541 0 0 1-.577-.543A2.498 2.498 0 0 1 12.5 16a2.503 2.503 0 0 1-2.5-2.5v-9A1.5 1.5 0 0 0 8.5 3zm8 5A1.5 1.5 0 0 0 15 9.5v4c0 .353.127.674.33.93.108-.232.24-.456.418-.653a2.648 2.648 0 0 1 1.961-.877c.098 0 .193.017.289.028V9.5c.001-.828-.67-1.5-1.498-1.5zm-4 1a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3A1.5 1.5 0 0 0 12.5 9zm8 0a1.5 1.5 0 0 0-1.5 1.5v2.744c.15.084.294.18.426.293l1.597 1.363c.57-.213.977-.756.977-1.4v-3A1.5 1.5 0 0 0 20.5 9z"
  }));
};

var _default = SvgPromise;
exports["default"] = _default;
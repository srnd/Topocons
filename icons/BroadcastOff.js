"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBroadcastOff = function SvgBroadcastOff(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M1.707.293L.293 1.707l28 28 1.414-1.414-4.842-4.842c4.375-5.102 4.158-12.812-.672-17.642a.999.999 0 1 0-1.414 1.414c4.05 4.05 4.27 10.495.67 14.812L21.314 19.9c2.436-3.135 2.221-7.677-.658-10.556a.999.999 0 1 0-1.414 1.414c2.098 2.097 2.31 5.373.645 7.715L17.7 16.287c.189-.39.299-.824.299-1.287a3 3 0 0 0-3-3c-.463 0-.897.11-1.287.299l-2.957-2.955-3.53-3.531-.01-.01L1.708.293zm2.264 7.848C.853 13.155 1.459 19.842 5.809 24.193a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414C3.657 19.212 3.066 13.791 5.43 9.598L3.97 8.14zm3.691 3.69c-1.258 2.921-.7 6.443 1.682 8.825a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414c-1.578-1.578-2.067-3.817-1.516-5.83l-1.58-1.582z"
  }));
};

var _default = SvgBroadcastOff;
exports["default"] = _default;
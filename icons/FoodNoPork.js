"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodNoPork = function SvgFoodNoPork(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M1.707.293L.293 1.707l28 28 1.414-1.414-6.691-6.691c3.177-.702 5.271-1.638 5.359-1.678l.025-.01.014-.006v-.004A.997.997 0 0 0 29 19v-4a1 1 0 0 0-1.707-.707L25 12s3-.56 3-3c0-1.095-.41-2.149-.705-2.764a.387.387 0 0 0-.66-.062l-2.99 3.969A.358.358 0 0 1 23 9.928V8.14c0-.73-.391-1.404-1.033-1.752C20.346 5.512 16.975 4 13 4c-2.132 0-4.29.488-6.18 1.406L1.707.293zm-.592 5.014C.558 5.654 0 6.325 0 7.5c0 1.266 1.01 2.276 1.764 2.86A8.911 8.911 0 0 0 1 14c0 2.405 1.041 7.588 1.621 10.287A2.171 2.171 0 0 0 4.752 26c1.022 0 1.906-.71 2.127-1.707L7.61 21s4.495 1 8.389 1l.9 2.598a2.079 2.079 0 1 0 3.803.295L3.55 7.738c-.267.278-.53.563-.762.871C2.364 8.24 2 7.808 2 7.5c0-.291.075-.476.21-.521a.98.98 0 0 0 .39-.19L1.115 5.307zM24 14c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z"
  }));
};

var _default = SvgFoodNoPork;
exports["default"] = _default;
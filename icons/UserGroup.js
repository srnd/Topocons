"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUserGroup = function SvgUserGroup(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 6c-3.182 0-4.5 2.041-4.5 4.5 0 .828.396 1.66.396 1.66-.159.092-.423.385-.357.9.123.963.54 1.205.807 1.225.1.898 1.067 2.048 1.404 2.215v1.342C12 20.092 6 19.75 6 25h18c0-5.25-6-4.908-6.75-7.158V16.5c.338-.167 1.303-1.317 1.404-2.215.266-.02.684-.262.807-1.224.066-.517-.198-.809-.357-.9 0 0 .396-.752.396-1.661 0-1.821-.715-3.375-2.25-3.375 0 0-.533-1.125-2.25-1.125zm7.5 1.998c-.512 0-.948.093-1.348.225.22.679.348 1.436.348 2.277a5.7 5.7 0 0 1-.19 1.428c.146.429.195.9.133 1.384-.14 1.102-.568 1.85-1.105 2.32a6.19 6.19 0 0 1-.6 1.079c.284.583.7 1.102.887 1.207v.012C22.662 18.885 26 20.49 26 25h4c0-4.958-5-4.246-5.625-6.371v-.713c.281-.158 1.086-1.244 1.17-2.092.22-.019.57-.247.672-1.156.055-.488-.165-.763-.297-.85 0 0 .33-.711.33-1.568 0-1.72-.596-3.188-1.875-3.188 0 0-.444-1.064-1.875-1.064zM7.5 8C6.069 8 5.625 9.063 5.625 9.063c-1.279 0-1.875 1.469-1.875 3.189 0 .858.33 1.566.33 1.566-.133.086-.352.362-.297.85.102.909.451 1.14.672 1.158.084.848.889 1.934 1.17 2.092v.71C5 20.754 0 20.043 0 25h4c0-4.51 3.338-6.114 5.375-7.07v-.014c.187-.105.603-.621.887-1.205a6.206 6.206 0 0 1-.6-1.08c-.537-.47-.965-1.219-1.105-2.319a3.11 3.11 0 0 1 .136-1.402A5.612 5.612 0 0 1 8.5 10.5c0-.827.117-1.587.33-2.281A4.19 4.19 0 0 0 7.5 8z"
  }));
};

var _default = SvgUserGroup;
exports["default"] = _default;
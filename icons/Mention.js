"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMention = function SvgMention(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M26.997 13.747c0 4.538-2.205 7.347-5.795 7.347-1.859 0-3.186-.807-3.575-2.175h-.274c-.591 1.455-1.715 2.19-3.373 2.19-2.998 0-4.987-2.42-4.987-6.079 0-3.501 1.917-5.863 4.771-5.863 1.557 0 2.782.749 3.359 2.046h.274v-1.7h3.315v7.318c0 1.023.461 1.628 1.24 1.628 1.268 0 2.076-1.685 2.076-4.365 0-5.215-3.416-8.557-8.735-8.557-5.55 0-9.326 3.89-9.326 9.551 0 5.733 3.805 9.321 9.917 9.321 1.326 0 2.695-.173 3.445-.403v2.564c-1.038.272-2.393.43-3.763.43-7.538 0-12.569-4.797-12.569-11.986C2.997 7.912 8.042 3 15.336 3c6.948 0 11.661 4.351 11.661 10.747zM12.784 15.13c0 1.873.778 2.996 2.09 2.996 1.326 0 2.133-1.138 2.133-2.996s-.822-2.996-2.133-2.996-2.09 1.123-2.09 2.996z"
  }));
};

var _default = SvgMention;
exports["default"] = _default;
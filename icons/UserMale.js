"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUserMale = function SvgUserMale(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M18 19v-2c.45-.223 1.737-1.755 1.872-2.952.354-.027.91-.352 1.074-1.635.088-.689-.262-1.076-.474-1.198 0 0 .528-1.003.528-2.214 0-2.428-.953-4.5-3-4.5 0 0-.711-1.5-3-1.5-4.242 0-6 2.721-6 6 0 1.104.528 2.214.528 2.214-.212.122-.562.51-.474 1.198.164 1.283.72 1.608 1.074 1.635C10.263 15.245 11.55 16.777 12 17v2c-1 3-9 1-9 8h24c0-7-8-5-9-8z"
  }));
};

var _default = SvgUserMale;
exports["default"] = _default;
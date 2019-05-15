"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodNoNuts = function SvgFoodNoNuts(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    style: {
      lineHeight: "normal",
      textIndent: 0,
      textAlign: "start",
      textDecorationLine: "none",
      textDecorationStyle: "solid",
      textDecorationColor: "#000",
      textTransform: "none",
      blockProgression: "tb",
      isolation: "auto",
      mixBlendMode: "normal"
    },
    d: "M16.98-.01a1 1 0 0 0-.687.303l-1.414 1.414A3 3 0 0 0 14 3.828v.445L7.469 6.055 1.707.293.293 1.707l28 28 1.414-1.414-6.148-6.148A9.898 9.898 0 0 0 25 17v-4a1 1 0 0 0-1-1H13.414l-2-2h12.887a1.7 1.7 0 0 0 .445-3.342L16 4.273v-.445a1 1 0 0 1 .293-.707l1.414-1.414A1 1 0 0 0 16.98-.01zM6 12a1 1 0 0 0-1 1v4c0 5.186 3.947 9.45 9.002 9.951A1 1 0 0 0 14 27a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-.002-.055 9.958 9.958 0 0 0 4.885-1.87L7.809 12H6z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgFoodNoNuts;
exports["default"] = _default;
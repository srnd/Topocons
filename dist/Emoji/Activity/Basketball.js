"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBasketball = function SvgBasketball(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "basketball_svg__a",
    cx: 30.894,
    cy: 57.086,
    r: 32.617,
    gradientTransform: "translate(-5.887 -35.018) scale(1.0506)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f80"
  }), _react["default"].createElement("stop", {
    offset: 0.291,
    stopColor: "#fc8500"
  }), _react["default"].createElement("stop", {
    offset: 0.528,
    stopColor: "#f27e00"
  }), _react["default"].createElement("stop", {
    offset: 0.745,
    stopColor: "#e17000"
  }), _react["default"].createElement("stop", {
    offset: 0.927,
    stopColor: "#cc6000"
  })), _react["default"].createElement("circle", {
    fill: "url(#basketball_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M46.857 38.858c-11.041-3.657-20.576-6.815-24.343-14.4a10.987 10.987 0 0 1-.631-1.563c14.353-5.514 31.31-6.788 38.499-.633a29.827 29.827 0 0 0-.829-2.146c-3.47-2.354-9.387-3.706-16.027-3.436-6.949.283-14.857 1.996-22.013 4.701-.536-3.144.26-6.53 2.322-9.521 3.55-5.146 9.838-8.161 17.295-8.442a30.005 30.005 0 0 0-2.829-.753c-7.552.703-12.649 3.82-15.747 8.312-2.368 3.435-3.229 7.354-2.514 10.982a66.956 66.956 0 0 0-3.584 1.562c-.868.411-1.699.83-2.5 1.256-.812-3.287-1.245-6.48-1.202-9.406.037-2.481.453-5.427 1.861-7.821-.678.482-1.333.993-1.967 1.529-2.523 5.79-1.013 12.806-.08 16.461a42.418 42.418 0 0 0-4.259 2.757c-.809-2.883-2.02-5.607-3.93-8.025-.24.564-.462 1.139-.668 1.721 1.565 2.224 2.573 4.717 3.258 7.353-2.177 1.798-3.803 3.653-4.835 5.514.071.755.171 1.503.298 2.241.879-1.752 2.309-3.807 4.927-6.08.631 3.026.919 6.195 1.202 9.323.422 4.672 1.001 10.817 3.287 13.883a30.06 30.06 0 0 0 2.559 2.078c-3.192-3.932-3.718-9.713-4.296-16.101-.313-3.454-.63-6.956-1.392-10.29a39.61 39.61 0 0 1 4.269-2.824c1.287 4.5 3.225 9.215 5.699 13.724 4.983 9.082 11.625 18.307 21.602 20.028a29.435 29.435 0 0 0 2.519-.847c-1.904-.025-3.9-.544-5.98-1.565-9.245-4.544-18.762-18.874-22.465-32.107a58.575 58.575 0 0 1 2.76-1.393 67.62 67.62 0 0 1 3.308-1.456c.188.571.417 1.133.689 1.68 4.055 8.166 13.877 11.419 25.248 15.186 4.157 1.377 8.424 2.793 12.737 4.533.223-.469.434-.943.632-1.424-4.372-1.769-8.68-3.2-12.88-4.591z"
  }), _react["default"].createElement("radialGradient", {
    id: "basketball_svg__b",
    cx: 555.648,
    cy: -15.276,
    r: 22.069,
    gradientTransform: "matrix(.3583 .4654 -.7924 .61 -189.208 -228.648)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffdada"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffdada",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.5,
    fill: "url(#basketball_svg__b)",
    d: "M29.894 30.903c-9.658 7.435-21.027 8.862-25.393 3.19-4.368-5.674-.08-16.299 9.578-23.733s21.026-8.863 25.393-3.19c4.369 5.673.08 16.299-9.578 23.733z"
  }));
};

var _default = SvgBasketball;
exports["default"] = _default;
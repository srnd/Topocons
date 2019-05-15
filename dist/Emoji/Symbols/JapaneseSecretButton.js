"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseSecretButton = function SvgJapaneseSecretButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-secret-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#japanese-secret-button_svg__a)",
    d: "M2 32C2 15.436 15.438 2 32 2c16.572 0 30 13.436 30 30 0 16.57-13.428 30-30 30C15.438 62 2 48.57 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M25.842 36.545c-.318-.656-.793-1.639-1.375-2.623V49h-4.389V35.508c-1.162 3.004-2.482 5.68-3.963 7.592-.371-1.42-1.375-3.551-2.115-4.861 1.957-2.35 3.859-6.336 5.129-10.106h-4.547v-4.589h5.496v-4.097a73.206 73.206 0 0 1-4.439.655c-.211-1.093-.793-2.733-1.375-3.823 4.072-.602 8.723-1.64 11.42-3.005l3.225 3.715c-1.322.601-2.853 1.092-4.441 1.529v5.025h3.699v4.589h-3.699v.327c.898.875 3.014 3.167 3.912 4.261.422-2.021.688-4.261.846-6.336l3.543.874c-.318 4.425-.953 9.45-2.75 12.509l-3.383-1.803c.633-1.201 1.162-2.678 1.531-4.315l-2.325 2.896z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M45.613 38.566c-.105-2.404-.846-5.736-1.85-8.796-1.746 3.88-3.807 7.321-6.24 10.325v2.459c0 1.529.16 1.748 1.217 1.748h3.172c1.004 0 1.217-.766 1.375-5.682.951.766 2.695 1.529 3.963 1.803-.422 6.445-1.584 8.193-4.861 8.193h-4.283c-3.33 0-4.598-.928-4.916-3.934a46.89 46.89 0 0 1-4.123 3.225c-.688-.93-2.539-2.732-3.543-3.553 2.856-1.746 5.393-3.822 7.561-6.281V21.305h4.439v10.598c2.803-4.808 4.76-10.489 6.082-16.936l4.65.874c-.846 3.771-1.85 7.267-3.066 10.489l1.639-.436c1.639 3.551 2.908 8.247 3.172 11.362l-4.388 1.31z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M39.111 22.178c-1.482-1.802-4.652-4.369-7.402-6.009l3.014-3.168c2.697 1.475 5.975 3.823 7.561 5.682l-3.173 3.495z"
  }));
};

var _default = SvgJapaneseSecretButton;
exports["default"] = _default;
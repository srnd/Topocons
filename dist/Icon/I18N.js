"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgI18N = function SvgI18N(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M5 5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h4v4a1 1 0 0 0 1 1 1 1 0 0 0 .838-.457L14.25 24H25a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5zm4 3a1 1 0 0 1 .92.605l3 7a1.002 1.002 0 0 1-1.84.79L10.912 16H7.088l-.168.395a1 1 0 1 1-1.84-.788l3-7A1 1 0 0 1 9 8zm12 3.002a1 1 0 0 1 1 1v1h2A1 1 0 1 1 24 15h-.11c-.208 1.039-.714 2.254-1.462 3.32l1.172.88a.997.997 0 1 1-.602 1.799.992.992 0 0 1-.598-.2l-1.324-.992C20.208 20.527 19.173 21 18 21a1 1 0 1 1 0-2c.502 0 .975-.17 1.412-.441L18.4 17.8a1 1 0 0 1-.2-1.4c.331-.443.958-.53 1.4-.2l1.246.934a7.162 7.162 0 0 0 1-2.133H18a1 1 0 1 1 0-2h2v-1a1 1 0 0 1 1-1zm-12 .537L7.945 14h2.11L9 11.54z"
  }));
};

var _default = SvgI18N;
exports["default"] = _default;
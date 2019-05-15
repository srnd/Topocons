"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgApi = function SvgApi(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M4 5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm3.252 6h2.49l2.69 8h-2.217l-.5-1.758H7.104L6.588 19h-2.02l2.684-8zM14 11h3.504c1.719 0 2.883 1.12 2.883 2.84 0 1.702-1.225 2.814-3.004 2.814h-1.35V19H14v-8zm9 0h2.033v8H23v-8zm-6.965 1.563v2.556h.92c.865 0 1.375-.444 1.375-1.275 0-.843-.504-1.281-1.363-1.281h-.932zm-7.668.24l-.877 2.976h1.842l-.86-2.976h-.105z"
  }));
};

var _default = SvgApi;
exports["default"] = _default;
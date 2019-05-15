"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLogoGameXbox = function SvgLogoGameXbox(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3c-1.949 0-4.364.618-6.166 1.701-.13.076-.487.321-.67.543v.002C9.884 3.35 14.893 7.35 15 7.434v.002c.107-.085 5.117-4.084 6.836-2.19-.184-.222-.54-.466-.672-.543A11.936 11.936 0 0 0 15.002 3H15zM7.441 6.104c-.405.065-.858.323-1.246.742A11.956 11.956 0 0 0 3 14.998c0 3.109 1.183 5.938 3.121 8.068-.636-3.078-.057-5.247 1.68-8.068 1.74-2.824 4.799-6 4.799-6-2.524-2.383-4.318-2.81-4.774-2.894a1.123 1.123 0 0 0-.385 0zm-1.32 16.962v.004A11.998 11.998 0 0 0 15.002 27c3.517 0 6.683-1.515 8.879-3.926v-.002A11.96 11.96 0 0 0 27 15c0-3.148-1.211-6.01-3.195-8.152-.517-.558-1.151-.833-1.631-.743-.455.086-2.25.513-4.774 2.895 0 0 3.06 3.176 4.8 6 1.735 2.822 2.315 4.99 1.679 8.068-.006-.035-.25-1.614-1.865-3.85C20.75 17.477 17 13.3 15 11.4c-2 1.9-5.75 6.072-7.014 7.817-1.616 2.233-1.859 3.813-1.865 3.85z"
  }));
};

var _default = SvgLogoGameXbox;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTextH3 = function SvgTextH3(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
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
    d: "M5.477 7.979a1.5 1.5 0 0 0-.22.021H4a1 1 0 1 0 0 2v10a1 1 0 1 0 0 2h1.254a1.5 1.5 0 0 0 .486 0H7a1 1 0 1 0 0-2v-4h5v4a1 1 0 1 0 0 2h1.254a1.5 1.5 0 0 0 .486 0H15a1 1 0 1 0 0-2V10a1 1 0 1 0 0-2h-1.254a1.5 1.5 0 0 0-.27-.021 1.5 1.5 0 0 0-.218.021H12a1 1 0 1 0 0 2v4H7v-4a1 1 0 1 0 0-2H5.746a1.5 1.5 0 0 0-.27-.021zM23.35 9.5c-2.422 0-3.985 1.302-4.022 3.342h2.408c.03-.818.646-1.36 1.557-1.36.926 0 1.496.47 1.496 1.229 0 .759-.585 1.258-1.475 1.258h-1.28v1.83h1.28c1.012 0 1.627.492 1.627 1.295 0 .78-.651 1.314-1.591 1.314-1.005 0-1.65-.49-1.686-1.287h-2.53c.095 2.046 1.736 3.377 4.173 3.377 2.553 0 4.332-1.315 4.332-3.203 0-1.345-.919-2.291-2.358-2.443v-.137c1.171-.217 1.975-1.164 1.975-2.365 0-1.685-1.592-2.85-3.906-2.85z"
  }));
};

var _default = SvgTextH3;
exports["default"] = _default;
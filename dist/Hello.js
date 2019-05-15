"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHello = function SvgHello(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M18.62 3.242a.75.75 0 0 0-.589 1.19c1.003 1.428 2.112 2.314 2.112 2.314a.75.75 0 1 0 .937-1.172s-.947-.762-1.82-2.006a.75.75 0 0 0-.64-.326zm-4.034.404a.75.75 0 0 0-.524 1.254 59.494 59.494 0 0 0 4.645 4.662.75.75 0 1 0 .99-1.124s-2.244-1.976-4.513-4.534a.75.75 0 0 0-.598-.258zm-5.28 1.358a1.072 1.072 0 0 0-.633 1.855l4.987 4.56-.978 1.102L6.63 7.115a1.073 1.073 0 0 0-1.506.07l-.012.012a1.071 1.071 0 0 0 .073 1.526l5.785 5.142-.735.979-5.441-4.592a1.072 1.072 0 0 0-1.482.09l-.03.03a1.073 1.073 0 0 0 .078 1.53l5.162 4.532-.61.734-2.995-2.605a1.071 1.071 0 0 0-1.498.076l-.033.035a1.073 1.073 0 0 0 .058 1.514c1.767 1.643 6.078 5.295 7.916 6.72 2.625 2.063 5.957 2.03 7.914.563 1.65-1.763 3.138-3.672 3.75-5.139C23.758 16.74 27 10.074 27 10.074c-.978-.856-2.446-1.222-4.158.49-1.101.978-2.47 3.15-2.47 3.15l-10.286-8.47a1.074 1.074 0 0 0-.78-.24zm-5.47 15.578a.75.75 0 0 0-.324 1.422s3.091 1.598 5.392 3.566a.75.75 0 1 0 .975-1.14c-2.497-2.136-5.682-3.762-5.682-3.762a.75.75 0 0 0-.361-.086z"
  }));
};

var _default = SvgHello;
exports["default"] = _default;
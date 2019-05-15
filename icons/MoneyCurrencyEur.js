"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMoneyCurrencyEur = function SvgMoneyCurrencyEur(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm3 16.933c-.312.034-.758.067-1.324.067-3.488 0-4.834-1.606-5.353-3H10v-1h1.065c-.083-.547-.061-.947-.06-1H10v-1h1.075c.237-1.458 1.261-4 5.601-4 .489 0 .998.047 1.296.107v1.717c-.326-.053-.729-.073-1.26-.073-2.405 0-3.185 1.296-3.439 2.25H17v1h-3.85c-.001.079-.011.491.123 1H17v1h-3.266c.481.67 1.355 1.25 2.949 1.25.538 0 1.027-.02 1.317-.067v1.749z"
  }));
};

var _default = SvgMoneyCurrencyEur;
exports["default"] = _default;
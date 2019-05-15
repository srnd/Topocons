"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSport = function SvgSport(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M22.5 3c-1.566 0-2.926.81-3.727 2.025a1 1 0 0 0-.072.02l-16 5A1 1 0 0 0 2 11c0 2.73.996 4.457 2.06 5.4.405.36.807.585 1.17.758-.33 1.401-.573 4.023 1.508 6.104 2.081 2.08 4.703 1.838 6.104 1.508.173.363.399.765.758 1.17.943 1.064 2.67 2.06 5.4 2.06a1 1 0 0 0 .955-.701l5-16a1 1 0 0 0 .022-.072A4.453 4.453 0 0 0 27 7.5 4.5 4.5 0 0 0 22.5 3zm-3.463 4.037l.186.186-4.59 2.925-.701-1.515 5.105-1.596zm1.635 1.635l.656.656-3.158 4.953-2.451-2.453 4.953-3.156zm-8.649.557a1 1 0 0 0 .069.19l.838 1.815-6.643 4.235c-.226-.085-.53-.237-.9-.565-.57-.505-1.108-1.515-1.266-3.205l7.902-2.47zm10.754 1.548l.186.186-1.596 5.105-1.539-.666 2.95-4.625zm-8.785 2.153l3.078 3.078-4.258 6.68c-.361.142-2.775 1.044-4.66-.84-1.884-1.885-.982-4.299-.84-4.66l6.68-4.258zm4.748 4.18l1.862.808a1 1 0 0 0 .17.055L18.3 25.879c-1.69-.158-2.7-.696-3.205-1.266-.328-.37-.48-.674-.565-.9l4.21-6.604z"
  }));
};

var _default = SvgSport;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBookOpen = function SvgBookOpen(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M10 4C7.667 4 4.684 5.05 4.684 5.05A1 1 0 0 0 4 6v1.277A1.99 1.99 0 0 0 3 9v15a2 2 0 0 0 2 2h8.271A2 2 0 0 0 15 27a2 2 0 0 0 1.73-1H25a2 2 0 0 0 2-2V9a1.99 1.99 0 0 0-1-1.723V6a1 1 0 0 0-.684-.95S22.333 4 20 4c-2.126 0-4.544.802-5 .957C14.544 4.802 12.126 4 10 4zm0 2c1.335 0 3.176.517 4 .76v15.894c-1.006-.286-2.55-.654-4-.654-1.472 0-2.923.353-4 .662V6.811C6.673 6.609 8.577 6 10 6zm10 0c1.423 0 3.327.609 4 .81v15.852c-1.077-.309-2.528-.662-4-.662-1.45 0-2.994.368-4 .654V6.76c.824-.243 2.665-.76 4-.76z"
  }));
};

var _default = SvgBookOpen;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodNoDairy = function SvgFoodNoDairy(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M1.707.293L.293 1.707l28 28 1.414-1.414L23 21.586V10c0-.192-.055-.382-.158-.543L20 5.053V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1.053l-.602.931L1.707.293zM9.77 6h8.232L16 9h-5.586L8.846 7.432 9.77 6zM5.2 9.393l-.043.064c-.02.032-.029.07-.045.104A.996.996 0 0 0 5 10v15.999a1 1 0 0 0 1 1h16c.227 0 .427-.09.594-.217L16 20.191V25H7V11.191L5.201 9.393zM12.414 11H16v3.586L12.414 11z"
  }));
};

var _default = SvgFoodNoDairy;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodNoSugar = function SvgFoodNoSugar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M1.707.293L.293 1.707l28 28 1.414-1.414-6.97-6.97a9.945 9.945 0 0 0 1.17-10.854l3.8-1.176a.999.999 0 0 0 0-1.414l-1.293-1.293.293-.293a.999.999 0 0 0 0-1.414l-1.586-1.586a.999.999 0 0 0-1.414 0l-.293.293-1.293-1.293a.999.999 0 0 0-1.414 0l-1.176 3.8a9.946 9.946 0 0 0-10.853 1.17L1.707.294zM6.15 10.352a9.953 9.953 0 0 0-.056 9.18l-3.801 1.175a.999.999 0 0 0 0 1.414l1.293 1.293-.293.293a.999.999 0 0 0 0 1.414l1.586 1.586a.999.999 0 0 0 1.414 0l.293-.293 1.293 1.293a.999.999 0 0 0 1.414 0l1.176-3.8a9.946 9.946 0 0 0 9.18-.057L6.15 10.352z"
  }));
};

var _default = SvgFoodNoSugar;
exports["default"] = _default;
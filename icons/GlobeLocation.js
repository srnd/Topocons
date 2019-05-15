"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGlobeLocation = function SvgGlobeLocation(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M24 0a6 6 0 0 0-6 6c0 4.792 5 6 5 8 0 .549.448 1 1 1s1-.451 1-1c0-2 5-3.208 5-8a6 6 0 0 0-6-6zm-9 3C8.383 3 3 8.383 3 15s5.383 12 12 12 12-5.383 12-12c0-.216-.02-.426-.031-.639a2.991 2.991 0 0 1-2.153 2.512A10.02 10.02 0 0 1 24.54 18h-3.72c.113-.955.181-1.954.181-3 0-.28-.015-.548-.025-.822-.197-.235-.644-.621-.987-.916a26.82 26.82 0 0 1-1.17-1.057 21.95 21.95 0 0 1-.02 5.795h-7.597A22.254 22.254 0 0 1 11 15c0-1.055.072-2.061.201-3h7.412a9.972 9.972 0 0 1-1.543-2h-5.484c.759-3.039 2.136-5 3.414-5 .341 0 .687.148 1.03.41a7.92 7.92 0 0 1 .519-2.299A12.167 12.167 0 0 0 15 3zm9 1a2 2 0 1 1 .001 3.999A2 2 0 0 1 24 4zM11.062 5.81C10.4 6.94 9.869 8.363 9.512 10H6.354a10.062 10.062 0 0 1 4.708-4.19zM5.462 12h3.72A25.252 25.252 0 0 0 9 15c0 1.046.068 2.045.182 3H5.46a9.986 9.986 0 0 1 0-6zm.893 8h3.158c.356 1.638.885 3.061 1.549 4.19A10.062 10.062 0 0 1 6.354 20zm5.232 0h6.828c-.759 3.039-2.136 5-3.414 5s-2.655-1.961-3.414-5zm8.9 0h3.16a10.053 10.053 0 0 1-4.709 4.19c.665-1.129 1.193-2.552 1.55-4.19z"
  }));
};

var _default = SvgGlobeLocation;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgParty = function SvgParty(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M10 3C6.134 3 3 6.07 3 9.857c0 3.454 2.61 8.198 6 9.01V19a1 1 0 0 0 2 0v-.133c3.39-.812 6-5.556 6-9.01C17 6.07 13.866 3 10 3zm11 4c-.83 0-1.622.17-2.342.475.217.76.342 1.556.342 2.382 0 2.335-1.002 5.294-2.734 7.579.903 1.626 2.223 2.971 3.734 3.404V21a1 1 0 0 0 2 0v-.152c2.837-.809 5-4.876 5-7.848a6 6 0 0 0-6-6zM9 21a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm11 2a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-10 1a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm11 2a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zM9 27a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z"
  }));
};

var _default = SvgParty;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoodSnacks = function SvgFoodSnacks(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M11.42 2.002c-.464.024-.827.161-1.08.41-.22.216-.535.704-.184 1.535a83.19 83.19 0 0 0 2.028 4.389C14.697 8.013 16.439 8 16.474 8h.014c1.015.007 1.933.4 2.586 1.11.724.786 1.04 1.862.889 3.027-.09.68-.801 3.371-1.791 6.593.288.186.563.26.775.268.406.017.813-.143 1.153-.475 1.484-1.466 5.778-6.454 7.793-11.865.276-.737.011-1.377-.688-1.67C21.922 2.774 12.243 1.96 11.42 2.002zM15 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6.523 1c-2.05 0-8.5.524-13.674 2.916-.706.326-.973.956-.696 1.643 2.1 5.195 8.213 12.446 8.811 12.984.337.303.682.457 1.031.457.302 0 .86-.122 1.2-.945 2.342-5.683 4.695-14.149 4.83-15.178.095-.727-.152-1.17-.375-1.412-.27-.292-.66-.462-1.127-.465zM13 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3.5 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z"
  }));
};

var _default = SvgFoodSnacks;
exports["default"] = _default;
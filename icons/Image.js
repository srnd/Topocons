"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgImage = function SvgImage(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M4 5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm19 3a2 2 0 1 1 .001 3.999A2 2 0 0 1 23 8zM9 13.002c.62 0 1.238.236 1.71.709l3.263 3.262L15 18l1.156 1.156a1.082 1.082 0 0 0 1.525-1.535l-1.152-1.15.76-.76a2.42 2.42 0 0 1 3.422 0L25 20v2H5v-6l2.29-2.29A2.412 2.412 0 0 1 9 13.003z"
  }));
};

var _default = SvgImage;
exports["default"] = _default;
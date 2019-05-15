"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCmd = function SvgCmd(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M6 5a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H6zm17.244 6.16h1.307v6.834h-1.266v-.775h-.08c-.265.533-.826.851-1.512.851-1.247 0-2.013-.976-2.013-2.554 0-1.575.77-2.547 2.013-2.547.668 0 1.222.323 1.477.869h.074V11.16zm-15.765.197c1.534 0 2.708 1.018 2.806 2.426H8.967c-.13-.743-.717-1.232-1.488-1.232-1.018 0-1.65.844-1.65 2.207s.63 2.21 1.653 2.21c.776 0 1.36-.458 1.49-1.171h1.317c-.112 1.399-1.25 2.363-2.81 2.363-1.875 0-3.038-1.295-3.038-3.402 0-2.104 1.159-3.4 3.038-3.4zm6.642 1.582c.695 0 1.17.342 1.367.916h.082c.23-.55.798-.916 1.489-.916.987 0 1.601.643 1.601 1.66v3.395h-1.306v-3.05c0-.589-.276-.88-.827-.88-.529 0-.869.379-.869.903v3.027h-1.256v-3.103c0-.524-.305-.825-.816-.825-.511 0-.873.4-.873.952v2.976h-1.307V13.05h1.266v.806h.082c.202-.564.717-.916 1.367-.916zm8.018 1.123c-.695 0-1.118.552-1.118 1.458 0 .915.418 1.46 1.118 1.46.7 0 1.12-.55 1.12-1.457.002-.9-.425-1.46-1.12-1.46z"
  }));
};

var _default = SvgCmd;
exports["default"] = _default;
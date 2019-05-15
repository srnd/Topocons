"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDraft = function SvgDraft(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _react["default"].createElement("path", {
    d: "M6.943 7c-.598 0-1.163.268-1.543.729L.47 13.713A2 2 0 0 0 0 15a2 2 0 0 0 .504 1.322l4.896 5.95c.38.461.945.728 1.543.728H28a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6.943zM6 13h1.68c1.19 0 1.869.712 1.869 1.96-.001 1.315-.667 2.04-1.87 2.04H6v-4zm5 .004h1.76c.933 0 1.492.491 1.492 1.318 0 .491-.245.938-.682 1.13L14.367 17h-1.14l-.684-1.398h-.525V17H11v-3.996zm5.377 0h1.244L18.965 17h-1.11l-.248-.879h-1.304l-.258.879h-1.01l1.342-3.996zm3.623 0h2.72v.816h-1.704v.912h1.547v.78h-1.547V17H20v-3.996zm3.84 0h3.32v.816h-1.154V17h-1.014v-3.18H23.84v-.816zm-11.822.767v1.114h.6c.373 0 .597-.208.597-.555-.001-.34-.237-.559-.6-.559h-.597zm-5 .045v2.368h.478c.66 0 1.018-.41 1.018-1.204-.001-.744-.378-1.164-1.018-1.164h-.478zm9.916.088l-.438 1.487h.92l-.43-1.487h-.052z"
  }));
};

var _default = SvgDraft;
exports["default"] = _default;
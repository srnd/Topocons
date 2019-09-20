"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPrideFist = function SvgPrideFist(props) {
  return _react["default"].createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "PrideFist_svg__a",
    d: "M8 19.5L2 16 .5 9l3-5L6 3.5l2-3 3 1L12 0l4 3.5v2L17.5 7l-5 8.5z"
  })), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("g", {
    transform: "translate(3 2.5)"
  }, _react["default"].createElement("mask", {
    id: "PrideFist_svg__b",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#PrideFist_svg__a"
  })), _react["default"].createElement("use", {
    fill: "gray",
    xlinkHref: "#PrideFist_svg__a"
  }), _react["default"].createElement("path", {
    fill: "#FF547F",
    mask: "url(#PrideFist_svg__b)",
    d: "M0-1.5h18v5H0z"
  }), _react["default"].createElement("path", {
    fill: "#FFB331",
    mask: "url(#PrideFist_svg__b)",
    d: "M0 3.5h18v4H0z"
  }), _react["default"].createElement("path", {
    fill: "#FFD631",
    mask: "url(#PrideFist_svg__b)",
    d: "M0 6.5h18v4H0z"
  }), _react["default"].createElement("path", {
    fill: "#31D362",
    mask: "url(#PrideFist_svg__b)",
    d: "M0 9.5h18v4H0z"
  }), _react["default"].createElement("path", {
    fill: "#5B55FF",
    mask: "url(#PrideFist_svg__b)",
    d: "M0 12.5h18v4H0z"
  }), _react["default"].createElement("path", {
    fill: "#AB56FF",
    mask: "url(#PrideFist_svg__b)",
    d: "M0 15.5h18v4H0z"
  })), _react["default"].createElement("path", {
    fill: "#000",
    fillRule: "nonzero",
    d: "M14.665 11.384a2.492 2.492 0 0 1-.763-.68 3.078 3.078 0 0 1-4.138 1.249l-.408-.217c-.2.561-.235 1.048-.122 1.47a1 1 0 1 1-1.932.517c-.32-1.195-.055-2.49.734-3.857a1 1 0 0 1 1.333-.384l1.329.7c.512.27 1.146.088 1.436-.414a.72.72 0 0 0-.264-.984c.024.014-1.341-.53-2.894-1.143a2 2 0 0 0-2.462.862l-1.21 2.095c-.523.906-.46 1.936.092 3.785.033.11.26.853.324 1.069.124.423.21.762.273 1.085.188.972.141 1.764-.26 2.461A1 1 0 0 1 4 18.002c.116-.201.136-.54.03-1.085a10.008 10.008 0 0 0-.229-.903c-.058-.201-.284-.937-.32-1.058-.699-2.34-.79-3.83.092-5.358l1.21-2.095a4 4 0 0 1 3.471-2 1.01 1.01 0 0 1 .05-.1l1.25-2.166a2.5 2.5 0 0 1 3.854-.595 2.5 2.5 0 0 1 4.408 1.51 2.5 2.5 0 0 1 1.952 3.316 2.5 2.5 0 0 1 1.41 3.634l-.499.867c-.03.052-.062.103-.095.153a1.01 1.01 0 0 1-.051.101 42.05 42.05 0 0 0-.776 1.43c-.223.42-.355.666-.5.933-.53.97-.963 1.68-1.398 2.252-.839 1.102-1.654 1.807-3.043 2.774l.015-.01c.123-.087-.624.431-.782.543-1.078.765-1.675 1.343-2.169 2.198a1 1 0 0 1-1.732-1c.664-1.15 1.452-1.913 2.745-2.83.112-.08.227-.16.379-.265l.375-.259c1.248-.867 1.93-1.454 2.62-2.362.36-.473.749-1.11 1.234-1.999.09-.164.174-.32.28-.518a2.508 2.508 0 0 1-1.566-1.409 2.489 2.489 0 0 1-1.549-.317zm3.598-.232a.5.5 0 0 0 .683-.183l.5-.866a.5.5 0 1 0-.866-.5l-.5.866a.5.5 0 0 0 .183.683zm-1.415-2.549l1-1.732a.5.5 0 1 0-.866-.5l-1 1.732-.5.866a.5.5 0 1 0 .866.5l.5-.866zM15.25 5.371l.5-.866a.5.5 0 1 0-.866-.5l-1 1.732-.5.866a.5.5 0 1 0 .866.5l1-1.732zm-4.042 1.001l.944-1.635a.5.5 0 1 0-.866-.5l-1.018 1.764.94.371z"
  })));
};

var _default = SvgPrideFist;
exports["default"] = _default;
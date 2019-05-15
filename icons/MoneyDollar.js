"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMoneyDollar = function SvgMoneyDollar(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    style: {
      lineHeight: "normal",
      textIndent: 0,
      textAlign: "start",
      textDecorationLine: "none",
      textDecorationStyle: "solid",
      textDecorationColor: "#000",
      textTransform: "none",
      blockProgression: "tb",
      isolation: "auto",
      mixBlendMode: "normal"
    },
    d: "M4 4a2 2 0 0 0-.387.04c-.01.001-.02.005-.031.007A2 2 0 0 0 2 6v12a2 2 0 0 0 .04.387c.001.01.005.02.007.031A2 2 0 0 0 4 20h22a2 2 0 0 0 .387-.04c.01-.001.02-.005.031-.007A2 2 0 0 0 28 18V6a2 2 0 0 0-.04-.387c-.001-.01-.005-.02-.007-.031A2 2 0 0 0 26 4H4zm2 2h18a2 2 0 0 0 2 2v8a2 2 0 0 0-2 2H6a2 2 0 0 0-2-2V8a2 2 0 0 0 2-2zm9 2c-2.209 0-4 2.015-4 4.5 0 1.422.598 2.675 1.514 3.5h4.972c.916-.825 1.514-2.078 1.514-3.5 0-2.485-1.791-4.5-4-4.5zm-8 3a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm16 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm2.984 10.986a1 1 0 0 0-.144.014H25v2c-.839 0-1.554.516-1.852 1.248a45.687 45.687 0 0 0-3.699-1.21C15.817 23.016 10.603 22 4 22a1 1 0 1 0 0 2c6.397 0 11.422.983 14.908 1.963 1.743.49 3.1.978 4.059 1.346.48.184.86.337 1.15.45.146.058.266.104.383.143.103.035.173.079.418.09.028.003.054.018.082.018 1.076 0 1.937-.851 1.99-1.908a1 1 0 0 0 .01-.141V22h-.846a1 1 0 0 0-.17-.014z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgMoneyDollar;
exports["default"] = _default;
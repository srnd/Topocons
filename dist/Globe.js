"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGlobe = function SvgGlobe(props) {
  return _react["default"].createElement("svg", _extends({
    width: 30,
    height: 30
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
    d: "M15 3C8.384 3 3 8.384 3 15s5.384 12 12 12 12-5.384 12-12S21.616 3 15 3zm0 2c.393 0 .8.163 1.266.596.465.433.946 1.13 1.359 2.039.307.674.557 1.492.773 2.365h-6.796c.216-.873.466-1.69.773-2.365.413-.908.894-1.606 1.36-2.04C14.2 5.164 14.606 5 15 5zm-3.912.793c-.188.32-.37.655-.533 1.016-.428.94-.771 2.02-1.03 3.191H6.344a9.998 9.998 0 0 1 4.744-4.207zm7.824 0A9.998 9.998 0 0 1 23.656 10h-3.181c-.259-1.172-.602-2.25-1.03-3.191a10.972 10.972 0 0 0-.533-1.016zM5.457 12h3.729C9.068 12.96 9 13.962 9 15s.068 2.04.186 3H5.457A10.037 10.037 0 0 1 5 15c0-1.046.161-2.053.457-3zm5.766 0h7.554c.13.954.223 1.947.223 3s-.092 2.046-.223 3h-7.554A21.977 21.977 0 0 1 11 15c0-1.053.092-2.046.223-3zm9.591 0h3.729c.296.947.457 1.954.457 3s-.161 2.053-.457 3h-3.729c.118-.96.186-1.962.186-3s-.068-2.04-.186-3zm-14.47 8h3.181c.259 1.172.602 2.25 1.03 3.191.164.361.345.695.533 1.016A9.998 9.998 0 0 1 6.344 20zm5.258 0h6.796c-.216.873-.466 1.69-.773 2.365-.413.908-.894 1.606-1.36 2.04-.465.432-.872.595-1.265.595-.393 0-.8-.163-1.266-.596-.465-.433-.946-1.13-1.359-2.039-.307-.674-.557-1.492-.773-2.365zm8.873 0h3.181a9.998 9.998 0 0 1-4.744 4.207c.188-.32.37-.655.533-1.016.428-.94.771-2.02 1.03-3.191z",
    fontWeight: 400,
    fontFamily: "sans-serif",
    overflow: "visible"
  }));
};

var _default = SvgGlobe;
exports["default"] = _default;
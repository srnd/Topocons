"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMoneyCurrencyCad = function SvgMoneyCurrencyCad(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 0a1 1 0 0 0-.898.564L12 4 9.646 2.236l-.001-.002a1 1 0 0 0-.014-.01A1 1 0 0 0 9 2a1 1 0 0 0-1 1 1 1 0 0 0 .01.133 1 1 0 0 0 .004.039L9 12l-4.605-1.918-.006-.004a1 1 0 0 0-.006-.002A1 1 0 0 0 4 10a1 1 0 0 0-1 1v2.465l-2.273.572v.002A1 1 0 0 0 0 15a1 1 0 0 0 .2.598v.002l.017.021L2 18 .264 20.324A1 1 0 0 0 0 21a1 1 0 0 0 .756.969v.002l.017.002a1 1 0 0 0 .163.023L8 23v3a1 1 0 0 0 1 1h5v2a1 1 0 0 0 2 0v-2h5a1 1 0 0 0 1-1v-3l7.047-1.002a1 1 0 0 0 .176-.023l.021-.004v-.002A1 1 0 0 0 30 21a1 1 0 0 0-.264-.676L28 18l1.766-2.355a1 1 0 0 0 .035-.045v-.002A1 1 0 0 0 30 15a1 1 0 0 0-.727-.96v-.003l-.074-.017L27 13.465V11a1 1 0 0 0-1-1 1 1 0 0 0-.38.076 1 1 0 0 0-.003 0L21 12l.99-8.867A1 1 0 0 0 22 3a1 1 0 0 0-1-1 1 1 0 0 0-.63.225L18 4 15.898.566V.564A1 1 0 0 0 15 0zm-1 10h2v2.115c1.35.302 2.253 1.222 2.297 2.465H16.61c-.083-.676-.712-1.127-1.578-1.127-.896 0-1.488.415-1.488 1.068 0 .528.407.832 1.41 1.045l1.033.22c1.721.361 2.461 1.105 2.461 2.433 0 1.43-.917 2.388-2.449 2.68V23h-2v-2.098c-1.471-.276-2.395-1.179-2.45-2.5h1.731c.083.694.784 1.139 1.793 1.139.931 0 1.59-.45 1.59-1.098 0-.546-.427-.86-1.477-1.086l-1.115-.238c-1.56-.326-2.326-1.138-2.326-2.443 0-1.313.869-2.249 2.254-2.557V10z"
  }));
};

var _default = SvgMoneyCurrencyCad;
exports["default"] = _default;
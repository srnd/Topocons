"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBrowserFirefox = function SvgBrowserFirefox(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M15 3c-3.87 0-7.268 2.003-9.229 5.025-.365-.498-.752-1.452-.9-2.437-.899.882-1.261 2.495-1.111 4.652-.068.095-1.305 1.692-1.305 3.197-.003.002.01.315.035.407l.73-.596c-.263.667-.403 2.106-.384 2.857.039 1.58.158 3.728 1.816 6.12 2.487 3.217 5.68 4.523 9.446 4.752 3.762.224 7.105-.958 9.756-3.946 1.793-2.2 2.789-3.96 3.289-6.347.35-1.67.49-3.491.345-4.791a3.884 3.884 0 0 1-.672 1.48c-.035-1.428-.107-2.973-.5-4.096-.275-.757-.708-1.824-1.23-2.52.244.96.166 1.825.172 2.366-.619-2.518-2.397-3.668-4.024-4.182A10.944 10.944 0 0 0 15 3zm0 2c4.104 0 7.568 2.763 8.646 6.525-.292-.377-.708-.82-1.023-.978.529 2.059.686 3.54.256 4.883-.294-.895-.727-2.118-.969-2.305.337 2.758.045 5.486-1.195 6.816.12-.469.116-1.253.062-1.777-1.457 2.184-2.766 3.17-4.625 3.238-1.069-.006-2.386-.402-2.382-.402-.957-.322-1.81-.861-2.44-1.656 1.288.359 2.616.55 3.404.146l1.787-1.097-.005-.006a.724.724 0 0 1 .588.017c.389-.053.522-.257.392-.603-.188-.26-.47-.495-.836-.701-.793-.413-1.622-.346-2.486.2-.822.465-2.074-.02-2.932-.378-.316-.131-1.156-.774-1.234-1.29-.087-.571.132-.997.576-.866-.126-.011 1.292.24 1.963.433 0-.753-.416-1.493-.62-2.076v-.014c.63-.582 1.447-.942 1.923-1.21.576-.286.505-.883.295-1.012-.768.073-1.329-.076-1.329-.076-.184-.054-.672-.276-.955-.547l-.55-.522s-.215-.155-.202-.26c.207-1.359 1.242-2.24 1.907-2.687-1.235.155-2.354.704-3.348 1.658a5.976 5.976 0 0 0-1.482-.316A8.976 8.976 0 0 1 15 5z"
  }));
};

var _default = SvgBrowserFirefox;
exports["default"] = _default;
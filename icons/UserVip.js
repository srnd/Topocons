"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUserVip = function SvgUserVip(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 30 30",
    height: "1em",
    width: "auto",
    preserveAspectRatio: "xMinYMin",
    style: {
      fill: "currentColor"
    }
  }, props), _react["default"].createElement("path", {
    d: "M4 5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm.67 6h2.334l1.535 5.889h.106L10.135 11h2.195l-2.512 8H7.246L4.67 11zm9.312 0h2.036v8h-2.036v-8zM18 11h3.504c1.719 0 2.883 1.12 2.883 2.84 0 1.702-1.225 2.814-3.004 2.814h-1.348V19H18v-8zm2.035 1.563v2.556h.92c.865 0 1.375-.444 1.375-1.275 0-.843-.504-1.281-1.363-1.281h-.932z"
  }));
};

var _default = SvgUserVip;
exports["default"] = _default;
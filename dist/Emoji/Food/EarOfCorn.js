"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEarOfCorn = function SvgEarOfCorn(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M31.915 29.901S15.82 26.848 7.429 42.187c11.727-7.408 15.321 4.669 24.996 8.237 12.927 4.771 24.94-5.365 19.22-19.002C45.926 17.767 32.014 14.486 34.584 2c-14.578 18.503-2.669 27.901-2.669 27.901zM61.734 54.718c-1.727-1.704-1.596-7.844-8.33-1.186-6.729 6.66-.475 6.519 1.235 8.208 1.71 1.686 8.813-5.326 7.095-7.022z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M51.7 51.354c-9.643 8.1-2.705 7.278-.281 9.099 2.319 1.744 11.651-6.1 9.751-8.306-1.583-1.837.177-8.886-9.47-.793z"
  }), _react["default"].createElement("radialGradient", {
    id: "ear-of-corn_svg__a",
    cx: 171.947,
    cy: 114.887,
    r: 12.776,
    gradientTransform: "matrix(.7154 -.7103 1.9311 1.9174 -329.622 -82.531)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd500"
  }), _react["default"].createElement("stop", {
    offset: 0.324,
    stopColor: "#ffd200"
  }), _react["default"].createElement("stop", {
    offset: 0.609,
    stopColor: "#ffc700"
  }), _react["default"].createElement("stop", {
    offset: 0.877,
    stopColor: "#ffb500"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fa0"
  })), _react["default"].createElement("path", {
    fill: "url(#ear-of-corn_svg__a)",
    d: "M38.747 24.854c.974-1.452.695-2.166-.308-3.159-.997-.993-1.973-1.515-3.692-.801.976-1.453.695-2.167-.304-3.16-1.033-1.024-2.059-1.54-3.909-.697.703-1.225.405-1.902-.529-2.828-1.032-1.024-2.051-1.55-3.841-.767.644-1.156.335-1.831-.598-2.746-1.098-1.084-2.137-1.618-4.037-.726.353-.899-.005-1.512-.85-2.352-1.122-1.114-2.162-1.693-3.989-.858.239-.802-.088-1.424-.896-2.222-1.429-1.41-2.812-1.861-5.424-.089-2.251-2.157-5.11-1.512-5.741 1.326-2.86.627-3.509 3.464-1.334 5.701-1.786 2.593-1.333 3.964.088 5.384.803.803 1.428 1.128 2.236.889-.839 1.815-.257 2.847.864 3.963.846.841 1.464 1.195 2.37.844-.898 1.887-.361 2.917.73 4.009.922.925 1.603 1.232 2.765.593-.788 1.779-.259 2.787.775 3.814.933.927 1.612 1.222 2.847.524-.849 1.837-.332 2.854.702 3.881 1.001.992 1.72 1.272 3.182.302-.719 1.709-.195 2.675.806 3.667 1 .995 1.722 1.271 3.181.304-.716 1.706-.192 2.676.809 3.669 0 0 12.589 10.539 20.498 2.686 7.909-7.852-2.706-20.352-2.706-20.352-1.001-.992-1.977-1.513-3.695-.799z"
  }), _react["default"].createElement("path", {
    fill: "#E6A500",
    d: "M14.498 10.48c0 .002-.288-.843.487-2.04-1.294.703-2.132.552-2.132.553 0-.003.09 1.135-.471 2.018.849-.597 2.115-.53 2.116-.531zM17.38 13.066c.001-.001.041 1.184-.577 2.128.91-.659 2.22-.637 2.222-.639 0 0-.249-.866.596-2.148-1.377.784-2.24.658-2.241.659zM25.628 20.486c.001-.001-.044 1.267-.771 2.323 1.019-.771 2.413-.831 2.414-.834 0 0-.214-.915.796-2.344-1.524.93-2.439.855-2.439.855zM21.507 16.777c.002-.001-.001 1.227-.674 2.224.963-.713 2.318-.732 2.32-.734.002 0-.226-.902.693-2.249-1.45.858-2.339.757-2.339.759zM29.75 24.192s-.087 1.313-.874 2.421c1.074-.823 2.514-.929 2.516-.931-.003.001-.178-.946.895-2.446-1.603 1.007-2.537.956-2.537.956zM37.993 31.609c.003 0-.171 1.4-1.065 2.617 1.188-.931 2.709-1.123 2.711-1.124-.002.001-.131-.983 1.094-2.643-1.735 1.14-2.74 1.15-2.74 1.15zM36.506 26.846c-1.658 1.079-2.635 1.049-2.637 1.051.002-.001-.131 1.355-.969 2.52 1.128-.878 2.613-1.025 2.616-1.027-.003 0-.155-.962.99-2.544zM9.338 15.602c.002-.002-.066-1.258.536-2.1-.89.554-2.036.467-2.033.465 0 .002.151.832-.557 2.119 1.206-.767 2.055-.486 2.054-.484zM11.278 20.689c1.292-.838 2.165-.593 2.166-.592.002-.002-.022-1.304.643-2.205-.953.613-2.145.574-2.143.57-.001.004.125.861-.666 2.227zM20.917 28.285c.002-.002.063-1.386.838-2.399-1.062.72-2.338.768-2.338.766 0 0 .076.908-.862 2.424 1.44-1.004 2.362-.791 2.362-.791zM17.92 21.889c-1.006.671-2.241.675-2.238.673-.002 0 .1.882-.764 2.323 1.356-.915 2.264-.689 2.264-.689.001-.001.021-1.348.738-2.307zM22.188 33.265c1.508-1.067 2.462-.891 2.462-.891.002-.002.107-1.43.937-2.496-1.116.78-2.438.867-2.438.867s.051.93-.961 2.52zM25.822 37.454c1.593-1.141 2.563-.985 2.561-.984.001-.004.152-1.477 1.036-2.597-1.172.834-2.54.965-2.539.964-.001.001.029.97-1.058 2.617zM6.297 7.472s.04 1.061-.485 1.877c.773-.545 1.668-1.257 2.394-2.365-1.171.639-1.909.488-1.909.488z"
  }), _react["default"].createElement("linearGradient", {
    id: "ear-of-corn_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 191.172,
    y1: 184.708,
    x2: 183.027,
    y2: 144.307,
    gradientTransform: "rotate(-45.001 -24.424 254.628)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#297124"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#77b516"
  })), _react["default"].createElement("path", {
    fill: "url(#ear-of-corn_svg__b)",
    d: "M57.759 55.397c13.184-13.028-11.947-32.186-13.32-41.841-16.132 22.243 13.32 41.841 13.32 41.841z"
  }), _react["default"].createElement("linearGradient", {
    id: "ear-of-corn_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 172.555,
    y1: 178.916,
    x2: 158.32,
    y2: 143.328,
    gradientTransform: "rotate(-45.001 -24.424 254.628)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#297124"
  }), _react["default"].createElement("stop", {
    offset: 0.148,
    stopColor: "#43871f"
  }), _react["default"].createElement("stop", {
    offset: 0.325,
    stopColor: "#5a9c1b"
  }), _react["default"].createElement("stop", {
    offset: 0.515,
    stopColor: "#6aaa18"
  }), _react["default"].createElement("stop", {
    offset: 0.726,
    stopColor: "#74b217"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#77b516"
  })), _react["default"].createElement("path", {
    fill: "url(#ear-of-corn_svg__c)",
    d: "M22.731 38.156C14.527 39.362 9.758 49.46 14.39 54.029c0 0-.237-4.343 3.392-4.876 9.066-1.323 25.423 20.652 39.977 6.244 0 0-10.46-19.644-35.028-17.241z"
  }), _react["default"].createElement("path", {
    fill: "#92C932",
    d: "M44.363 15.82s-9.456 13.012 4.826 28.203c0-.001-7.884-16.893-4.826-28.203zM19.157 42.128s7.905-8.547 30.245 6.447c0 0-20.725-9.491-30.245-6.447z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M10.083 7.612c-2.992-.001-.997 1.968 0 1.968.997.001 2.003-1.968 0-1.968zM13.47 4.268c-2.991 0-.997 1.968 0 1.968s1.993-1.969 0-1.968zM7.541 3.771c-2.991 0-.998 1.968 0 1.968.996 0 1.994-1.969 0-1.968zM14.076 11.553c-2.99 0-.996 1.968.001 1.968.996 0 1.993-1.967-.001-1.968zM18.444 7.008c-2.991 0-.998 1.969 0 1.969.996 0 1.994-1.968 0-1.969zM23.327 10.293c-2.991.001-.998 1.97 0 1.969.997 0 1.993-1.969 0-1.969zM28.004 13.799c-2.991-.001-.997 1.968 0 1.968 1.007 0 2.004-1.968 0-1.968zM18.532 15.497c-2.991 0-.997 1.969 0 1.969.997-.001 1.994-1.969 0-1.969zM22.749 19.443c-2.991 0-.997 1.969 0 1.969s1.994-1.969 0-1.969zM35.164 30.836c-2.99 0-.997 1.969.001 1.97.997.001 1.994-1.969-.001-1.97zM26.624 23.103c-2.991 0-.998 1.969 0 1.968.996-.001 1.993-1.968 0-1.968zM30.725 26.932c-2.991 0-.997 1.969 0 1.969s1.994-1.969 0-1.969zM39.216 34.838c-2.99 0-.997 1.969 0 1.969s1.994-1.97 0-1.969zM32.275 17.521c-2.99 0-.997 1.969 0 1.969s1.994-1.97 0-1.969zM36.463 21.656c-2.991 0-.996 1.969 0 1.969.997 0 1.994-1.969 0-1.969z"
  }));
};

var _default = SvgEarOfCorn;
exports["default"] = _default;
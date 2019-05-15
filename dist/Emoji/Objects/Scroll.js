"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgScroll = function SvgScroll(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "scroll_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 29.052,
    y1: 6.74,
    x2: 31.789,
    y2: 58.954
  }, _react["default"].createElement("stop", {
    offset: 0.042,
    stopColor: "#875f3a"
  }), _react["default"].createElement("stop", {
    offset: 0.106,
    stopColor: "#b68e5f"
  }), _react["default"].createElement("stop", {
    offset: 0.169,
    stopColor: "#deb57f"
  }), _react["default"].createElement("stop", {
    offset: 0.219,
    stopColor: "#f6cd92"
  }), _react["default"].createElement("stop", {
    offset: 0.25,
    stopColor: "#ffd699"
  }), _react["default"].createElement("stop", {
    offset: 0.75,
    stopColor: "#ffd699"
  }), _react["default"].createElement("stop", {
    offset: 0.78,
    stopColor: "#f8cf94"
  }), _react["default"].createElement("stop", {
    offset: 0.824,
    stopColor: "#e5bc84"
  }), _react["default"].createElement("stop", {
    offset: 0.876,
    stopColor: "#c69d6c"
  }), _react["default"].createElement("stop", {
    offset: 0.934,
    stopColor: "#9b734a"
  }), _react["default"].createElement("stop", {
    offset: 0.958,
    stopColor: "#875f3a"
  })), _react["default"].createElement("path", {
    fill: "url(#scroll_svg__a)",
    d: "M5.725 2.92c-8.285 2.965-.846 20.819 3.99 35.428 2.631-.273 4.211.252 4.211.252s-3.699 1.318-3.615 1.582c3.24 10.151 1.697 20.913 5.729 21.62 2.732 0 7.367-2.307 17.539-1.73 14.713.83 19.525.17 21.346-2.729 5.986-9.531 3.104-22.218-2.221-31.537-.455-.795-5.309-2.014-5.309-2.014s1.281-1.301 3.168-1.869c-3.025-5.838-4.559-11.118-1.588-17.925-11.407-3.314-18.524.393-27.293.209C13.662 4.04 8.348 2.615 5.725 2.92z"
  }), _react["default"].createElement("path", {
    opacity: 0.5,
    fill: "#B0751F",
    d: "M22.779 21.54c1.744-.106 3.842-.258 5.112-1.169.305.935 2.04 1.107 2.979.949.402-.058.733-.201.99-.437.937.023 1.888.026 2.792-.13.913-.159 5.365.909 5.565-.304-.687-.141-5.273.846-3.977-.59-1.496.674-3.128.553-4.704.757-.927 1.28-3.658.144-3.031-1.31-.54.528-2.974 1.514-3.947 1.688-1.651.298-3.402.286-5.115.03 1.507-.82 2.562-1.914 3.694-3.008 1.233-1.186 1.823-2.169-.748-2-1.703.113-8.903 1.173-8.515 3.1.706-.104 1.55-1.058 2.438-1.369 2.126-.746 5.022-1.638 7.481-1.374-.062 1.402-3.012 3.419-4.289 4.175-1.584.938-4.851-1.429-6.209-.379-.503.389-.323 1.425.224 1.805.822.572 2.17.313 3.034.11a12.68 12.68 0 0 0 1.993-.628c.967-.399 3.024.16 4.233.084zm-8.632.346c.181.049.931.263-.001-.002-.051-.014-.041-.012-.002 0-1.296-.371-.767-1.724.611-1.467 1.179.22 2.336.528 3.515.754-1.071.436-2.823 1.079-4.123.715zM49.647 51.881c-1.375.784-3.193 1.597-4.975 1.702.023-1.131 1.451-1.867 1.66-2.954.27-1.406-2.509-.933-3.478-.794-5.287.76-8.618 2.027-10.478 2.573.202-1.466-7.824.612-7.898 1.528.682.03 7.07-2.6 7.359-1.613.075.263-1.324.709-1.524.797 1.725-.209 5.684-1.838 12.736-2.922.563-.086 2.114-.486 2.647-.039.644.538-1.093 2.197-1.324 2.624-1.132 2.105 2.004.934 3.246.487 1.385-.498 3.618-1.324 4.028-2.568-.759-.211-1.355.813-1.999 1.179zm-14.693-.033l.533-.204a51.62 51.62 0 0 1-.533.204zM50.34 47.573c-1.016-.273-2.268-.723-2.654-1.582 1.771.195 4.882-2.611 2.511-3.414-1.565-.526-3.105 2.068-3.035 2.991-.827-.412-8.25.642-5.865-.369-.924-.019-1.191.458-1.935.786-.76.338-3.813 1.777-4.684 1.363-.486-.234.847-1.104 1.008-1.234-.976-.287-3.097 1.29-4.247 1.592-.563.147-.837.117-1.239-.17-.509-.364-2.081.213-2.52.341-1.348.394-2.74.931-2.631-.406.112-1.396-4.483.649-5.22.867.695.47 3.585-1.024 4.793-1.079.202.826-.485 1.395 1.221 1.287.882-.214 1.794-.376 2.681-.607.954-.248.958-.179 1.744.052 1.327.386 3.021-.663 4.035-1.13-.959 1.549 3.902-.103 4.292-.244.231-.085 1.742-.801 1.832-.705.445.452 6.036-.24 6.801-.013.566 1.765 3.919 2.292 5.772 2.175-.44-.432-1.745-.252-2.66-.501zm-2.736-2.437c.018-.114.011-.071 0 0zm-.011.07c-.006.035-.009.049 0 0v-.005c.083-.46 2.097-3.167 2.635-2.194.758 1.367-.68 3.048-2.632 2.697l-.003-.498zM27.251 26.417c-.013.68.794 1.117 2.159.764 2.204-.608 3.235-1.789 3.936-3.233 3.208 1.052 6.206 1.097 8.824.411 0 0 .188.426-.213.594-2.002.839-5.409.509-8.236-.357-.836 1.351-2.309 2.414-4.137 2.906-1.605.43-2.692-.11-2.879-.797-.178-.547.051-1.029.369-1.496-1.892.601-3.816.936-5.889.48-.043.407-.254.794-.538 1.102-.564.635-.587.509-1.063 1.263-.737-.444-1.227-.788-1.436-1.858-.352.211-1.372.783-1.838.75-.413-.029-.525-.363-.525-.363 1.273-.271 2.104-.888 2.962-1.501l.003.615c.003.547.193 1.179.634 1.58.833-.872 1.302-.892 1.398-2.015 2.62.597 4.398.09 7.006-.864.316.722-.521 1.175-.537 2.019zM17.678 37.837c2.273-1.705 5.504-2.325 8.064-1.092-1.62.717-.856 1.904.391 1.896 1.101-.031 1.678-.925.504-1.807 2.844-.799 6.746-1.467 11.283-1.758-.488.609-.776 1.379-.346 2.069.583.952 2.208 1.073 3.171.418 1.598-1.049 2.13-3.558 3.84-3.345 1.038.131 1.509 1.322 2.902 1.496.671.084.924-.41.628-.695 0 0-.35.248-.864.184-.637-.078-1.621-1.26-2.576-1.379-3.132-.392-3.323 4.539-5.978 3.617-1.6-.521-.043-2.253-.021-2.926-6.345.49-10.924 1.521-12.465 2.044-2.324-1.284-6.396-1.149-8.467.663-.418.369-.066.615-.066.615zm8.496-.853c1.027.659.723 1.327-.11 1.318-.872.001-1.261-.795.11-1.318zM16.685 31.952c3.813.477 6.09-2.483 9.21-1.379 1.745.627 3.121 2.615 5.204 2.526 2.034-.163 2.534-2.729 4.224-2.687.958-.002 1.404.971 2.275 1.316 1.371.547 2.684-1.118 3.296-2.141 1.244 1.917 3.8 2.77 7.625-.193 0 0-.232-.209-.577-.252-.994-.124-4.357 4.068-7.056-.369-.496.828-1.956 3.023-3.069 2.562-.849-.337-1.166-1.363-2.523-1.394-2.143-.026-2.738 2.557-4.305 2.678-1.622.145-3.146-1.71-4.938-2.356-3.761-1.233-7.997 3.37-10.542.407 0 0-.217.107-.243.345-.037.333.677.845 1.419.937zM48.106 40.735c-2.554.69-7.893-1.525-11.622.148 0 0 .843 1.832-1.888 2.184-2.62.33-4.06-1.334-4.06-1.334-.466.729-1.608 2.645-2.932 2.346-1.449-.202.751-2.893-1.313-3.098-2.024.082-3.004 3.395-5.067 4.952 0 0 .147.223.523.249 1.224.088 3.332-5.25 4.738-4.791.926.184-.722 2.605 1.036 3.016 1.267.295 2.438-.938 3.116-1.748 0 0 1.695 1.169 4.114.908 3.02-.324 2.503-2.408 2.503-2.408 3.358-1.455 8.123.986 11.88-.18.002 0-.453-.399-1.028-.244z"
  }), _react["default"].createElement("linearGradient", {
    id: "scroll_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 7.516,
    y1: 12.365,
    x2: 7.516,
    y2: 5.688
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d19b69"
  }), _react["default"].createElement("stop", {
    offset: 0.329,
    stopColor: "#ba8851"
  }), _react["default"].createElement("stop", {
    offset: 0.744,
    stopColor: "#a27439"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#996d30"
  })), _react["default"].createElement("path", {
    fill: "url(#scroll_svg__b)",
    d: "M5.154 12.301c-1.613-.189-2.295-5.549.652-6.514 7.856-1.103 6.866 7.396-.652 6.514z"
  }), _react["default"].createElement("path", {
    fill: "#91601A",
    d: "M6.07 9.422c-.263-.334-.513-1.69.473-2.012 3.129 0 2.025 2.305-.473 2.012z"
  }), _react["default"].createElement("linearGradient", {
    id: "scroll_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 8.253,
    y1: 9.581,
    x2: 8.253,
    y2: 5.527
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c48d3f"
  }), _react["default"].createElement("stop", {
    offset: 0.243,
    stopColor: "#cb9548"
  }), _react["default"].createElement("stop", {
    offset: 0.638,
    stopColor: "#ddaa60"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2c37c"
  })), _react["default"].createElement("path", {
    fill: "url(#scroll_svg__c)",
    d: "M6.07 9.422c.402.449 2.586-.236 4.43.154.627-2.613-.037-4.822-4.693-3.789 1.869-.166 2.047 3.621.263 3.635z"
  }), _react["default"].createElement("linearGradient", {
    id: "scroll_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 28.42,
    y1: 13.264,
    x2: 28.42,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d69f51"
  }), _react["default"].createElement("stop", {
    offset: 0.089,
    stopColor: "#dea95e"
  }), _react["default"].createElement("stop", {
    offset: 0.301,
    stopColor: "#ecbd78"
  }), _react["default"].createElement("stop", {
    offset: 0.52,
    stopColor: "#f7cb8a"
  }), _react["default"].createElement("stop", {
    offset: 0.748,
    stopColor: "#fdd395"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd699"
  })), _react["default"].createElement("path", {
    fill: "url(#scroll_svg__d)",
    d: "M5.725 2.92c4.436.028 4.434 9.453-.57 9.381 9.676 3.104 27.746-2.725 43.293.923 2.924.684 4.713-7.442 1.621-9.184-8.02-4.516-24.561-.097-28.6-.293-10.496-.514-13.324-1.59-15.744-.827z"
  }), _react["default"].createElement("path", {
    opacity: 0.5,
    fill: "#B0751F",
    d: "M22.801 26.058c-1.26.23 1.054-.196 0 0zM14.609 27.31l.002.002-.004-.002z"
  }), _react["default"].createElement("linearGradient", {
    id: "scroll_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 17.587,
    y1: -34.336,
    x2: 17.587,
    y2: -27.568,
    gradientTransform: "matrix(1 -.0349 0 -1 0 25.247)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d19b69"
  }), _react["default"].createElement("stop", {
    offset: 0.329,
    stopColor: "#ba8851"
  }), _react["default"].createElement("stop", {
    offset: 0.744,
    stopColor: "#a27439"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#996d30"
  })), _react["default"].createElement("path", {
    fill: "url(#scroll_svg__e)",
    d: "M15.469 52.44c-1.891.594-2.295 5.633.654 6.49 7.854.813 5.758-8.202-.654-6.49z"
  }), _react["default"].createElement("path", {
    fill: "#91601A",
    d: "M16.387 55.286c-.264.344-.516 1.709.471 1.994 3.128-.115 2.025-2.381-.471-1.994z"
  }), _react["default"].createElement("linearGradient", {
    id: "scroll_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 18.569,
    y1: -34.502,
    x2: 18.569,
    y2: -30.447,
    gradientTransform: "matrix(1 -.0349 0 -1 0 25.247)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c48d3f"
  }), _react["default"].createElement("stop", {
    offset: 0.243,
    stopColor: "#cb9548"
  }), _react["default"].createElement("stop", {
    offset: 0.638,
    stopColor: "#ddaa60"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2c37c"
  })), _react["default"].createElement("path", {
    fill: "url(#scroll_svg__f)",
    d: "M16.387 55.286c.4-.463 2.584.141 4.428-.318.629 2.592-.037 4.824-4.691 3.963 1.866.097 2.044-3.698.263-3.645z"
  }), _react["default"].createElement("linearGradient", {
    id: "scroll_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 38.734,
    y1: -37.962,
    x2: 38.734,
    y2: -26.679,
    gradientTransform: "matrix(1 -.0349 0 -1 0 25.247)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d69f51"
  }), _react["default"].createElement("stop", {
    offset: 0.089,
    stopColor: "#dea95e"
  }), _react["default"].createElement("stop", {
    offset: 0.301,
    stopColor: "#ecbd78"
  }), _react["default"].createElement("stop", {
    offset: 0.52,
    stopColor: "#f7cb8a"
  }), _react["default"].createElement("stop", {
    offset: 0.748,
    stopColor: "#fdd395"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd699"
  })), _react["default"].createElement("path", {
    fill: "url(#scroll_svg__g)",
    d: "M16.039 61.802c2.242-.098 3.35-2.551 3.252-4.922.754-.455 1.6-.701 1.6-.701s-1.035-.4-1.76-.523c-.42-1.824-1.961-3.6-3.662-3.215 9.676-3.463 27.746 1.699 43.293-2.523 2.924-.793 4.713 7.268 1.621 9.123-8.02 4.813-24.559 1.006-28.6 1.352-10.496.899-13.324 2.081-15.744 1.409z"
  }));
};

var _default = SvgScroll;
exports["default"] = _default;
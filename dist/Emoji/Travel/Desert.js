"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDesert = function SvgDesert(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fill: "#FEEC9A",
    cx: 50.125,
    cy: 13.875,
    r: 11.875
  }), _react["default"].createElement("circle", {
    fill: "#FFE561",
    cx: 50.125,
    cy: 13.876,
    r: 9.501
  }), _react["default"].createElement("linearGradient", {
    id: "desert_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 44.571,
    x2: 32.001,
    y2: 23.943
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa929"
  }), _react["default"].createElement("stop", {
    offset: 0.06,
    stopColor: "#fb9c24"
  }), _react["default"].createElement("stop", {
    offset: 0.253,
    stopColor: "#ef7617"
  }), _react["default"].createElement("stop", {
    offset: 0.447,
    stopColor: "#e5590d"
  }), _react["default"].createElement("stop", {
    offset: 0.637,
    stopColor: "#de4406"
  }), _react["default"].createElement("stop", {
    offset: 0.823,
    stopColor: "#da3701"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d93300"
  })), _react["default"].createElement("path", {
    fill: "url(#desert_svg__a)",
    d: "M62 39.579c-.815-.908-2.265-1.205-2.424-1.824-.159-.617-.238-4.334-.743-4.674-.506-.344-4.092.154-4.488 0-.4-.158-1.303-2.882-1.647-3.1-.345-.217-1.113-.827-1.194.371-.025.357-2.365.793-3.255-3.747.062-.99-.967-1.496-1.284-2.533 0 0-1.071-.272-1.35-.026-.239.214.044 9.374-.436 10.706-1.818-.028-3.021.971-3.658 1.218-.638.248-3.278-2.584-4.689-.14-.557.125-1.217.546-3.436 1.149-1.157-.434-2.91-.487-3.18.209-.56-.109-1.586.079-2.536.559a.928.928 0 0 0-.277.23c-1.137-2.209-3.388-4.479-4.36-4.945-1.185-.566-5.308-.371-7.333 1.885-1.102 1.228-7.771 2.862-9.795 4.605C3.951 41.214 2 41.503 2 41.503s18.084 8.049 60-1.924z"
  }), _react["default"].createElement("linearGradient", {
    id: "desert_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -162,
    y1: 108,
    x2: -162,
    y2: 130.844,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ed9d28"
  }), _react["default"].createElement("stop", {
    offset: 0.354,
    stopColor: "#f5b438"
  }), _react["default"].createElement("stop", {
    offset: 0.721,
    stopColor: "#fbc443"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fdca47"
  })), _react["default"].createElement("path", {
    fill: "url(#desert_svg__b)",
    d: "M62 62H2V41.503c21.148 3.529 40-4.186 60-1.924V62z"
  }), _react["default"].createElement("radialGradient", {
    id: "desert_svg__c",
    cx: -1209.942,
    cy: 913.282,
    r: 7.726,
    gradientTransform: "matrix(.9653 0 0 1.1288 1194.33 -1005.49)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.455,
    stopColor: "#6ca82e"
  }), _react["default"].createElement("stop", {
    offset: 0.516,
    stopColor: "#73ae2f"
  }), _react["default"].createElement("stop", {
    offset: 0.768,
    stopColor: "#8ac231"
  }), _react["default"].createElement("stop", {
    offset: 0.927,
    stopColor: "#92c932"
  })), _react["default"].createElement("path", {
    fill: "url(#desert_svg__c)",
    d: "M24.923 28.715c3.279 0 4.576.242 4.04-5.223-.419-4.276 4.409-4.653 4.784-.372.809 9.203-2.192 11.896-9.003 10.927-1.29-.183-1.069-5.332.179-5.332z"
  }), _react["default"].createElement("path", {
    fill: "#6B9E19",
    d: "M32.843 21.72c2.311-.013 2.115-.594.288.841-.147.115-.474-.838-.288-.841zM33.344 26.27c2.19.753 2.192.138 0 .891-.175.06-.175-.953 0-.891zM32.416 31.179c1.375 1.875 1.724 1.37-.502.732-.179-.052.393-.883.502-.732zM28.611 33.595c.422 2.294.954 1.995-.768.436-.138-.125.736-.619.768-.436z"
  }), _react["default"].createElement("path", {
    fill: "#618F16",
    d: "M29.614 23.873c-2.189.753-2.189.138 0 .892.176.059.176-.951 0-.892zM28.834 28.602c-2.075-1.029-1.646-1.463-.624.63.081.167.79-.546.624-.63z"
  }), _react["default"].createElement("path", {
    fill: "#77AB2D",
    d: "M30.521 24.405c-.229-2.739.483-3.729.483-3.729s-1.152.454-.967 3.617c.11 1.878.706 6.371-4.866 5.65 5.646 1.53 5.515-3.538 5.35-5.538z"
  }), _react["default"].createElement("path", {
    fill: "#87BA2E",
    d: "M32.379 25.962c.297-4.296-.668-5.166-.668-5.166s.631.87.184 5.249c-.188 1.872-.522 6.796-6.597 5.989 6.24 1.645 6.942-4.071 7.081-6.072z"
  }), _react["default"].createElement("linearGradient", {
    id: "desert_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 207.228,
    y1: 135.834,
    x2: 215.551,
    y2: 135.834,
    gradientTransform: "rotate(180 116.257 85)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.237,
    stopColor: "#8dc531"
  }), _react["default"].createElement("stop", {
    offset: 0.523,
    stopColor: "#7eb830"
  }), _react["default"].createElement("stop", {
    offset: 0.764,
    stopColor: "#6ca82e"
  })), _react["default"].createElement("path", {
    fill: "url(#desert_svg__d)",
    d: "M16.963 51.778V19.661c0-6.263 8.322-6.263 8.322 0v32.117c0 2.118-8.322 2.118-8.322 0z"
  }), _react["default"].createElement("path", {
    fill: "#87BA2E",
    d: "M23.384 19.234c0-1.674-.554-2.916-1.374-3.73 1.125.732 1.946 2.079 1.946 4.049V52.98l-.572.158V19.234z"
  }), _react["default"].createElement("path", {
    fill: "#77AB2D",
    d: "M20.926 19.234c0-1.674.198-3.949.198-3.949s.376 2.299.376 4.268v33.814h-.573l-.001-34.133z"
  }), _react["default"].createElement("path", {
    fill: "#649C2A",
    d: "M18.862 19.234c0-1.674.556-2.916 1.377-3.73-1.128.732-1.949 2.079-1.949 4.049V52.98l.572.158V19.234z"
  }), _react["default"].createElement("path", {
    fill: "#6B9E19",
    d: "M24.944 20.703c1.543.54 1.543.099 0 .638-.124.044-.124-.681 0-.638zM24.944 23.934c1.543.538 1.543.101 0 .639-.124.041-.124-.683 0-.639zM23.236 18.113c1.622-.126 1.453-.531.245.588-.099.09-.376-.576-.245-.588zM22.831 15.478c1.329-.97.98-1.23.506.37-.038.13-.609-.293-.506-.37zM23.176 34.158c1.542.538 1.542.097 0 .638-.123.043-.123-.682 0-.638zM24.944 37.981c1.543.541 1.543.1 0 .639-.124.043-.124-.681 0-.639zM24.944 42.644c1.543.539 1.543.1 0 .639-.124.042-.124-.683 0-.639zM22.323 40.943c1.539.541 1.539.099 0 .638-.125.043-.125-.682 0-.638z"
  }), _react["default"].createElement("path", {
    fill: "#618F16",
    d: "M17.325 22.409c-1.539.54-1.539.097 0 .639.123.043.123-.682 0-.639zM17.325 26.556c-1.539.538-1.539.097 0 .637.123.043.123-.682 0-.637zM19.458 32.314c-1.54.541-1.54.101 0 .64.124.043.124-.682 0-.64zM19.59 24.442c-1.542.539-1.542.1 0 .637.121.045.121-.68 0-.637zM18.679 20.031c-1.541.54-1.541.099 0 .637.124.044.124-.68 0-.637zM19.084 15.705c-1.461-.737-1.159-1.051-.439.452.058.12.555-.392.439-.452zM17.325 30.7c-1.539.539-1.539.099 0 .637.123.044.123-.682 0-.637zM18.948 45.672c-1.541.542-1.541.1 0 .64.122.042.122-.683 0-.64zM19.796 41.751c-1.542.539-1.542.098 0 .639.123.042.123-.681 0-.639z"
  }), _react["default"].createElement("radialGradient", {
    id: "desert_svg__e",
    cx: 299.739,
    cy: 919.831,
    r: 9.954,
    gradientTransform: "matrix(-.9653 0 0 1.1288 304.537 -1007.343)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.497,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.666,
    stopColor: "#8ac231"
  }), _react["default"].createElement("stop", {
    offset: 0.934,
    stopColor: "#73ae2f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6ca82e"
  })), _react["default"].createElement("path", {
    fill: "url(#desert_svg__e)",
    d: "M17.067 35.202c-4.225 0-5.896.312-5.208-6.729.542-5.508-5.68-5.994-6.163-.481-1.038 11.858 2.826 15.329 11.601 14.08 1.661-.236 1.38-6.87-.23-6.87z"
  }), _react["default"].createElement("path", {
    fill: "#6B9E19",
    d: "M11.22 29.634c2.189.752 2.189.138 0 .893-.177.057-.177-.952 0-.893zM12.016 34.284c2.075-1.028 1.646-1.464.624.628-.082.168-.789-.544-.624-.628z"
  }), _react["default"].createElement("path", {
    fill: "#618F16",
    d: "M6.491 27.388c-2.189.752-2.189.138 0 .89.176.059.176-.951 0-.89zM6.745 33.614c-2.188.754-2.188.139 0 .891.178.059.178-.95 0-.891zM8.855 38.948c-2.188.753-2.19.138 0 .892.177.059.177-.95 0-.892z"
  }), _react["default"].createElement("path", {
    fill: "#87BA2E",
    d: "M9.843 29.413c.301-3.631-.643-4.943-.643-4.943s1.53.603 1.282 4.797c-.146 2.491-.938 8.453 6.457 7.498-7.49 2.023-7.316-4.7-7.096-7.352z"
  }), _react["default"].createElement("path", {
    fill: "#77AB2D",
    d: "M7.378 31.478c-.393-5.697.887-6.854.887-6.854s-.837 1.156-.244 6.966c.253 2.48.695 9.017 8.755 7.943-8.281 2.183-9.214-5.399-9.398-8.055z"
  }), _react["default"].createElement("path", {
    fill: "#ABB500",
    d: "M30.087 57.723c.305.507 5.934.582 6.094 0 .457-1.665-1.135-2.807-1.408-2.226-.838 1.784-1.372-1.656-1.891-.471-.929 2.113-1.614-.363-1.937.88-.495 1.9-2.418-.795-.858 1.817zM50.035 47.944c.094.156 1.831.18 1.881 0 .141-.514-.35-.865-.436-.686-.258.549-.424-.512-.582-.145-.287.652-.5-.113-.598.27-.154.589-.747-.243-.265.561zM30.334 47.201c.094.156 1.831.18 1.881 0 .141-.514-.35-.865-.436-.686-.258.549-.424-.512-.582-.145-.287.652-.5-.113-.598.27-.154.589-.747-.244-.265.561zM12.998 47.201c.094.156 1.831.18 1.881 0 .141-.514-.35-.865-.436-.686-.258.549-.424-.512-.582-.145-.287.652-.5-.113-.598.27-.154.589-.747-.244-.265.561zM42.186 43.95c.094.156 1.831.18 1.881 0 .141-.514-.35-.865-.436-.686-.258.549-.424-.512-.582-.145-.287.652-.5-.113-.598.27-.154.589-.748-.243-.265.561zM46.777 52.546c-.17.287-3.313.326-3.402 0-.256-.93.633-1.566.785-1.24.469.994.768-.926 1.057-.264.518 1.18.901-.203 1.082.492.275 1.061 1.35-.445.478 1.012zM9.997 52.149c-.17.283-3.313.324-3.402 0-.256-.932.633-1.568.787-1.244.468.996.766-.924 1.056-.262.518 1.18.901-.205 1.081.49.276 1.063 1.351-.443.478 1.016zM57.919 42.649c-.111.188-2.182.215-2.24 0-.17-.613.416-1.033.518-.818.308.656.504-.609.695-.174.341.777.594-.135.712.324.182.7.889-.293.315.668z"
  }));
};

var _default = SvgDesert;
exports["default"] = _default;
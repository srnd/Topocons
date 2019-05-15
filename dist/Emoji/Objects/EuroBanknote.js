"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEuroBanknote = function SvgEuroBanknote(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M2 15h60v30H2z"
  }), _react["default"].createElement("path", {
    fill: "#C5DCA8",
    d: "M39 15h20v30H39z"
  }), _react["default"].createElement("path", {
    fill: "#A3C86B",
    d: "M53 45H39V15h16l-.006 7.694L52 24.629c-6.244 1.856-4.463 17.013-4.463 17.013L53 43.329V45z"
  }), _react["default"].createElement("ellipse", {
    fill: "#E6EBEF",
    cx: 55,
    cy: 35,
    rx: 7,
    ry: 5
  }), _react["default"].createElement("path", {
    fill: "#C5DCA8",
    d: "M39 34h5.996v8H39zM18 15h8v30h-8z"
  }), _react["default"].createElement("path", {
    fill: "#FFE363",
    d: "M20.25 30.295l-.928.705.352-1.145-.924-.71 1.145-.002L20.25 28l.355 1.143 1.145.002-.924.71.352 1.145zM40 24.295l-.928.705.352-1.145-.924-.71 1.143-.002L40 22l.355 1.143 1.145.002-.924.71.35 1.145zM22 24.295l-.928.705.352-1.145-.924-.71 1.145-.002L22 22l.355 1.143 1.145.002-.924.71.352 1.145zM22 36.295l-.928.705.352-1.145-.924-.71 1.145-.002L22 34l.355 1.143 1.145.002-.924.71.352 1.145z"
  }), _react["default"].createElement("path", {
    fill: "#4C841A",
    d: "M34.994 24h14.668v.199H34.994zM34.994 23.26h18v.199h-18zM34.994 21.089h20v.1h-20zM34.994 21.829h20v.101h-20zM34.994 22.545h19v.149h-19z"
  }), _react["default"].createElement("path", {
    fill: "#4C841A",
    d: "M51.389 25.299l.611-.67L49.662 24s-2.482.668-4.389.668H42h-3.273L38.791 44h11.914v-2.68l-.863-.512s.02-9.068.02-12.301c-.001-2.009 1.527-3.208 1.527-3.208zM44 40.91h-4V37a2 2 0 1 1 4 0v3.91z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M59 49H5l-3-4h60z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M2.99 46.32l.328.44 57.045-.219zM2.289 45.386l.332.443 58.742-.222zM58.363 48.404l-53.97-.215.32.427zM3.689 47.254l.327.434 55.347-.216z"
  }), _react["default"].createElement("path", {
    fill: "#BEC3CF",
    d: "M38.5 49h-13l-.5-4h14z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M26.5 49h-2l-.5-4h2zM39.5 49h-2l.5-4h2z"
  }), _react["default"].createElement("path", {
    fill: "#006DAD",
    d: "M12 17h6v4h-6z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M5.578 19h.479v2h-.479zM7.496 17.57V17c-.861 0-1.199.895-1.199 2h.48c0-.949.243-1.43.719-1.43zM8.215 19c0 .947-.242 1.428-.719 1.428V21c.861 0 1.199-.896 1.199-2h-.48zM10.135 20.428c-.479 0-.721-.48-.721-1.428h-.478c0 1.104.338 2 1.199 2 .859 0 1.199-.896 1.199-2h-.48c0 .947-.243 1.428-.719 1.428z"
  }), _react["default"].createElement("linearGradient", {
    id: "euro-banknote_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 41.952,
    y1: 24,
    x2: 41.952,
    y2: 16
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#297124"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#014f27"
  })), _react["default"].createElement("path", {
    fill: "url(#euro-banknote_svg__a)",
    d: "M42.426 16L40.5 17.605l.586.801 1.143-1.006V24h1.175v-8z"
  }), _react["default"].createElement("linearGradient", {
    id: "euro-banknote_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 46.884,
    y1: 24,
    x2: 46.884,
    y2: 16
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#297124"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#014f27"
  })), _react["default"].createElement("path", {
    fill: "url(#euro-banknote_svg__b)",
    d: "M46.885 16c-1.729 0-2.607 1.791-2.607 4s.879 4 2.607 4c1.727 0 2.605-1.791 2.605-4s-.879-4-2.605-4zm1.045 6.416c-.352.629-.764.701-1.045.701s-.695-.072-1.045-.701c-.318-.57-.492-1.428-.492-2.416s.174-1.846.492-2.414c.35-.629.764-.701 1.045-.701s.693.072 1.045.701c.316.568.492 1.426.492 2.414s-.176 1.846-.492 2.416z"
  }), _react["default"].createElement("linearGradient", {
    id: "euro-banknote_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 52.894,
    y1: 24,
    x2: 52.894,
    y2: 16
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#297124"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#014f27"
  })), _react["default"].createElement("path", {
    fill: "url(#euro-banknote_svg__c)",
    d: "M52.893 16c-1.727 0-2.605 1.791-2.605 4s.879 4 2.605 4c1.729 0 2.607-1.791 2.607-4s-.879-4-2.607-4zm1.046 6.416c-.352.629-.766.701-1.047.701-.279 0-.693-.072-1.045-.701-.316-.57-.492-1.428-.492-2.416s.176-1.846.492-2.414c.352-.629.766-.701 1.045-.701.281 0 .695.072 1.047.701.316.568.492 1.426.492 2.414s-.175 1.846-.492 2.416z"
  }), _react["default"].createElement("linearGradient", {
    id: "euro-banknote_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 3.968,
    y1: 43.94,
    x2: 3.968,
    y2: 37.909
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#297124"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#014f27"
  })), _react["default"].createElement("path", {
    fill: "url(#euro-banknote_svg__d)",
    d: "M4.283 38L3 39.205l.391.6.761-.754v4.916h.784V38z"
  }), _react["default"].createElement("linearGradient", {
    id: "euro-banknote_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 7.257,
    y1: 43.94,
    x2: 7.257,
    y2: 37.909
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#297124"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#014f27"
  })), _react["default"].createElement("path", {
    fill: "url(#euro-banknote_svg__e)",
    d: "M7.256 38c-1.15 0-1.736 1.344-1.736 3 0 1.658.586 3 1.736 3 1.152 0 1.738-1.342 1.738-3 0-1.656-.586-3-1.738-3zm.697 4.813c-.234.471-.51.525-.697.525s-.463-.055-.697-.525c-.211-.428-.329-1.071-.329-1.813 0-.74.117-1.385.328-1.811.234-.473.51-.525.697-.525s.463.053.697.525c.212.426.329 1.071.329 1.811 0 .742-.117 1.385-.328 1.813z"
  }), _react["default"].createElement("linearGradient", {
    id: "euro-banknote_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 11.263,
    y1: 43.94,
    x2: 11.263,
    y2: 37.909
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#297124"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#014f27"
  })), _react["default"].createElement("path", {
    fill: "url(#euro-banknote_svg__f)",
    d: "M11.262 38c-1.15 0-1.736 1.344-1.736 3 0 1.658.586 3 1.736 3C12.414 44 13 42.658 13 41c0-1.656-.586-3-1.738-3zm.697 4.813c-.234.471-.51.525-.697.525s-.463-.055-.695-.525c-.213-.428-.33-1.07-.33-1.813 0-.74.117-1.385.33-1.811.232-.473.508-.525.695-.525s.463.053.697.525c.211.426.328 1.07.328 1.811 0 .742-.117 1.385-.328 1.813z"
  }), _react["default"].createElement("path", {
    fill: "#FFE363",
    d: "M15 17.863l-.146.112.054-.182-.144-.111h.179L15 17.5l.057.182h.179l-.146.111.056.182zM40 36.295l-.928.705.352-1.145-.924-.71 1.143-.002L40 34l.355 1.143 1.145.002-.924.71.35 1.145zM15.631 18.021l-.147.112.057-.182-.146-.111.181-.002.055-.18.057.18.179.002-.144.111.054.182zM14.367 18.021l-.146.112.056-.182-.146-.111.182-.002.054-.18.057.18.181.002-.146.111.055.182zM13.895 18.494l-.147.111.055-.179-.145-.113h.18l.057-.18.056.18h.18l-.145.113.055.179zM16.105 18.494l-.146.111.055-.179-.147-.113h.182l.056-.18.057.18h.18l-.147.113.057.179zM15.631 20.23l-.147.112.057-.18-.146-.113h.181l.055-.18.057.18h.179l-.144.113.054.18zM14.367 20.23l-.146.112.056-.18-.146-.113h.182l.054-.18.057.18h.181l-.146.113.055.18zM13.895 19.758l-.147.111.055-.181-.145-.112h.18l.057-.181.056.181h.18l-.145.112.055.181zM16.105 19.758l-.146.111.055-.181-.147-.112h.182l.056-.181.057.181h.18l-.147.112.057.181z"
  }), _react["default"].createElement("path", {
    fill: "#FFE363",
    d: "M15 17.863l-.146.112.054-.182-.144-.111h.179L15 17.5l.057.182h.179l-.146.111.056.182zM15 20.389l-.146.111.054-.18-.144-.113h.179l.057-.18.057.18h.179l-.146.113.056.18zM13.736 19.125l-.146.111.056-.179-.146-.112.18-.002.056-.179.057.179.18.002-.145.112.055.179zM16.264 19.125l-.147.111.055-.179-.147-.112.182-.002.057-.179.054.179.182.002-.146.112.056.179z"
  }), _react["default"].createElement("linearGradient", {
    id: "euro-banknote_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 14.425,
    y1: 43.94,
    x2: 14.425,
    y2: 37.909
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#297124"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#014f27"
  })), _react["default"].createElement("path", {
    fill: "url(#euro-banknote_svg__g)",
    d: "M15.064 38.434l-.057.393h-.674v.607h.594v.383h-.594v.639h.719v.398h-1.268v-2.42h1.28z"
  }), _react["default"].createElement("linearGradient", {
    id: "euro-banknote_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: 16.218,
    y1: 43.94,
    x2: 16.218,
    y2: 37.909
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#297124"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#014f27"
  })), _react["default"].createElement("path", {
    fill: "url(#euro-banknote_svg__h)",
    d: "M17.027 40.156c0 .145-.029.271-.09.385s-.152.203-.273.27-.27.1-.447.1c-.264 0-.465-.068-.604-.207-.137-.137-.205-.318-.205-.547v-1.723h.547v1.697c0 .127.021.219.063.279s.107.092.199.092c.094 0 .16-.031.201-.092s.063-.152.063-.279v-1.697h.547v1.722z"
  }), _react["default"].createElement("linearGradient", {
    id: "euro-banknote_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: 18.332,
    y1: 43.94,
    x2: 18.332,
    y2: 37.909
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#297124"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#014f27"
  })), _react["default"].createElement("path", {
    fill: "url(#euro-banknote_svg__i)",
    d: "M18.586 40.854l-.395-.932h-.149v.932h-.549v-2.42h.646c.6 0 .9.244.9.734 0 .141-.029.27-.09.383a.606.606 0 0 1-.277.266l.496 1.037h-.582zm-.432-1.313c.115 0 .199-.029.25-.09.053-.059.078-.152.078-.283 0-.119-.027-.207-.082-.262-.055-.057-.143-.084-.264-.084h-.094v.719h.112z"
  }), _react["default"].createElement("linearGradient", {
    id: "euro-banknote_svg__j",
    gradientUnits: "userSpaceOnUse",
    x1: 20.292,
    y1: 43.94,
    x2: 20.292,
    y2: 37.909
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#297124"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#014f27"
  })), _react["default"].createElement("path", {
    fill: "url(#euro-banknote_svg__j)",
    d: "M20.973 38.691c.158.211.236.527.236.951 0 .418-.08.736-.238.949-.158.215-.385.322-.68.322-.297 0-.521-.105-.68-.316-.156-.211-.236-.529-.236-.955 0-.42.08-.734.236-.947.158-.215.383-.32.68-.32s.525.105.682.316zm-.946.284c-.055.131-.082.354-.082.668 0 .219.012.391.037.516a.542.542 0 0 0 .111.271.25.25 0 0 0 .197.082c.084 0 .15-.027.201-.08a.57.57 0 0 0 .111-.271c.023-.127.037-.299.037-.518 0-.316-.027-.541-.082-.67-.055-.131-.145-.195-.268-.195-.119-.001-.207.064-.262.197z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M15.064 41.344l-.057.393h-.674v.607h.594v.383h-.594v.639h.719v.398h-1.268v-2.42h1.28zM17.139 41.344l-.635 1.51v.91h-.549v-.908l-.635-1.512h.572l.342 1.084.35-1.084h.555zM18.752 41.543c.158.133.238.328.238.588 0 .27-.076.473-.229.611-.15.139-.365.209-.643.209h-.128v.813h-.547v-2.42h.621c.301 0 .53.066.688.199zm-.406.914c.055-.064.082-.174.082-.326 0-.137-.027-.234-.078-.299-.053-.064-.143-.096-.268-.096h-.092v.816h.084c.127.001.217-.031.272-.095zM21.123 42.553c0-.42-.08-.734-.236-.947-.158-.215-.383-.32-.68-.32-.295 0-.521.105-.68.32-.156.213-.234.527-.234.947 0 .402.074.701.215.91h-.215v.301h.537l.18-.301s-.148-.199-.148-.91c0-.314.027-.537.082-.668.055-.133.143-.197.264-.197s.209.064.264.197c.055.131.082.354.082.668 0 .711-.148.91-.148.91l.18.301h.539v-.301h-.217c.139-.209.215-.508.215-.91z",
    opacity: 0.5
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M25 15h14v30H25z"
  }), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M38 15h2v30h-2zM24 15h2v30h-2zM35.471 34.5c-1.791 0-3.352-.906-4.189-2.25h5.338v-1.5h-5.924a4.517 4.517 0 0 1-.07-.75c0-.258.029-.507.07-.75h5.924v-1.5h-5.338c.838-1.344 2.398-2.25 4.189-2.25.326 0 .65.031.967.09l.363-1.469a7.208 7.208 0 0 0-1.33-.121c-2.748 0-5.1 1.555-6.076 3.75H27.2v1.5h1.768c-.029.246-.057.495-.057.75s.027.504.057.75H27.2v1.5h2.195c.977 2.195 3.328 3.75 6.076 3.75a7.21 7.21 0 0 0 1.33-.125l-.363-1.465c-.317.059-.641.09-.967.09zM53 33h4v4h-4z"
  }), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M57.5 35c0 1.381-1.982 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.982-2.5 2.5-2.5 2.5 1.119 2.5 2.5z"
  }), _react["default"].createElement("path", {
    fill: "#7AD8EB",
    d: "M53.885 34.2l-.385.321.117.161.229-.202v1.32h.234v-1.6zM54.777 34.2c-.346 0-.521.358-.521.8s.176.8.521.8c.344 0 .52-.358.52-.8s-.176-.8-.52-.8zm.207 1.283c-.07.126-.152.14-.207.14-.059 0-.141-.014-.211-.14-.063-.114-.098-.286-.098-.483s.035-.369.098-.482c.07-.126.152-.141.211-.141.055 0 .137.015.207.141.064.113.1.285.1.482s-.035.369-.1.483zM55.979 34.2c-.346 0-.521.358-.521.8s.176.8.521.8.521-.359.521-.8-.176-.8-.521-.8zm.209 1.283c-.07.126-.154.14-.209.14-.057 0-.141-.014-.211-.14-.063-.114-.098-.286-.098-.483s.035-.369.098-.482c.07-.126.154-.141.211-.141.055 0 .139.015.209.141.063.113.098.285.098.482s-.036.369-.098.483z"
  }), _react["default"].createElement("path", {
    fill: "#FFE363",
    d: "M41.75 30.295l-.928.705.352-1.145-.924-.71 1.145-.002L41.75 28l.355 1.143 1.145.002-.924.71.35 1.145z"
  }));
};

var _default = SvgEuroBanknote;
exports["default"] = _default;
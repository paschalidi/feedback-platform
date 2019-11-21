"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.hexToRGBA = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var hexToRGBA = function hexToRGBA(hex) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var _hex$match$map = hex.match(/\w\w/g).map(function (x) {
    return parseInt(x, 16);
  }),
      _hex$match$map2 = _slicedToArray(_hex$match$map, 3),
      r = _hex$match$map2[0],
      g = _hex$match$map2[1],
      b = _hex$match$map2[2];

  return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(alpha, ")");
};

exports.hexToRGBA = hexToRGBA;
var colors = {
  primary: "#AB61E5",
  secondary: "#ACB1B6",
  active: "#4F0589",
  textPrimary: "#031323",
  divider: "#D9DCDE",
  destructive: "#E63644",
  affirmative: "#189F59",
  warning: "#D97508",
  white: "#FFFFFF",
  destructiveDim: "#FFE1E1",
  affirmativeDim: "#E8F5E5",
  warningDim: "#FFF6D1",
  textInactive: "#BFBFBF",
  background: "#F2F3F4"
};
var _default = colors;
exports["default"] = _default;
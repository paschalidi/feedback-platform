"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  br {\n    margin-bottom: 32px;\n  }\n\n  h5 {\n    font-weight: 500;\n    font-size: 1.4rem;\n    margin-bottom: 8px;\n    color: ", ";\n  }\n\n  a {\n    display: block;\n    text-decoration: none;\n    color: #00bfac;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FontStyles = _styledComponents["default"].div(_templateObject(), _index.Colors.secondary);

var _default = FontStyles;
exports["default"] = _default;
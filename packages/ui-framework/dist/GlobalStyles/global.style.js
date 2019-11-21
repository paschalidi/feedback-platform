"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _index = require("../index");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html{\n    font-size: 62.5%;\n  }\n  \n  body {\n    font-size: 1.6rem;\n    line-height: 1.9rem;\n    color: ", "; \n    margin: 0;\n    padding: 0;\n    min-height: 100%;\n    overflow-x: hidden;\n    min-width: 320px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject(), _index.Colors.textPrimary);
var _default = GlobalStyles;
exports["default"] = _default;
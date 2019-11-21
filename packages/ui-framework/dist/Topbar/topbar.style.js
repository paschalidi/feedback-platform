"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #fff;\n  border-bottom: 1px solid ", ";\n\n  .link {\n    display: flex;\n    margin: 0 15%;\n  }\n\n  .logo {\n    margin: 16px 0;\n    width: 100px;\n  }\n\n  @media (max-width: 1200px) {\n    .link {\n      margin: 0 10%;\n    }\n  }\n\n  @media (max-width: 1000px) {\n    .logo {\n      width: 80px;\n    }\n\n    .link {\n      margin: 0 3%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TopbarStyles = _styledComponents["default"].div(_templateObject(), _index.Colors.divider);

var _default = TopbarStyles;
exports["default"] = _default;
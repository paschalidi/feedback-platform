"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  label {\n    color: #575756;\n    font-size: 16px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    letter-spacing: 0.3px;\n    line-height: 2.5;\n  }\n\n  textarea {\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    color: #898988;\n    width: 100%;\n    min-height: 70px;\n    max-height: 15em;\n    background-color: #ffffff;\n    border: solid 1px #cdcdcd;\n    resize: vertical;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  }\n\n  textarea:focus {\n    outline: none;\n    box-shadow: 0 0 0 1px rgba(4, 212, 191, 0.2);\n    border-color: #04d4bf;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  }\n\n  textarea::placeholder {\n    color: #bfbfbf;\n  }\n\n  .required {\n    padding-left: 10px;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextareaStyles = _styledComponents["default"].div(_templateObject(), _.Colors.destructive);

var _default = TextareaStyles;
exports["default"] = _default;
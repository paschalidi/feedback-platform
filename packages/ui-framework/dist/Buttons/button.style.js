"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .component-child {\n    font-family: \"Untitled Sans\";\n    font-size: 1.6rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    cursor: pointer;\n    border-radius: 4px;\n    padding-top: 2px;\n    width: 150px;\n    height: 48px;\n    font-weight: 400;\n    line-height: 1.9rem;\n  }\n\n  button:disabled,\n  button:disabled .component-child {\n    cursor: not-allowed !important;\n  }\n\n  button {\n    padding: 0;\n    border-radius: 4px;\n    display: block;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  a {\n    border-radius: 4px;\n    display: inline-block;\n    text-align: center;\n    text-decoration: none;\n  }\n\n  a:focus:active,\n  button:focus:active {\n    outline: 0;\n  }\n\n  .primary {\n    color: ", ";\n    background-color: ", ";\n    border: 0;\n\n    i {\n      font-size: 1.5em;\n    }\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:active {\n      background-color: ", ";\n    }\n\n    &:disabled {\n      background-color: ", ";\n    }\n  }\n\n  .secondary {\n    color: ", ";\n    background-color: ", ";\n    border: 1px solid ", ";\n\n    i {\n      font-size: 1.4em;\n    }\n\n    &:hover,\n    &:active {\n      color: ", ";\n      background-color: ", ";\n      border: 1px solid ", ";\n    }\n\n    &:disabled {\n      color: ", ";\n      background-color: ", ";\n      border: 1px solid ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonStyles = _styledComponents["default"].div(_templateObject(), _index.Colors.white, _index.Colors.primary, _index.Colors.active, _index.Colors.active, _index.Colors.divider, _index.Colors.textPrimary, _index.Colors.white, _index.Colors.divider, _index.Colors.white, _index.Colors.primary, _index.Colors.primary, _index.Colors.textPrimary, _index.Colors.secondary, _index.Colors.secondary);

var _default = ButtonStyles;
exports["default"] = _default;
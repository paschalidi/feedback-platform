"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ThemeColors;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _ColorBox = _interopRequireDefault(require("./ColorBox"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n\n  color: ", ";\n\n  h2 {\n    margin-left: 20px;\n  }\n\n  .color-box {\n    cursor: pointer;\n    outline: none;\n    text-align: center;\n    border: solid 1px ", ";\n    width: 200px;\n    padding: 25px 0;\n    border-radius: 4px;\n  }\n\n  .color-box .copy {\n    cursor: pointer;\n    font-size: 20px;\n    visibility: hidden;\n    opacity: 0;\n    padding: 4px;\n    background-color: rgba(245, 245, 245, 0.6);\n    transition: visibility 0s, opacity 0.2s linear;\n  }\n\n  .color-box:hover .copy {\n    visibility: visible;\n    opacity: 1;\n  }\n\n  .color-description {\n    font-size: 16px;\n    font-weight: 500;\n    margin-top: 10px;\n  }\n\n  .color-name {\n    font-size: 14px;\n    margin-top: 8px;\n    margin-bottom: 24px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Styles = _styledComponents["default"].div(_templateObject(), _.Colors.textPrimary, _.Colors.divider);

function ThemeColors() {
  return _react["default"].createElement(Styles, null, _react["default"].createElement(_.Row, {
    space: "around"
  }, Object.keys(_.Colors).map(function (name) {
    return _react["default"].createElement(_.Col, {
      lg: 0,
      key: name
    }, _react["default"].createElement(_ColorBox["default"], {
      description: name,
      color: _.Colors[name]
    }));
  })));
}
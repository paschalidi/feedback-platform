"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ThemeTypography;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

var _themeTypography = _interopRequireDefault(require("./themeTypography.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ThemeTypography() {
  return _react["default"].createElement(_themeTypography["default"], null, _react["default"].createElement(_index.Row, {
    position: "center"
  }, _react["default"].createElement(_index.Col, {
    lg: 8
  }, _react["default"].createElement("h5", null, "H1"), _react["default"].createElement(_index.H1, null, "Heading One"), _react["default"].createElement("br", null), _react["default"].createElement("h5", null, "H2"), _react["default"].createElement(_index.H2, null, "Heading Two"), _react["default"].createElement("br", null), _react["default"].createElement("h5", null, "H3"), _react["default"].createElement(_index.H3, null, "Heading Two"), _react["default"].createElement("br", null), _react["default"].createElement("h5", null, "Paragraph"), _react["default"].createElement(_index.Paragraph, null, "We design products to be open, honest and re\xADliable. Their interfaces are channels of truth which never obscure our intentions."), _react["default"].createElement("br", null), _react["default"].createElement("h5", null, "Caption"), _react["default"].createElement(_index.Caption, null, "We design products to be open, honest and re\xADliable. Their interfaces are channels of truth which never obscure our intentions."), _react["default"].createElement("br", null), _react["default"].createElement("h5", null, "Anchor"), _react["default"].createElement("a", {
    href: "https://www.google.com/",
    rel: "noopener noreferrer"
  }, "This is a link"))));
}
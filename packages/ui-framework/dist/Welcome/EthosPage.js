"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WelcomePage;

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function WelcomePage() {
  return _react["default"].createElement(_index.Row, {
    position: "center",
    fullWidth: true
  }, _react["default"].createElement(_index.Col, {
    lg: 8
  }, _react["default"].createElement("h1", null, "Vision & Ethos"), _react["default"].createElement("p", null, "The styleguide and component library aims to bring engineering and design together."), _react["default"].createElement("p", null, "Components tie into our frontend infrastructure to empower a design first approach."), _react["default"].createElement("p", null, "With this philosophy we aim to have consistent and accessible design that unifies our features into a greater whole.")));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Topbar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _topbar = _interopRequireDefault(require("./topbar.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Topbar(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_topbar["default"], null, children);
}

Topbar.propTypes = {
  children: _propTypes["default"].node
};
Topbar.defaultProps = {
  children: {}
};
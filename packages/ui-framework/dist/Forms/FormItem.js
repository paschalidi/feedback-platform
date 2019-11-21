"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FormItem;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function FormItem(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", {
    className: "form-item"
  }, children);
}

FormItem.propTypes = {
  children: _propTypes["default"].node.isRequired
};
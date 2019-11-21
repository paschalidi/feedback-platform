"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = Textarea;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textarea = _interopRequireDefault(require("./textarea.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Textarea(_ref) {
  var label = _ref.label,
      required = _ref.required,
      placeholder = _ref.placeholder,
      onInput = _ref.onInput,
      disabled = _ref.disabled,
      style = _ref.style;
  return _react["default"].createElement(_textarea["default"], null, label, required ? _react["default"].createElement("span", {
    className: "required"
  }, "(required)") : null, _react["default"].createElement("textarea", {
    disabled: disabled,
    onInput: onInput,
    placeholder: placeholder,
    style: style
  }));
}

Textarea.propTypes = {
  onInput: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  style: _propTypes["default"].shape({})
};
Textarea.defaultProps = {
  onInput: function onInput() {},
  placeholder: "",
  label: "",
  required: false,
  disabled: false,
  style: {}
};
var _default = Textarea;
exports["default"] = _default;
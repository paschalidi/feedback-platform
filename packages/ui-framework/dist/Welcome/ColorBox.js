"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ColorBox;

var _react = _interopRequireDefault(require("react"));

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ColorBox(_ref) {
  var description = _ref.description,
      color = _ref.color;
  return _react["default"].createElement("div", null, _react["default"].createElement("button", {
    type: "button",
    className: "color-box",
    style: {
      backgroundColor: color
    },
    onClick: function onClick() {
      return (0, _copyToClipboard["default"])(color);
    }
  }, _react["default"].createElement("span", {
    className: "copy"
  }, "copy ", color)), _react["default"].createElement("div", {
    className: "color-description"
  }, description), _react["default"].createElement("div", {
    className: "color-name"
  }, color));
}

ColorBox.propTypes = {
  description: _propTypes["default"].string.isRequired,
  color: _propTypes["default"].string.isRequired
};
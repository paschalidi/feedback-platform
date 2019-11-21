"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Button;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = _interopRequireDefault(require("./button.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Button(_ref) {
  var type = _ref.type,
      id = _ref.id,
      htmlType = _ref.htmlType,
      onClick = _ref.onClick,
      children = _ref.children,
      disabled = _ref.disabled,
      style = _ref.style,
      className = _ref.className;
  return _react["default"].createElement(_button["default"], null, _react["default"].createElement("button", {
    id: id,
    disabled: disabled,
    onClick: onClick,
    className: "".concat(className, " ").concat(type),
    type: htmlType,
    style: style
  }, _react["default"].createElement("div", {
    className: "component-child"
  }, children)));
}

Button.propTypes = {
  children: _propTypes["default"].node.isRequired,
  id: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  type: _propTypes["default"].oneOf(["primary", "secondary"]),
  htmlType: _propTypes["default"].oneOf(["button", "submit", "reset"]),
  style: _propTypes["default"].shape({}),
  disabled: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
Button.defaultProps = {
  id: null,
  onClick: function onClick() {},
  type: "primary",
  htmlType: "button",
  style: {},
  disabled: false,
  className: ""
};
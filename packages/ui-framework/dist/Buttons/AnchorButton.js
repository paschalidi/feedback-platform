"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AnchorButton;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = _interopRequireDefault(require("./button.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function AnchorButton(_ref) {
  var id = _ref.id,
      onClick = _ref.onClick,
      type = _ref.type,
      href = _ref.href,
      target = _ref.target,
      rel = _ref.rel,
      children = _ref.children,
      style = _ref.style,
      className = _ref.className;
  return _react["default"].createElement(_button["default"], null, _react["default"].createElement("a", {
    id: id,
    className: "".concat(className, " ").concat(type),
    onClick: onClick,
    href: href,
    target: target,
    rel: rel,
    style: style
  }, _react["default"].createElement("div", {
    className: "component-child"
  }, children)));
}

AnchorButton.propTypes = {
  id: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  href: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].oneOf(["primary", "secondary"]),
  onClick: _propTypes["default"].func,
  target: _propTypes["default"].string,
  rel: _propTypes["default"].string,
  style: _propTypes["default"].shape({}),
  className: _propTypes["default"].string
};
AnchorButton.defaultProps = {
  id: null,
  type: "primary",
  onClick: function onClick() {},
  target: "_self",
  rel: null,
  style: {},
  className: ""
};
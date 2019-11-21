"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Row;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("./index.style"));

var _classNames = _interopRequireDefault(require("../../utils/classNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Row(_ref) {
  var children = _ref.children,
      style = _ref.style,
      space = _ref.space,
      position = _ref.position,
      positionMd = _ref.positionMd,
      positionSm = _ref.positionSm,
      positionXs = _ref.positionXs,
      textAlign = _ref.textAlign,
      textAlignMd = _ref.textAlignMd,
      textAlignSm = _ref.textAlignSm,
      textAlignXs = _ref.textAlignXs,
      verticalAlign = _ref.verticalAlign,
      reverse = _ref.reverse,
      column = _ref.column,
      fullWidth = _ref.fullWidth;
  var height = (0, _classNames["default"])(["inherited-height", verticalAlign === "middle" || "bottom"]);
  var row = (0, _classNames["default"])(["row default-width position-".concat(position, " text-align-").concat(textAlign, " ").concat(verticalAlign, " ").concat(space), true], ["full-width", fullWidth], ["reverse", reverse], ["column", column], ["position-xs-".concat(positionXs), positionXs], ["position-sm-".concat(positionSm), positionSm], ["position-md-".concat(positionMd), positionMd], ["text-align-xs-".concat(textAlignXs), textAlignXs], ["text-align-sm-".concat(textAlignSm), textAlignSm], ["text-align-md-".concat(textAlignMd), textAlignMd]);
  return _react["default"].createElement(_index["default"], {
    style: style,
    className: height
  }, _react["default"].createElement("div", {
    className: row
  }, children));
}

Row.propTypes = {
  style: _propTypes["default"].shape({}),
  children: _propTypes["default"].node.isRequired,
  space: _propTypes["default"].oneOf(["normal", "around", "between", "evenly"]),
  verticalAlign: _propTypes["default"].oneOf(["top", "middle", "bottom"]),
  position: _propTypes["default"].oneOf(["start", "center", "end"]),
  positionMd: _propTypes["default"].oneOf(["start", "center", "end"]),
  positionSm: _propTypes["default"].oneOf(["start", "center", "end"]),
  positionXs: _propTypes["default"].oneOf(["start", "center", "end"]),
  reverse: _propTypes["default"].bool,
  column: _propTypes["default"].bool,
  fullWidth: _propTypes["default"].bool,
  textAlign: _propTypes["default"].oneOf(["left", "center", "right"]),
  textAlignMd: _propTypes["default"].oneOf(["left", "center", "right"]),
  textAlignSm: _propTypes["default"].oneOf(["left", "center", "right"]),
  textAlignXs: _propTypes["default"].oneOf(["left", "center", "right"])
};
Row.defaultProps = {
  style: {},
  space: "normal",
  verticalAlign: "top",
  position: "start",
  positionMd: null,
  positionSm: null,
  positionXs: null,
  textAlign: "left",
  textAlignMd: null,
  textAlignSm: null,
  textAlignXs: null,
  reverse: false,
  column: false,
  fullWidth: false
};
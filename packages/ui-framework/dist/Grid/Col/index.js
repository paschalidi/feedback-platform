"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Col;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../utils/classNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Col(_ref) {
  var children = _ref.children,
      lg = _ref.lg,
      md = _ref.md,
      sm = _ref.sm,
      xs = _ref.xs,
      offset = _ref.offset,
      offsetMd = _ref.offsetMd,
      offsetSm = _ref.offsetSm,
      offsetXs = _ref.offsetXs,
      style = _ref.style;
  var column = (0, _classNames["default"])(["col-lg-".concat(lg, " col-lg-offset-").concat(offset), true], ["col-xs-".concat(xs), xs], ["col-sm-".concat(sm), sm], ["col-md-".concat(md), md], ["col-xs-offset-".concat(offsetXs), offsetXs], ["col-sm-offset-".concat(offsetSm), offsetSm], ["col-md-offset-".concat(offsetMd), offsetMd]);
  return _react["default"].createElement("div", {
    style: style,
    className: column
  }, children);
}

Col.propTypes = {
  children: _propTypes["default"].node.isRequired,
  style: _propTypes["default"].shape({}),
  offsetXs: _propTypes["default"].oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  offsetSm: _propTypes["default"].oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  offsetMd: _propTypes["default"].oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  offset: _propTypes["default"].oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  lg: _propTypes["default"].oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"]),
  md: _propTypes["default"].oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"]),
  sm: _propTypes["default"].oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"]),
  xs: _propTypes["default"].oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"])
};
Col.defaultProps = {
  style: {},
  offset: 0,
  offsetMd: null,
  offsetSm: null,
  offsetXs: null,
  lg: 12,
  md: null,
  sm: null,
  xs: null
};
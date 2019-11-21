"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = H1;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 3.6rem;\n  line-height: 4.2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Styles = _styledComponents["default"].h1(_templateObject());

function H1(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return _react["default"].createElement(Styles, {
    style: style
  }, children);
}

H1.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,
  style: _propTypes["default"].shape({})
};
H1.defaultProps = {
  style: {}
};
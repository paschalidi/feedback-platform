"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _iconMapping = _interopRequireDefault(require("../../public/fonts/vivy-icons/iconMapping.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  line-height: 1;\n\n  i {\n    font-family: \"vivy-icons\";\n    font-weight: normal;\n    font-style: normal;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icons = _styledComponents["default"].div(_templateObject());

function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style;
  var iconName = "icon-".concat(name);
  var icon = String.fromCharCode(parseInt(_iconMapping["default"][iconName], 16));
  return _react["default"].createElement(Icons, {
    style: style
  }, _react["default"].createElement("i", null, icon));
}

Icon.propTypes = {
  name: _propTypes["default"].string.isRequired,
  style: _propTypes["default"].shape({})
};
Icon.defaultProps = {
  style: {}
};
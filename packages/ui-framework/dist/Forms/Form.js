"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Form;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Validation = require("./Validation");

var _formData = _interopRequireDefault(require("../utils/formData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Form(_ref) {
  var children = _ref.children,
      select = _ref.select,
      submit = _ref.submit;

  var formSubmit = function formSubmit(e, validation) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    var fields = (0, _formData["default"])(e.target.elements);

    if (!validation || !validation(fields)) {
      submit(fields, e);
    }
  };

  return _react["default"].createElement(_Validation.ValidationContext.Consumer, null, function (_ref2) {
    var validate = _ref2.validate;
    return _react["default"].createElement("form", {
      onChange: function onChange(e) {
        return select(e.target.value);
      },
      onSubmit: function onSubmit(e) {
        return formSubmit(e, validate);
      }
    }, children);
  });
}

Form.propTypes = {
  children: _propTypes["default"].node.isRequired,
  select: _propTypes["default"].func,
  submit: _propTypes["default"].func
};
Form.defaultProps = {
  select: function select() {},
  submit: function submit() {}
};
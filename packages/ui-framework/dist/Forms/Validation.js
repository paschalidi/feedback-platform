"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ValidationContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _asyncValidator = _interopRequireDefault(require("async-validator"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_STATE = {
  errors: {},
  validate: function validate() {},
  cleanField: function cleanField() {}
};
var ValidationContext = (0, _react.createContext)(DEFAULT_STATE);
exports.ValidationContext = ValidationContext;

var Validation =
/*#__PURE__*/
function (_Component) {
  _inherits(Validation, _Component);

  function Validation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Validation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Validation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", DEFAULT_STATE);

    _defineProperty(_assertThisInitialized(_this), "validate", function (fields, rules) {
      var schema = new _asyncValidator["default"](rules);
      var validation = {};
      schema.validate(fields, function (validateErr) {
        if (validateErr) {
          validation = validateErr.reduce(function (prev, error) {
            return _objectSpread({}, prev, _defineProperty({}, error.field, error.message));
          }, {});
        }
      });
      return validation;
    });

    _defineProperty(_assertThisInitialized(_this), "validateForm", function (fields, input) {
      var rules = _this.props.rules;
      var errors = _this.state.errors;

      var validation = _this.validate(fields, rules);

      var inputErrors = input ? _defineProperty({}, input, validation[input]) : validation;

      var allErrors = _objectSpread({}, errors, {}, inputErrors);

      var hasErrors = Object.keys(allErrors).some(function (message) {
        return allErrors[message];
      });

      _this.setState({
        errors: allErrors
      });

      return hasErrors;
    });

    _defineProperty(_assertThisInitialized(_this), "cleanField", function (input) {
      var errors = _this.state.errors;

      var cleanError = input && _defineProperty({}, input, "");

      var allErrors = _objectSpread({}, errors, {}, cleanError);

      var hasErrors = Object.keys(allErrors).some(function (message) {
        return allErrors[message];
      });

      _this.setState({
        errors: allErrors
      });

      return hasErrors;
    });

    return _this;
  }

  _createClass(Validation, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var errors = this.state.errors;
      return _react["default"].createElement(ValidationContext.Provider, {
        value: {
          validate: this.validateForm,
          cleanField: this.cleanField,
          errors: errors
        }
      }, children);
    }
  }]);

  return Validation;
}(_react.Component);

exports["default"] = Validation;
Validation.propTypes = {
  children: _propTypes["default"].node.isRequired,
  rules: _propTypes["default"].shape({}).isRequired
};
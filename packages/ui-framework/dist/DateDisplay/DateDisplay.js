"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DateDisplay;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DateDisplay(_ref) {
  var date = _ref.date,
      monthNames = _ref.monthNames;
  var dateTime = new Date(date);
  var month = monthNames[dateTime.getMonth()];
  return _react["default"].createElement("span", null, "".concat(dateTime.getDate(), ". ").concat(month, " ").concat(dateTime.getFullYear()));
}

DateDisplay.propTypes = {
  date: _propTypes["default"].string.isRequired,
  monthNames: _propTypes["default"].arrayOf(_propTypes["default"].string)
};
DateDisplay.defaultProps = {
  monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
};
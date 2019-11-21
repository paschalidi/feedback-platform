"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formData;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fieldValue = function fieldValue(target) {
  var type = target.type,
      checked = target.checked,
      value = target.value,
      id = target.id;

  switch (type) {
    case "checkbox":
      return _defineProperty({}, id, checked);

    case "button":
    case "submit":
    case "reset":
      return {};

    default:
      return _defineProperty({}, id, value);
  }
};

function formData(elements) {
  var data = {};
  Array.from(elements).forEach(function (element) {
    data = _objectSpread({}, data, {}, fieldValue(element));
  });
  return data;
}
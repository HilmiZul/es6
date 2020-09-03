"use strict";

var _buah = _interopRequireDefault(require("./buah"));

var _mobil = _interopRequireDefault(require("./mobil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_buah["default"].forEach(function (e) {
  console.log(e);
});

console.log("====================");
var mobil1 = new _mobil["default"]("Honda", "Jazz", "Space Grey");
var mobil2 = new _mobil["default"]("Honda", "Brio", "Space Grey");
var mobil3 = new _mobil["default"]("Nissan", "March", "Merah marun");
console.log(mobil1.nama);
console.log(mobil1.maju());
console.log(mobil2.nama);
console.log(mobil2.maju());
console.log(mobil3.nama);
console.log(mobil3.maju());
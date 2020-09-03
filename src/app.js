import fruits from './buah';
import Mobil from './mobil';

fruits.forEach(e => {
  console.log(e)
});

console.log("====================");

let mobil1 = new Mobil("Honda", "Jazz", "Space Grey");
let mobil2 = new Mobil("Honda", "Brio", "Space Grey");
let mobil3 = new Mobil("Nissan", "March", "Merah marun");

console.log(mobil1.nama);
console.log(mobil1.maju());
console.log(mobil2.nama);
console.log(mobil2.maju());
console.log(mobil3.nama);
console.log(mobil3.maju());
// Soal Latihan Filter Map dan Reduce
const angka = [1, 2, 3, 4, 5, 6];

// a. Gunakan filter() untuk membuat array baru berisi angka genap.
// b. Gunakan map() untuk mengalikan setiap angka dengan 3.
// c. Gunakan reduce() untuk menjumlahkan seluruh angka.

// PENYELESAIAN

// Array Baru Berisi Angka Genap
const bilanganGenap = angka.filter(genap => (genap % 2 == 0))
console.info(bilanganGenap)

// Kalikan setiap angka dengan 3
const kalikanTiga = angka.map(numbers => (numbers * 3))
console.info(kalikanTiga)
// Kalikan Angka Genap
const kalikanTigaAngkaGenap = bilanganGenap.map(genap => (genap * 3))
console.info(kalikanTigaAngkaGenap)

// Jumlah Seluruh Angka
const jumlah = angka.reduce((prevNumb, nextNumb) => (prevNumb + nextNumb))
console.info(jumlah)

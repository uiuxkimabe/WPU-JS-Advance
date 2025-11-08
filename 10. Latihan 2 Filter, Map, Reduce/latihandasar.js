// Level Dasar
// 1. Filter Angka Genap
const numbers = [1, 2, 3, 4, 5, 6];

// Gunakan .filter() untuk mendapatkan hanya angka genap.
// JAWABAN
const angkaGenap = numbers.filter(genap => genap % 2 === 0)
console.info(angkaGenap)

// 2. Map Ke Kuadrat
// Gunakan .map() untuk mengubah setiap angka genap menjadi kuadratnya.
// JAWABAN
const kuadrat = angkaGenap.map(double => double ** 2)
console.info(kuadrat)

// 3. Reduce Untuk Menghitung Total
const prices = [10000, 20000, 15000];

// Gunakan .reduce() untuk menghitung total harga.
// JAWABAN

const total = prices.reduce((oldVal, currVal) => oldVal + currVal)
console.info(total)
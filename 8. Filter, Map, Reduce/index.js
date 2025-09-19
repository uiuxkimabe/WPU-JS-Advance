const angka = [-1,8,9,1,4,-5,4,3,2,9];
console.info(angka)

// memfilter angka dengan menggunakan 
// pakai for
let newArr = []
// for (let i = 0; i < angka.length; i++) {
//    if (angka[i] >=3 ) {
//       newArr.push(angka[i])
//    }
// }

// pakai foreach
angka.forEach(element => {
   if (element >= 3) {
      newArr.push(element)
   }
});
console.info(newArr)

// pakai filter
const arrBaru = angka.filter(angka => angka >= 3)

// MAP (Memanipulasi setiap element pada array)
// Contoh ingin membuat semua element angka di kalikan 2
const arrMap = angka.map(angka => angka ^ 3)
console.info(arrMap)

// REDUCE (Menggabungkan semua element pada array menjadi satu nilai saja)
// reduce memiliki 2 parameter accumulator dan currentValue
// accumulator adalah nilai yang dihasilkan dari proses sebelumnya (yang dilakukan pada currentvalue)
// currentValue adalah nilai element pada array saat ini
// contoh ingin menjumlahkan semua element pada array angka
const arrReduce = angka.reduce((accumulator, currentValue) => accumulator + currentValue)
console.info(arrReduce)


// Method Chaining
// Menggunakan 3 array prototype sekaligus untuk penyelesaian masalah
// Soal :
// Cari Angka > 5
// Lalu Hasilnya * 3
// Lalu Jumlahkan semuanya

const nomor = [-1,8,9,1,4,-5,-4,3,2,9];

// Cari angka > 5
const newNomor = nomor.filter(angka => angka > 5)
.map(angka => angka * 3)
.reduce((acc,currentVal)=> acc + currentVal)
console.info(newNomor)
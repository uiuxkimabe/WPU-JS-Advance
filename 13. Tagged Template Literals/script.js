// TAGGED TEMPLATES
// bentuk lain dari template literals yang memungkinkan membuat templates literals melalui sebuah function

const nama = "Kiki Afrianto"
const umur = 30

function coba(strings, ...restValues) {
   // Cara 1
   // let hasil = ''
   // strings.forEach((text, i) => {
   //    hasil += `${text}${restValues[i] || ""}`
   // });
   // return hasil

   // Cara 2 Pake High Order Function
   return strings.reduce((gabungkanIsi, semuaStrings, i) => `${gabungkanIsi}${semuaStrings}${restValues[i] || ""}`, "") // tanda kutip di akhir untuk menampilkan nilai awal, kalo angka biasanya 0, kalo string bisa tanda kutip kosong
}

const gabung = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`

console.info(gabung)
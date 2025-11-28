// Template Literal
// Hanya dibuat dengan back tick ``
// Bisa multiline string
// Embedded Expression
// HTML Fragments
// Memungkinkan untuk Expression Interpolation
// Tagged Template

// Contoh Template Literal / Template String Embedded Expression
const nama = 'Kiki Afrianto';
const umur = 30;
// console.info(`Halo, nama saya ${nama}, dan saya berumur ${umur} tahun.`)

// Contoh Ternari OPerator Di dalam Expression
const angka = 6
console.info(`${(angka % 2 === 0) ? "Bilangan Genap" : "Bilangan Ganjil"}`)

// Contoh HTML Fragment
const employee = {
   nama : "Kiki Afrianto",
   umur : 30,
   nrp : '12130408',
   email : 'kikiaye@brata.com'
}

const element = `
<div class="mhs">
   <h2 class="nama">${employee.nama}</h2>
   <span class="nrp">${employee.nrp}</span>
</div>
`

console.info(element)


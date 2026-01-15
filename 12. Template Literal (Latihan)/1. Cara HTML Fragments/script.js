// 1. HTML Fragments
// Menampilkan data berikut kedalam html dengan HTML Fragments

// Misal Object Data Karyawan
const mahasiswa = {
   nama: "Kiki Afrianto",
   jurusan: "Teknik Informatika",
   nomorInduk: "12130408",
   usia: 30,
   email: "kikiafrianto@bratacorp.com"
}

// HTML Elementnya yang akan di tampilkan

const element = `
   <div class="mhs">
      <h3 class="name">${mahasiswa.nama}</h3>
      <p class="nim">${mahasiswa.nomorInduk} | ${mahasiswa.usia} Tahun</p>
      <span class="other">${mahasiswa.jurusan} | ${mahasiswa.email}</span>
   </div>
`
// Tampilkan di dalam HTML
document.body.innerHTML = element
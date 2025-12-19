// HTML Fragment
const employe = {
   nama: 'Kiki Afrianto',
   umur: 30,
   nik: '123456',
   email: 'kikiafrianto@brata.com'
}

// tampilkan kedalam bentuk html
// const element = `<div class="mhs">
//    <h2>Name : ${employe.nama}</h2>
//    <p class="nik">${employe.nik}</p>
// </div>`


// 2. LOOPING

// const mahasiswa = [
//    {
//       nama: "Kiki Afrianto",
//       jabatan: "CEO"
//    },
//    {
//       nama: "Rana Diya",
//       jabatan: "CTO"
//    },
//    {
//       nama: "Raniah Nurfadilah",
//       jabatan: "Direktur"
//    },
//    {
//       nama: "Kimabe",
//       jabatan: "Komisaris"
//    },
// ]

// const element = `<div class="mhs">
//    ${mahasiswa.map(e => `<ul>
//          <li>${e.nama}</li>
//          <li>${e.jabatan}</li>
//       </ul>`).join("")}

// </div>`

// document.body.innerHTML = element

// 3. CONDITIONAL

// const playlist = [
//    {
//       penyanyi: "Isyana Saravati",
//       judul: "Kau Adalah"
//    },
//    {
//       penyanyi: "Afgan",
//       judul: "Heaven",
//       feat: "Isyana Sarasvati"
//    },
//    {
//       penyanyi: "Juicy Luicy",
//       judul: "Sialan",
//       feat: "Adrian"
//    },
//    {
//       penyanyi: "Juicy Luicy",
//       judul: "Tak di Tanganku",
//       feat: "Mawar De Jong"
//    },
//    {
//       penyanyi: "Vidi Aldiano",
//       judul: "Nuansa Bening",
//    },

// ]

// const element = `<div class="playlist">
//    ${playlist.map(song => `<ul>
//          <li>${song.penyanyi} ${song.feat ? `(Feat. ${song.feat})` : `Official`}</li>
//          <li>${song.judul}</li>
      
//       </ul>`).join("")}

// </div>`


// 4. Nested
// HTML Fragment Bersarang

const mahasiswa = {
   nama: "Kiki Afrianto",
   semester: 5,
   mataKuliah: [
      'Sistem Informatika',
      'Kecerdasan Buatan',
      'Python Dasar',
      'Javascript Advance'
   ]
}

// Cara Function 1
// function tampilkanMatkul() {
//    const listMatkul = `
//    <h4>${mahasiswa.nama}</h4>
//    <span class="semester">${mahasiswa.semester}</span>
//    <ol>
//       ${mahasiswa.mataKuliah.map(list=> `<li>${list}</li>`).join("")}
//    </ol>`
//    return listMatkul
// }

// Cara Function 2
function tampilkanMatkul(listMataKuliah) {
   return `
      <ol>
         ${listMataKuliah.map(e => `<li>${e}</li>`).join("")}
      </ol>
   `
}

const el = `<div class="mhs">
   <h4 class="nama">${mahasiswa.nama}</h4>
   <span class="semester">${mahasiswa.semester}</span>
   <h4>List Mata Kuliah</h4>
   ${tampilkanMatkul(mahasiswa.mataKuliah)}
</div>`


// console.info(tampilkanMatkul())
// document.body.innerHTML = tampilkanMatkul()
document.body.innerHTML = el
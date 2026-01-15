// Cara Looping
const mahasiswa = [
   {
      nama: "Kiki",
      email: "kiki@brata.com"
   },
   {
      nama: "Afrianto",
      email: "afrianto@brata.com"
   },
   {
      nama: "Brata",
      email: "brata@brata.com"
   },
]

// Menampilkan data dengan looping

const element = `
   <div class="mhs">
      <ol>
         ${mahasiswa.map(list => `
            <li>
               <p class="name">${list.nama}</p>
               <span class="email">${list.email}</span>
            </li>   
         `).join("")}
      </ol>
   </div>
`

document.body.innerHTML = element
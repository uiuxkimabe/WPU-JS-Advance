// Conditional Ternary

const album = [
   {
      band: "Juicy Luicy",
      judul: "Asing",
      link: "https://music.youtube.com/watch?v=RH-azQEq3es&si=Dk69DiQrL8H0EGud&t=40"
   },
   {
      band: "Juicy Luicy",
      judul: "Sialan",
      feat: "Adrian Khalif"
   },
   {
      band: "Juicy Luicy",
      judul: "Tak di Tanganku",
      feat: "Mawar de Jong"
   },
   {
      band: "Juicy Luicy",
      judul: "Lantas",
   },
   {
      band: "Hindia",
      judul: "Membasuh",
      feat: "Sekar",
   },
   {
      band: "Hindia",
      judul: "Everything You Are",
   },
   {
      band: "DEABDIL",
      judul: "Spontan(tanpa)UHUY",
      link: "https://music.youtube.com/watch?v=6VFqf5tiE6w&si=XP-h1dSauqJLTkmu"
   },
]

// Tampilkan list data baik yang featurirng maupun tidak

const element = `
   <div class="musician">
      ${album.map(concert => `
         <ul>
            <li>
               <h4>${concert.band} ${concert.feat ? `Feat. ${concert.feat}` : ""}</h4>
               <span>Judul : ${concert.judul}</span>
               <p>${concert.link ? `<a href=${concert.link} target="_blank">Dengarkan Disini</a>` : "Link Belum Tersedia"}</p>
            </li>
         </ul>   
      `).join("")}
   </div>
`

document.body.innerHTML = element
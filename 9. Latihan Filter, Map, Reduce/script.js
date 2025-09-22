const jumlahVideo = document.querySelector(".jumlah-video");
const totalDurasi = document.querySelector(".total-durasi");
const playlistVideo = document.querySelector(".playlist-video");

// Playlist
const allVideo = Array.from(document.querySelectorAll('ul li'))
jumlahVideo.innerHTML = `${allVideo.length} Video`

// Playlist Javascript
let playList = "Javascript Lanjutan"
let arrPlaylist = allVideo.filter(list => list.textContent.includes(playList))
// Ambil Durasi
.map(video => video.dataset.duration)
// ubah durasi jadi integer dari menit ke detik
.map((time) => {
   // split durasi
   const arrTime = time.split(':')
   return parseInt(arrTime[0]*60) + parseInt(arrTime[1])
})
// total durasi keseluruhan
.reduce((prev,curr) => prev + curr)
// total durasi dalam menit
const jam = Math.floor(arrPlaylist / 3600)
arrPlaylist = Math.floor(arrPlaylist - jam * 3600)
// Cari Menit
const menit = Math.floor(arrPlaylist / 60)
// Cari Detik
const detik = arrPlaylist - menit * 60
console.info(jam, menit, detik)

console.info(arrPlaylist)

playlistVideo.innerHTML = `${arrPlaylist.length} Video`
totalDurasi.innerHTML = `${jam} Jam :${menit} Menit :${detik} Detik`
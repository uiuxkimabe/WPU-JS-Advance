// Bikin button di klik maka akan muncul alert masukan nama customer dan harga

const dataPelanggan = [
   {
      namaPelanggan : "Andi",
      listBelanja : [
         { namaBarang : "Baju", harga : 100000 },
         { namaBarang : "Celana", harga : 150000 },]
   },
   {
      namaPelanggan : "Budi",
      listBelanja : [
         { namaBarang : "Topi", harga : 34000 },
         { namaBarang : "Kaos", harga : 75000 },]
   },
   {
      namaPelanggan : "Asep",
      listBelanja : [
         { namaBarang : "Beras", harga : 50000 },
         { namaBarang : "Telur", harga : 30000 },]
   },
]

// Tugas Hitunglah Total Belanjaan Masing-Masing Pelanggan
const totalBelanja = dataPelanggan.map(pelanggan => {
   return {
      namaPelanggan : pelanggan.namaPelanggan,
      totalBelanja : pelanggan.listBelanja.reduce((total, item) => total + item.harga, 0)
   }
})

// Mencari list belanja dengan harga paling mahal
const Masing = dataPelanggan.map(pelanggan => {
   return {
      namaPelanggan : pelanggan.namaPelanggan,
      hargaMahal : Math.max(...pelanggan.listBelanja.map(item => item.harga))
   }
})
console.info(Masing)

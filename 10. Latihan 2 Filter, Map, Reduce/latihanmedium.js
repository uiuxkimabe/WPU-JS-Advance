const siswa = [
  { nama: 'Andi', nilai: 85 },
  { nama: 'Budi', nilai: 70 },
  { nama: 'Citra', nilai: 90 },
  { nama: 'Dewi', nilai: 60 }
];

// nilai > 75

const diatas75 = siswa.filter(upKKM => upKKM.nilai >= 75)
console.info(diatas75)
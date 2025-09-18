const box = document.querySelector('.box')

box.addEventListener('click', ()=> {
   let satu = 'size'
   let dua = 'caption'

   if (box.classList.contains(satu)) {
      // nuker isi dengan notasi keres
      [satu,dua] = [dua,satu]; //tukar var satu dan dua
   }

   box.classList.toggle(satu);
   setTimeout(() => {
      box.classList.toggle(dua);
   }, 1000);
})


let p = 0,
   c = 0;

getPilihanComputer = () => {
   const comp = Math.floor(Math.random() * 3) + 1;

   if (comp === 1) return 'flip-rock';
   if (comp === 2) return 'flip-paper';

   console.log(comp);
   return 'flip-scissors';
};

randomImage = () => {
   const imgComputer = document.querySelector('.computer');
   const gambar = ['flip-rock', 'flip-paper', 'flip-scissors'];

   let i = 0;
   const waktuMulai = new Date().getTime();
   setInterval(() => {
      if (new Date().getTime() - waktuMulai > 1000) {
         clearInterval;
         return;
      }
      imgComputer.setAttribute(
         'src',
         'resources/images/' + gambar[i++] + '.png'
      );
      // console.log(new Date().getTime());
      console.log(waktuMulai);
      console.log(new Date().getTime() - waktuMulai);
      if (i == gambar.length) {
         i = 0;
      }
   }, 100);
};

getPemenang = (computer, player) => {
   if (`flip-${player}` == computer) return 'DRAW';
   if (player == 'rock')
      return computer == 'flip-scissors' ? 'YOU WIN' : 'YOU LOSE';
   if (player == 'paper')
      return computer == 'flip-scissors' ? 'YOU LOSE' : 'YOU WIN';
   if (player == 'scissors')
      return computer == 'flip-rock' ? 'YOU LOSE' : 'YOU WIN';
};

const pilihan = document.querySelectorAll('li img');

pilihan.forEach((pil) => {
   pil.addEventListener('click', () => {
      const computer = getPilihanComputer();
      const player = pil.className;
      const compPic = document.querySelector('.computer');
      const hasil = document.querySelector('.hasil');
      const pScore = document.querySelector('#player-score');
      const cScore = document.querySelector('#computer-score');

      randomImage();

      setTimeout(() => {
         compPic.setAttribute('src', 'resources/images/' + computer + '.png');

         hasil.innerHTML = getPemenang(computer, player);

         if (hasil.innerHTML == 'YOU WIN') {
            pScore.innerHTML = `${(p += 1)}`;
         } else if (hasil.innerHTML == 'YOU LOSE') {
            cScore.innerHTML = `${(c += 1)}`;
         }
      }, 1000);
   });
});

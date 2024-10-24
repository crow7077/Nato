const navbar = document.querySelector('.navbar');
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;   


  if (prevScrollpos > currentScrollPos)   
 {
    // Rolando para cima: mostra a navbar
    navbar.classList.remove('hidden');
  } else {
    // Rolando para baixo: esconde a navbar
    navbar.classList.add('hidden');
  }

  prevScrollpos = currentScrollPos;
};
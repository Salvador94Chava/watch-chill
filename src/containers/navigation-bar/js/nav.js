let navBarEl = document.querySelector('nav.nav-bar');
let logoPath = location.pathname.includes('containers') ? '../../../assets/images/watch_chill_logo.png'
  : './assets/images/watch_chill_logo.png';
let homePath = location.pathname.includes('containers') ? '../../../index.html'
  : './index.html';

navBarEl.classList.add("container","navbar", "level");
navBarEl.setAttribute("role", "navigation");
navBarEl.setAttribute("aria-label", "main navigation");
navBarEl.innerHTML = `
<div class="level-item">
  <a href="${homePath}">
  <img src="${logoPath}" alt="Watch&Chill logo" style= "height: 150px;">
  </a>
</div>
`
let navBarEl = $('nav.nav-bar');
let logoPath = location.pathname.includes('containers') ? '../../../assets/images/watch_chill_logo.png'
  : './assets/images/watch_chill_logo.png';


navBarEl.addClass("navbar level");
navBarEl.attr("role", "navigation");
navBarEl.attr("aria-label", "main navigation");
navBarEl.html(`
<div class="level-item">
    <a href="">
      <img src="${logoPath}" alt="Watch&Chill logo" style= "height: 150px;">
    </a>
  </div>
`);
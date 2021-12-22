let navBarEl = $('nav');

navBarEl.addClass("navbar");
navBarEl.attr("role","navigation");
navBarEl.attr("aria-label","main navigation");
navBarEl.html(`
<div class="navbar-brand">
    <a class="navbar-item" href="">
      <img src="assets/images/logo4.png" width="70" height="110">
    </a>
  </div>
`);
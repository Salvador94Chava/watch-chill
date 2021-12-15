let modalEl = $('nav');

// modalEl.addClass("navbar");
// modalEl.attr("role","navigation");
// modalEl.attr("aria-label","main navigation");
modalEl.html(`
<div class="modal">
<div class="modal-background"></div>
<div class="modal-card">
  <header class="modal-card-head">
    <p class="modal-card-title"> 
    Original Title <!-- original_title -->
    </p>
    <button class="delete" aria-label="close">Close</button>
  </header>
  <section class="modal-card-body">
    This is where all the information from the movie will be displayed
    <br>
    Including 
    <br>
    Movie duration
    <br>
    Genres
    <br>
    Description
  </section>
  <footer class="modal-card-foot">
    <button class="button is-success">Watch now!</button>
  </footer>
</div>
</div>
`);
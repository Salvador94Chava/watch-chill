var modalEl = document.querySelector('.modal');
var modalBackground = document.querySelector('.modal-background');
var moviePosterEl = document.querySelector('.modal-content img');
var modalCloseBtn = document.querySelector('.modal-close');
var movieTitleEl = document.querySelector('.movie-title');
var movieDateEl = document.querySelector('.release-date');
var movieGenresEl = document.querySelector('.genres');
var movieRuntimeEl = document.querySelector('.runtime');
var movieOverviewEl = document.querySelector('.overview');
var moviePopularityEl = document.querySelector('.popularity');
var moviePageEl = document.querySelector('.movie-homepage');
var movieURL = 'https://api.themoviedb.org/3/movie/';
var url, response, movieGenres, runtime;

ready(function () {
    bulmaCarousel.attach('#slider', {
        slidesToScroll: 1,
        slidesToShow: 4,
    });
    bulmaCarousel.attach('#slider1', {
        slidesToScroll: 1,
        slidesToShow: 3,
        breakpoints: [{
            changePoint: 480, slidesToShow: 1, slidesToScroll: 1
        },
        {
            changePoint: 640, slidesToShow: 2, slidesToScroll: 2
        }, {
            changePoint: 768, slidesToShow: 3, slidesToScroll: 3
        }],
        infinite: true,
    });
    bulmaCarousel.attach('#slider2', {
        slidesToScroll: 1,
        slidesToShow: 3,
        loop: true
    });
    bulmaCarousel.attach('.hero-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        pagination: false,
        effect: 'fade',
        loop: true
    });
});

async function populateModal(movieId) {
    var genresArray = [];
    url = `${movieURL}${movieId}?api_key=${APIKey}`
    response = await fetch(url);
    response = await response.json();

    movieTitleEl.textContent = response.original_title;
    movieDateEl.textContent = response.release_date;
    response.genres.forEach(genre => {
        genresArray.push(genre.name);
    });
    movieGenres = genresArray.join();
    movieGenresEl.textContent = movieGenres;
    var hours = Math.floor(response.runtime / 60);
    var minutes = response.runtime % 60;
    movieRuntimeEl.textContent = `${hours} hr ${minutes} min`;
    movieOverviewEl.textContent = response.overview;
    var percentage = (response.vote_average * 100) / 10;
    moviePopularityEl.textContent = `${percentage} %`
    moviePosterEl.src = `https://www.themoviedb.org/t/p/w1280${response.poster_path}`
    moviePageEl.textContent = response.homepage;
    moviePageEl.href = `${response.homepage}`
    modalEl.classList.add('is-active');
}

function createEventManager() {
    $(".card").click(function (event) {
        event.preventDefault();
        var classString = ($(this)[0].className);
        if (classString) {
            var movieID = classString.substring(($(this)[0].className).indexOf(' '), ($(this)[0].className).length);
            populateModal(movieID.trim());
        }
    });
}

function closeModal() {
    modalEl.classList.remove('is-active');
}

$(document).ready(createEventManager);
modalCloseBtn.addEventListener('click', closeModal);
modalBackground.addEventListener('click', closeModal);

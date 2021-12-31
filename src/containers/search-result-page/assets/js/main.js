var modalEl = document.querySelector('.modal');
var modalBackground = document.querySelector('.modal-background');
var modalCloseBtn = document.querySelector('.modal-close');
var movieTitleEl = document.querySelector('.modal-card-title');

var movieURL = 'https://api.themoviedb.org/3/movie/';

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

function createEventManager() {
    $(".card").click(function (event) {
        event.preventDefault();
        modalEl.classList.add('is-active');
        var classString = ($(this)[0].className);
        if (classString) {
            var movieID = classString.substring(($(this)[0].className).indexOf(' '), ($(this)[0].className).length);
            console.log(movieID);
            // var movieResponse = await fetch(`${movieURL}${movieID}?api_key=${APIKey}`);
            // movieResponse = await movieResponse.json();


            //get poster -> https://www.themoviedb.org/t/p/w1280/HEREAPIINFO

        }
    });
}

function closeModal() {
    modalEl.classList.remove('is-active');
}

$(document).ready(createEventManager);
modalCloseBtn.addEventListener('click', closeModal);
modalBackground.addEventListener('click', closeModal);

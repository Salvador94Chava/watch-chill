const APIKey = "612305371d20a404c362f2768ab01667";

yesGenresLocalStorage = [""];
noGenresLocalStorage = [""];
moviesArray = [""];
genresArray = [""];



var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=b574c405150412e74904c09bd2c259b6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
var genresQueryURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + APIKey + "&language=en-US";

function readLocalStorage() {
    yesGenresLocalStorage = JSON.parse(localStorage.getItem("yesGenres"));
    noGenresLocalStorage = JSON.parse(localStorage.getItem("noGenres"));

}

function getMoviesFromAPI() {
    /* Get the list of Genres*/
    fetch(genresQueryURL)
        .then(function (response) {
            if (response.status === 200) {

            }

            return response.json();
        })
        .then(function (data) {

            genresArray = data.genres;
            console.log(genresArray);

        })

    fetch(queryURL)
        .then(function (response) {

            if (response.status === 200) {

            }

            return response.json();
        })
        .then(function (data) {

            readMoviesArray(data.results);
            console.log(data);
        })

}
function readMoviesArray(myArray) {
    for (var index = 0; index < myArray.length; index++) {
        var movie = myArray[index];
        addMovie(movie);
    }
}

function translateGenres(myGenres) {
    var stringGenres = "";
    if (myGenres)

        for (var index = 0; index < 3; index++) {

            for (var i = 0; i < genresArray.length; i++) {
                if (genresArray[i].id == myGenres[index]) {
                    if (!stringGenres) {
                        stringGenres = genresArray[i].name;
                        i = genresArray.length;
                    } else stringGenres = stringGenres + ", " + genresArray[i].name;
                }

            }

        }
    return stringGenres;
}

function adaptText(text, maxLength) {
    var textString = text;
    if (text.length > maxLength) {
        text = text.substring(0, (maxLength - 3)) + "...";
    }
    return text;
}

function addMovie(myMovie) {
    var sliderEl = document.getElementById("slider1");
    /*console.log(sliderEl);*/
    var cardEl = document.createElement("div");
    cardEl.setAttribute("class", "card");
    var card_imageEl = document.createElement("div");
    card_imageEl.setAttribute("class", "card-image");

    var figureEl = document.createElement("figure");
    figureEl.setAttribute("class", "image is-16by9 is-covered");
    var imgEl = document.createElement("img");
    var imgLink = "https://image.tmdb.org/t/p/w500" + myMovie.backdrop_path;
    imgEl.setAttribute("src", imgLink);
    imgEl.setAttribute("alt", myMovie.title);
    figureEl.append(imgEl);

    card_imageEl.append(figureEl);

    var card_contentEl = document.createElement("div");
    card_contentEl.setAttribute("class", "card-content");
    var item_titleEl = document.createElement("div");
    item_titleEl.setAttribute("class", "item__title");
    item_titleEl.textContent = adaptText(myMovie.title,41);
    var item_descriptionEl = document.createElement("div");
    item_descriptionEl.setAttribute("class", "item__description");
    item_descriptionEl.textContent = adaptText(myMovie.overview, 82); 
    var item_genresEl = document.createElement("div");
    item_genresEl.setAttribute("class", "item__description");
    item_genresEl.textContent = "Genre: " + translateGenres(myMovie.genre_ids); 

    card_contentEl.append(item_titleEl);
    card_contentEl.append(item_descriptionEl);
    card_contentEl.append(item_genresEl);

    cardEl.append(card_imageEl);
    cardEl.append(card_contentEl);


    sliderEl.append(cardEl);

}

/*addMovie()*/
getMoviesFromAPI();





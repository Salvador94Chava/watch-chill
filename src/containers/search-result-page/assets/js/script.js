const APIKey = "612305371d20a404c362f2768ab01667";


var yesGenresLocalStorage = [""];
var noGenresLocalStorage = [""];
var keywords = "";
var language = "en-US";
var moviesArray = [""];
var genresArray = [""];
var today = moment();
var toYear = moment(today).format("YYYY");
var fromYear = toYear;


var queryURL = "";
var genresQueryURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + APIKey + "&language=en-US";

function readLocalStorage() {
    yesGenresLocalStorage = JSON.parse(localStorage.getItem("yesGenres"));
    noGenresLocalStorage = JSON.parse(localStorage.getItem("noGenres"));
    keywords = localStorage.getItem("keywords");
    language = localStorage.getItem("language");
}

function arrayToString(myArray) {
    var myString = "";
    for (var index = 0; index < myArray.length; index++) {
        var element = myArray[index];
        if (!myString) {
            myString = element;
        } else
            myString = myString + "%2C" + element;
    }
    return (myString);
}

function buildQueryURL() {
    queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + APIKey;

    language = "&language=" + language;
    queryURL = queryURL + language;

    var sort = "&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    queryURL = queryURL + sort;

    if (yesGenresLocalStorage) {
        var yesGenres = arrayToString(yesGenresLocalStorage);
        yesGenres = "&with_genres=" + yesGenres;
        queryURL = queryURL + yesGenres;
    }
    if (noGenresLocalStorage) {
        var noGenres = arrayToString(noGenresLocalStorage);
        noGenres = "&without_genres=" + noGenres;
        queryURL = queryURL + noGenres;
    }
    if (keywords) { }
    keywords = "&with_keywords=" + keywords.replace(/,/g, "%2C");
    queryURL = queryURL + keywords;
}

function getMoviesFromAPI() {
    readLocalStorage();
    buildQueryURL();
    fetch(genresQueryURL)
        /* Get the list of Genres*/
        .then(function (response) {
            if (response.status === 200) {

            }

            return response.json();
        })
        .then(function (data) {

            genresArray = data.genres;

        })

    fetch(queryURL)
        .then(function (response) {

            if (response.status === 200) {

            }

            return response.json();
        })
        .then(function (data) {

            readMoviesArray(data.results);
            console.log(queryURL)

        })

        .then(function (data) {
            addBulmaMain();

        })

}

function displayNoResultSlides() {



};

function readMoviesArray(myArray) {
    if (myArray.length == 0) {

        for (var index = 0; index < 6; index++) {
            addMovie(null);
        }
    } else {
        for (var index = 0; index < myArray.length; index++) {
            var movie = myArray[index];
            addMovie(movie);
        }
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

function addBulmaMain() {
    var blockEl = document.createElement("div");
    var scriptBulma3El = document.createElement("script");
    scriptBulma3El.setAttribute("src", "./assets/js/main.js");
    scriptBulma3El.defer = true;

    var bodyEl = document.getElementById("body");

    bodyEl.append(scriptBulma3El);
}

function addMovie(myMovie) {
    var sliderEl = document.getElementById("slider1");
    var cardEl = document.createElement("div");
    if (!myMovie)
        cardEl.setAttribute("class", "card");
    else
        cardEl.setAttribute("class", "card " + myMovie.id);
    var card_imageEl = document.createElement("div");
    card_imageEl.setAttribute("class", "card-image");

    var figureEl = document.createElement("figure");
    figureEl.setAttribute("class", "image is-5by3 is-covered");
    var imgEl = document.createElement("img");
    if (!myMovie)
        var imgLink = "https://media.istockphoto.com/vectors/no-result-not-found-or-404-web-page-error-illustration-vector-id846795366";
    else
        var imgLink = "https://image.tmdb.org/t/p/w500" + myMovie.backdrop_path;
    imgEl.setAttribute("src", imgLink);
    if (!myMovie)
        imgEl.setAttribute("alt", "no results");
    else
        imgEl.setAttribute("alt", myMovie.title);
    figureEl.append(imgEl);

    card_imageEl.append(figureEl);
    if (myMovie) {
        var card_contentEl = document.createElement("div");
        card_contentEl.setAttribute("class", "card-content");
        var item_titleEl = document.createElement("div");
        item_titleEl.setAttribute("class", "item__title");
        item_titleEl.textContent = adaptText(myMovie.title, 41);
        var item_descriptionEl = document.createElement("div");
        item_descriptionEl.setAttribute("class", "item__description");
        item_descriptionEl.textContent = adaptText(myMovie.overview, 82);
        var item_genresEl = document.createElement("div");
        item_genresEl.setAttribute("class", "item__description");
        item_genresEl.textContent = "Genre: " + translateGenres(myMovie.genre_ids);

        card_contentEl.append(item_titleEl);
        card_contentEl.append(item_descriptionEl);
        card_contentEl.append(item_genresEl);
    }
    cardEl.append(card_imageEl);
    if (myMovie)
        cardEl.append(card_contentEl);


    sliderEl.append(cardEl);
}
getMoviesFromAPI();










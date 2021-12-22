const APIKey = "612305371d20a404c362f2768ab01667";

var queryURL2 = "https://api.themoviedb.org/3/discover/movie?api_key=b574c405150412e74904c09bd2c259b6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";




function readLocalStorage() {

    
}

function addMovie() {
    var sliderEl = document.getElementById("slider1");
    var cardEl = document.createElement("div");
    cardEl.setAttribute("class", "card");
    var card_imageEl = document.createElement("div");
    card_imageEl.setAttribute("class", "card-image");

    var figureEl = document.createElement("figure");
    figureEl.setAttribute("class", "image is-3by4 is-covered");
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "https://image.tmdb.org/t/p/w185/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg");
    imgEl.setAttribute("alt", "");
    figureEl.append(imgEl);

    card_imageEl.append(figureEl);

    var card_contentEl = document.createElement("div");
    card_contentEl.setAttribute("class", "card-content");
    var item_titleEl = document.createElement("div");
    item_titleEl.setAttribute("class", "item__title");
    item_titleEl.textContent = "Mon titre 2";
    var iitem_descriptionEl = document.createElement("div");
    iitem_descriptionEl.setAttribute("class", "item__description");
    iitem_descriptionEl.textContent = "Este es el mio le slider";

    card_contentEl.append(item_titleEl);
    card_contentEl.append(iitem_descriptionEl);

    cardEl.append(card_imageEl);
    cardEl.append(card_contentEl);


    sliderEl.append(cardEl);
}

fetch(queryURL2)
    .then(function (response) {

        if (response.status === 200) {

        }
        return response.json();
    })
    .then(function (data) {

        console.log(data);

    })


addMovie();


const APIKey = "612305371d20a404c362f2768ab01667";

/*genero*/
/*año*/
function addMovie() {
    var sliderEl = document.getElementById("slider1");
    var cardEl = document.createElement("div");
    cardEl.setAttribute("class", "card");
    var card_imageEl = document.createElement("div");
    card_imageEl.setAttribute("class", "card-image");

    var figureEl = document.createElement("figure");
    figureEl.setAttribute("class", "image is-16by9 is-covered");
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "https://images.unsplash.com/photo-1550945771-515f118cef86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80");
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

addMovie();


function outputKeyword() {
    var keywordInput = document.getElementById("input-keyword");
    var selectInput = document.getElementById("input-select");

    console.log(selectInput.options[selectInput.selectedIndex].value);
    console.log(keywordInput.value);

    window.localStorage.setItem(selectInput.options[selectInput.selectedIndex].value, keywordInput.value);
    console.log(window.localStorage.getItem(selectInput.options[selectInput.selectedIndex].value));

    api_request();

}


function api_request() {
    var keywordInput = document.getElementById("input-keyword");
    /* var url = "https://api.themoviedb.org/3/search/movie?api_key=%27612305371d20a404c362f2768ab01667%27&query=%27matrix%27"; */
    var url = "https://api.themoviedb.org/3/search/movie?api_key=612305371d20a404c362f2768ab01667&query=" + keywordInput.value;
    console.log("Sending request: " + url);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);
}
function outputKeyword() {
    var keywordInput = document.getElementById("input-keyword");
    var selectInput = document.getElementById("input-select");

    // console.log(selectInput.options[selectInput.selectedIndex].value);
    // console.log(keywordInput.value);

    // window.localStorage.setItem(selectInput.options[selectInput.selectedIndex].value, keywordInput.value);
    // console.log(window.localStorage.getItem("noGenres"));
    // console.log(window.localStorage.getItem("yesGenres"));


    // console.log(window.localStorage.getItem(selectInput.options[selectInput.selectedIndex].value));

    api_request();

    // Object.keys(localStorage).forEach(function (key) {
    //     console.log(localStorage.getItem(key));
    // });

    // Object.keys(localStorage).forEach(function (key) {
    //     console.log(localStorage.getItem(key));
    //     for (const keyVal in key) {
    //         console.log(keyVal);
    //     }
    // });

    // var locSto = JSON.parse(localStorage.getItem("yesGenres"));
    // console.log(locSto);
    // // console.log(localStorage.getItem(key));
    // for (var i = 0; i < locSto.length; i++) {
    //     console.log(locSto[i]);

    // }
}

function api_request() {
    var keywordInput = document.getElementById("input-keyword");
    /* var url = "https://api.themoviedb.org/3/search/movie?api_key=%27612305371d20a404c362f2768ab01667%27&query=%27matrix%27"; */
    var url = "https://api.themoviedb.org/3/search/keyword?api_key=612305371d20a404c362f2768ab01667&query=" + keywordInput.value;
    console.log("Sending request: " + url);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            var locSto = JSON.parse(xhr.responseText);
            console.log(locSto.results);
            for (var i = 0; i < locSto.results.length; i++) {
                console.log(locSto.results[i].id);
            }
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);
}
function outputKeyword() {
    var keywordInput = document.getElementById("input-keyword");
    var selectInput = document.getElementById("input-select");
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
            var keywordIDS = [];
            for (var i = 0; i < locSto.results.length; i++) {
                console.log(locSto.results[i].id);
                if (i <= 6)
                    keywordIDS.push(locSto.results[i].id);
                // window.localStorage.setItem("keywords", locSto.results[i].id);
            }
            window.localStorage.setItem("keywords", keywordIDS);

        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);
}
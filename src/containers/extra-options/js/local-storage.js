const API_KEY = "612305371d20a404c362f2768ab01667";
var keywordInput = document.querySelector("#keyword input");

function saveKeywordIds() {
    var url = `https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${keywordInput.value}`;
    console.log("Sending request: " + url);
    var xhr = new XMLHttpRequest();
    var keywordIds = [];
    
    xhr.open("GET", url, true);
    xhr.onload = function (e) {
        if (this.readyState === 4) {
            var localS = JSON.parse(this.responseText);
            for (var i = 0; i < localS.results.length; i++) {
                console.log(localS.results[i].id);
                if (i <= 6)
                    keywordIds.push(localS.results[i].id);
            }
            localStorage.setItem("keywords", keywordIds);
        } else {
            //If there is an error is going to be printed into console.
            console.error(xhr.statusText);
        }
    };

    xhr.send();
    xhr.onerror = function (e) {
        new Error(xhr.statusText);
    };
};

function saveToLocalStorage() {
    saveKeywordIds();

    let index = languages.findIndex(language => language.English === languagesMenu.value);
    let alpha = languages[index].alpha2;
    
    localStorage.setItem('language', alpha);
    localStorage.setItem('fromYear', fromYearMenu.value);
    localStorage.setItem('toYear', toYearMenu.value);
}

searchButton.addEventListener('click', saveToLocalStorage);
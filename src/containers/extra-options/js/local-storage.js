const API_KEY = "612305371d20a404c362f2768ab01667";
var keywordInput = document.querySelector("#keyword input");

function saveKeywordIds() {
    if (keywordInput.value === '') return;
    var keywordIds = [];
    var url = `https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${keywordInput.value}`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.results.length; i++) {
                keywordIds.push(data.results[i].id);
            }
            localStorage.setItem("keywords", keywordIds);
        })
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
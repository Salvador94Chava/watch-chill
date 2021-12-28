const API_KEY = "612305371d20a404c362f2768ab01667";
var keywordInput = document.querySelector("#keyword input");

async function keywordIds() {
    if (keywordInput.value === '') return;
    var keywordIds = [];
    var url = `https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${keywordInput.value}`;
    var response = await fetch(url);
    
    response = await response.json();
    
    for (let i = 0; i < response.results.length; i++) {
        keywordIds.push(response.results[i].id);
    }

    return keywordIds;
};

async function saveToLocalStorage() {
    let index = languages.findIndex(language => language.English === languagesMenu.value);
    let alpha = languages[index].alpha2;

    localStorage.setItem('keywords', await keywordIds());
    localStorage.setItem('language', alpha);
    localStorage.setItem('fromYear', fromYearMenu.value);
    localStorage.setItem('toYear', toYearMenu.value);

    window.location.href = '../search-result-page/search_result.html';
}

searchButton.addEventListener('click', saveToLocalStorage);
const API_KEY = "612305371d20a404c362f2768ab01667";

async function saveToLocalStorage() {
    let index = languages.findIndex(language => language.English === languagesMenu.value);
    let alpha = languages[index].alpha2;

    localStorage.setItem('language', alpha);
    localStorage.setItem('fromYear', fromYearMenu.value);
    localStorage.setItem('toYear', toYearMenu.value);

    window.location.href = '../search-result-page/search_result.html';
}

searchButton.addEventListener('click', saveToLocalStorage);
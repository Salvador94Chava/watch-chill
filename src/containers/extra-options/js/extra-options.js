let fromYearEl = document.getElementById('from-year');
let toYearEl = document.getElementById('to-year');
let fromYearMenu = document.querySelector('#dropdown-from-menu .dropdown-content');
let toYearMenu = document.querySelector('#dropdown-to-menu .dropdown-content');
let languagesMenu = document.querySelector('#dropdown-lenguage-menu .dropdown-content');
let dropdownItem = document.querySelector('.dropdown-item');
let backButton = document.getElementById('backBtn');
let searchButton = document.getElementById('searchBtn');

const earliestYear = 1940;

function setYears(dropdownEl) {
    let currentYear = new Date().getFullYear();
    while (currentYear >= earliestYear) {
        let dateOption = document.createElement('option');
        dateOption.classList.add("dropdown-item");
        dateOption.textContent = currentYear;
        dropdownEl.appendChild(dateOption);
        currentYear -= 1;
    };
}

function setLanguages() {
    for (let i = 0; i < languages.length; i++) {
        let languageOption = document.createElement('option');
        languageOption.classList.add("dropdown-item");
        languageOption.textContent = languages[i].English;
        languagesMenu.appendChild(languageOption);
    }
}

function goBack() {
    window.location.href = '../../../index.html';
}

setYears(fromYearMenu);
setYears(toYearMenu);
fromYearMenu.querySelectorAll('.dropdown-item')[1].setAttribute('selected','');
setLanguages();
backButton.addEventListener('click', goBack);
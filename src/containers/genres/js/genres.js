var inputYes = document.querySelectorAll("#genres input.yes");
var inputNo = document.querySelectorAll("#genres input.no");
var label = document.querySelectorAll("#genres label");
var input = document.querySelectorAll("#genres input");
var extraOptionsCheckbox = document.querySelector(".checkbox.extra-options input");
var extraOptionsEl = document.querySelector(".columns.extra-options");
var genresChecked = 0;

/*
*Functions
*/
function uncheck(event) {
    for (var i = 0; i < inputYes.length; i++) {
        if (event.target.className === "yes" && event.target.dataset.index === inputNo[i].dataset.index && inputNo[i].checked === true) {
            inputNo[i].checked = false;
        } else if (event.target.className === "no" && event.target.dataset.index === inputYes[i].dataset.index && inputYes[i].checked === true) {
            inputYes[i].checked = false;
            genresChecked = genresChecked - 1;
        } else if (genresChecked < 3) {
            inputYes[i].removeAttribute("disabled");
        }
    }
}

function disable(event) {
    if (event.target.checked) {
        genresChecked = genresChecked + 1;
    } else if (!event.target.checked) {
        genresChecked = genresChecked - 1;
    }

    for (var i = 0; i < inputYes.length; i++) {
        if (genresChecked === 3 && !inputYes[i].checked) {
            inputYes[i].setAttribute("disabled", "");
        }
    }
}

function extraOptions() {
    if (extraOptionsCheckbox.checked) {
        extraOptionsEl.style.display = 'flex';
    } else {
        extraOptionsEl.style.display = 'none';
    }
}

function storeGenreOptions(event) {
    var checked = document.querySelectorAll("#genres input:checked");
    var index = languages.findIndex(language => language.English === languagesMenu.value);
    var alpha = languages[index].alpha2;

    if (checked.length === 0) {
        alert("Please select at least one genre");
    } else if (fromYearMenu.value > toYearMenu.value) {
        alert("From Date cannot be greater than To Date, please set a valid Date Range (i.e. from 1990 to 2000)");
    } else {
        var yesGenreArray = [];
        var noGenreArray = [];

        for (var i = 0; i < inputYes.length; i++) {
            if (inputYes[i].checked === true) {
                yesGenreArray.push(inputYes[i].dataset.index);
            };
        };

        for (var i = 0; i < inputNo.length; i++) {
            if (inputNo[i].checked === true) {
                noGenreArray.push(inputNo[i].dataset.index);
            };
        };

        localStorage.setItem("yesGenres", JSON.stringify(yesGenreArray));
        localStorage.setItem("noGenres", JSON.stringify(noGenreArray));

        if (!extraOptionsCheckbox.checked) {
            localStorage.setItem('language', 'en');
            localStorage.setItem('fromYear', new Date().getFullYear() - 1);
            localStorage.setItem('toYear', new Date().getFullYear());
        } else {
            localStorage.setItem('language', alpha);
            localStorage.setItem('fromYear', fromYearMenu.value);
            localStorage.setItem('toYear', toYearMenu.value);
        }
        
        goSearch();
    }
};

function goSearch() {
    document.location.replace("../search-result-page/search_result.html");
}

/*
*Event Listeners in genres page
*/
searchButton.addEventListener("click", storeGenreOptions);
extraOptionsCheckbox.addEventListener("click", extraOptions);

for (var i = 0; i < label.length; i++) {
    label[i].addEventListener("click", uncheck);
}

for (var i = 0; i < inputYes.length; i++) {
    inputYes[i].addEventListener("click", disable);
}

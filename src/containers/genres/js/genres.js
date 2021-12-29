var nextBtn = document.querySelector("input.button");
var inputYes = document.querySelectorAll("input.yes");
var inputNo = document.querySelectorAll("input.no");
var label = document.querySelectorAll("label");
var input = document.querySelectorAll("input");

nextBtn.addEventListener("click", storeGenreOptions);

for (var i = 0; i < label.length; i++) {
    label[i].addEventListener("click", uncheck);
}

function uncheck(event) {
    for (var i = 0; i < inputYes.length; i++) {
        if (event.target.className === "yes" && event.target.dataset.index === inputNo[i].dataset.index && inputNo[i].checked === true) {
            inputNo[i].checked = false;
        } else if (event.target.className === "no" && event.target.dataset.index === inputYes[i].dataset.index && inputYes[i].checked === true) {
            inputYes[i].checked = false;
        }
    }
}

function storeGenreOptions(event) {
    event.preventDefault();

    var checked = document.querySelectorAll("input:checked")

    if (checked.length === 0) {
        alert("Please select at least one genre")
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

        goToNextPage();
    }
};

function goToNextPage() {
    document.location.replace("../extra-options/extra-options.html");
}

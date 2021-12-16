var nextBtn = document.querySelector("input.button");

nextBtn.addEventListener("click", storeGenreOptions);

input = document.querySelectorAll("input");

inputYes = document.querySelectorAll("input.yes");
inputNo = document.querySelectorAll("input.no");

console.log(input);
console.log(inputYes);
console.log(inputNo);


var label = document.querySelectorAll("label");

for (var i = 0; i < label.length; i++) {

label[i].addEventListener("click", uncheck);

}

 function uncheck(event) {
    
    console.log(event.target.className);
    console.log(event.target.dataset.index);
    console.log(inputNo[0].checked);
    console.log(event.target.dataset.index === inputNo[0].dataset.index);




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

    var yesGenreArray = [];
    var noGenreArray = [];

    for (var i = 0; i < inputYes.length; i++) {

    if (inputYes[i].checked === true) {
        yesGenreArray.push(inputYes[i].dataset.index);
    };

};

    for (var i = 0; i < inputNo.length; i++)  {
    
    if (inputNo[i].checked === true) {
        noGenreArray.push(inputNo[i].dataset.index);
    };

};
    

localStorage.setItem("yesGenres", JSON.stringify(yesGenreArray));
localStorage.setItem("noGenres", JSON.stringify(noGenreArray));

goToNextPage();

};

function goToNextPage() {

    document.location.replace("../extra-options/extra-options.html");

}

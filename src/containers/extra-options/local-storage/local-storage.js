< script >
    function outputKeyword() {
        var keywordInput = document.getElementById("input-keyword");
        var selectInput = document.getElementById("input-select");

        console.log(selectInput.options[selectInput.selectedIndex].value);
        console.log(keywordInput.value);

        window.localStorage.setItem(selectInput.options[selectInput.selectedIndex].value, keywordInput.value);
        console.log(window.localStorage.getItem(selectInput.options[selectInput.selectedIndex].value));
    } < /script>
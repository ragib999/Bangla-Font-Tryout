const btn = document.getElementById("change");

btn.addEventListener("click", function () {
    const textArea = document.getElementById("font-display");
    const prevTextVal = textArea.value;
    const boldValue = document.getElementById("boldness").value;
    const chosenFont = document.getElementById("font-name").value;

    textArea.style.fontFamily = `${chosenFont}`;

    if (boldValue) {
        textArea.style.fontWeight = boldValue;
    } else {
        textArea.style.fontWeight = 400;
    }

    textArea.value = prevTextVal;
});

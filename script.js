function getNumberFact() {
    const number = document.getElementById("numberInput").value;
    const factDisplay = document.getElementById("fact");

    if (number === "") {
        factDisplay.innerText = "Please enter a number!";
        return;
    }

    fetch(`https://numbersapi.com/${number}?json`)
        .then(response => response.json())
        .then(data => {
            factDisplay.innerText = data.text;
        })
        .catch(error => {
            factDisplay.innerText = "Error fetching data. Try again later!";
            console.error("Error:", error);
        });
}

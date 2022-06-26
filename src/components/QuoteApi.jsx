import React from "react";


const QuoteApi = () => {
    function getRandomQuote() {
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById("quote").innerHTML = data.content;
            });
    }
    return (getRandomQuote());
}

export default QuoteApi;



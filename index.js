const Quote = document.getElementById("Quote");
const author = document.getElementById("author");
const generate = document.getElementById("btn");

const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '87589622dfmshc9b692c5aefefd4p158fe2jsn3795856c7886',
        'x-rapidapi-host': 'quotes15.p.rapidapi.com'
    }
};

generate.addEventListener("click", async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        Quote.innerText = result.content;
        author.innerText = result.originator.name;
    } catch (error) {
        Quote.innerText = "404 Not Found";
        author.innerText = "";
    }
})

// some apis without cors
/*
1) https://supernatural-api.onrender.com/quotes/random
2) https://api.breakingbadquotes.xyz/v1/quotes
3) https://api.gameofthronesquotes.xyz/v1/random
4) https://ron-swanson-quotes.herokuapp.com/v2/quotes
5) https://southparkquotes.onrender.com/v1/quotes
6) https://gribstream.com/api/v2/rap/history
7) https://quotes15.p.rapidapi.com/quotes/random/?language_code=en
*/
const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")


const apikey = "Ln8v0metxOfuYL7DoK9Z9g==J0st5imiydBouFtj";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key":apikey,
    }
}
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'




async function getJoke(){
    const response = await fetch (apiURL, options)
    const data = await response.json()

    jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke)

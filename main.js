
let key = "d8b20fd81e2c109320e4c5cbc8637888"
let city = "Bolgatanga"
let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

//fetch method that gets all the data from the api

/*
this code was written by jonas wewovi
at nil 
26th july, 2022
6:08
dflksjdkf;dsd
*/

fetch(api)
//a promise that takes the data and converts it to a json format
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        let city = document.getElementById("city-name")
        city.innerHTML = data.name
        var country = document.getElementById('country')
        country.innerHTML = data.sys.country
        var temp = document.getElementById('temperature')
        temp.innerHTML = data.main.temp
        var feels_like = document.getElementById('feels')
        feels_like.innerHTML = data.weather[0].description
    })
    .catch((error)=>console.log(error))
let apiKey = "7ef3c7c6b1733ffb97e2b2b2f8713d96";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let SearchBox = document.querySelector(".search input");
let SearchBut = document.querySelector(".search button");
let WeatherIcon = document.querySelector(".weather-icon")

async function checkWeather (city) {
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    
        if (data.weather[0].main == "Clouds") {
            WeatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            WeatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            WeatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            WeatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            WeatherIcon.src = "images/mist.png";
        }
    
        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

SearchBut.addEventListener("click", () => {
    checkWeather(SearchBox.value);
})


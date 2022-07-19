var currentWeather = document.getElementById("current-weather");
var currentDate = new Date();
var currentDay = currentDate.getDay();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();
var currentSecond = currentDate.getSeconds();
var currentTime = currentHour + ":" + currentMinute + ":" + currentSecond;
var currentDate = currentDay + " " + currentMonth + " " + currentYear + " " + currentTime;
currentWeather.innerHTML = currentDate;

function getWeather() {
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=e5e1c5891b2486f8654def9bede75978';
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        var weather = data.current_observation.weather;
        var temp = data.current_observation.temp_f;
        var wind = data.current_observation.wind_mph;
        var humidity = data.current_observation.relative_humidity;
        var weatherDiv = document.getElementById("weather");
        var weatherText = document.createElement("p");
        weatherText.innerHTML = "Weather: " + weather + "<br>Temperature: " + temp + "&deg;F<br>Wind: " + wind + " mph<br>Humidity: " + humidity + "<br>Feels Like: " + feelsLike + "&deg;F<br>Precipitation: " + precip + " in";
        weatherDiv.appendChild(weatherText);
        }      
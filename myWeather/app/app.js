var apiKey = "e60a44a8c2884f1a8fc194707201409";
var baseURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
var forcastURL = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=`;
var endForcastURL = `&days=3`;

function getData(fullURL) {
  $.get(fullURL, function(data) {
    console.log(data);
    let imgURL = data.current.condition.icon;
    $(".content").html(`<img src="${imgURL}">
    <h2> Location Information Reguarding <h3 style="color: #001f3f;">${data.location.name}, ${data.location.region}</h3>
     </h2>
    
    <p> Country: ${data.location.country} </p>
    <p> Current Time: ${data.location.localtime} </p>
    <strong><h2> Weather Information </h2></strong>
    <p> Current Temperature: <h1 style="color: red;"> ${data.current.temp_f} &#x2109 </h1></p>
    <p> Current Condition: ${data.current.condition.text} </p>
    <p> Current Humidity: ${data.current.humidity}% </p>
    <p> Feels Like: ${data.current.feelslike_f} &#x2109 </p>
    <p> Wind Speed: ${data.current.gust_mph} MPH</p>
    <p> UV INDEX: ${data.current.uv}</p>`);
  }).catch(function(error) {
    console.log(error);
    console.log("your zip zode is invalid");
  });
}

function getForecastData(fullForecastURL) {
  $.get(fullForecastURL, function(data) {
    let conditions = data.forecast.forecastday[0].day;
    let conditions2 = data.forecast.forecastday[1].day;
    console.log(conditions);
    console.log(data);
    $(".forecast").html(
      `
      <h1> Daily Forecast </h1>
      <p>Forecast Condition: ${data.forecast.forecastday[0].day.condition.text} </p>
      <p> Sunrise: ${data.forecast.forecastday[2].astro.sunrise} </p>
      <p> Sunset: ${data.forecast.forecastday[2].astro.sunset} </p>`
    );
    $(".forecast2").html(
      `<h1> 3 Day Forecast </h1>
      <h2> Tomorrow </h2>
      <p> Tomorrow's Condition: ${data.forecast.forecastday[1].day.condition.text} </p>
      <p> Tomorrow's High: ${data.forecast.forecastday[1].day.maxtemp_f} &#x2109 </p>
      <p> Tomorrow's Low: ${data.forecast.forecastday[1].day.mintemp_f} &#x2109 </p>
      
      <h2> In Two Days </h2> 
      <p> In Two Days Conditions: ${data.forecast.forecastday[2].day.condition.text} </p>
      <p> In Two Days High: ${data.forecast.forecastday[2].day.maxtemp_f} &#x2109 </p>
      <p> In Two Days Low: ${data.forecast.forecastday[2].day.mintemp_f} &#x2109 </p>

      `
    );
    console.log();
  });
}

function initListers() {
  $("#getWeather").click(function() {
    var zip = $("#zipCode").val();
    var fullURL = baseURL + zip;
    var fullForecastURL = forcastURL + zip + endForcastURL;
    getData(fullURL);
    getForecastData(fullForecastURL);
  });
}

$(document).ready(function() {
  initListers();
});

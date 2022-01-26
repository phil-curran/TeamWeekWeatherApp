import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/styles.css";
import WeatherData3, { WeatherData2, WeatherData } from "./weather-service.js";
import CardBuilder from "./CardBuilder.js";

async function makeApiCall(cityData) {
  const response = await WeatherData3.getWeather(cityData);
  let cityLon = response.results[0].geometry.location.lng;
  let cityLat = response.results[0].geometry.location.lat;
  const response1 = await WeatherData.getWeather(cityLat, cityLon);
  const response2 = await WeatherData2.getWeather(cityLat, cityLon);
  getElements(response2, response1);
  console.log(response2, response1);
}

function getElements(response2, response) {
  if ((response2, response)) {
    CardBuilder.buildCard(response2, response);
  } else {
    console.log("Error");
  }
}

// UI Logic

$(document).ready(function () {
  $("#checkWeatherButton").click(function () {
    let cityData = $("#cityInput").val();
    $("#showWeather").html("");
    makeApiCall(cityData);
  });
});

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/styles.css";
import WeatherData, { WeatherData2 } from "./weather-service.js";
import CardBuilder from "./CardBuilder.js";

async function makeApiCall(city) {
  const response2 = await WeatherData2.getWeather(city);
  const response = await WeatherData.getWeather(city);
  getElements(response2, response);
  console.log(response2);
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
    let city = $("#cityInput").val();
    $("#showWeather").html("");
    makeApiCall(city);
  });
});

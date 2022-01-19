import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import WeatherData, { WeatherData2 } from "./weather-service.js";
import CardBuilder from "./CardBuilder.js";

async function makeApiCall(city) {
  const response = await WeatherData.getWeather(city);
  const response2 = await WeatherData2.getWeather(city);
  getElements(response);
  console.log(response2);
}

function getElements(response) {
  if (response) {
    CardBuilder.buildCard(response);
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

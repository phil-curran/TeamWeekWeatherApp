import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import WeatherData from "./weather-service.js";
import CardBuilder from "./CardBuilder.js";

async function makeApiCall(city) {
  const response = await WeatherData.getWeather(city);
  getElements(response);
}

function getElements(response) {
  if (response) {
    // console.log(response);
    // response.list.forEach((element) => {
    //   $("#showWeather").append(element.main.temp);
    //   console.log(element.main.temp);
    // });
    // for (let i = 0; i <= 7; i++) {
    // }
    // $("#showWeather").append(" " + response.list[5].main.temp);
    // let weatherData = JSON.stringify(response.list[0].main.temp);
    // $("#showWeather").text(weatherData);
    // console.log(weatherData);
    let temp = CardBuilder.buildCard(response);
    $("#showWeather").append(temp);
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

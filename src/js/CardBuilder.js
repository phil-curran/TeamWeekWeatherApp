import moment from "moment";
import IconPicker from "./IconPicker";

export default class CardBuilder {
  static async buildCard(dayData, weekData) {
    let outerContainer = document.getElementById("showWeather");
    let newDayDiv = document.createElement("div");
    newDayDiv.className = "card";
    newDayDiv.setAttribute("data-bs-toggle", "modal");
    newDayDiv.setAttribute("data-bs-target", "#today");
    let dayDate = moment(new Date()).format("ddd, MMM Do");
    let icon = IconPicker.findIcon(dayData.weather[0].description);
    newDayDiv.innerHTML += `<p class="text-center"><strong>${dayDate}</strong></p>`;
    newDayDiv.innerHTML += `<img class="weatherIcon img-fluid" type="image/svg+xml" src="../../assets/icons/${icon}" />`;
    newDayDiv.innerHTML += `<p class ="tempStyle">${Math.ceil(
      dayData.main.temp
    )}°</p>`;
    newDayDiv.innerHTML += `<p>Low Temp: ${dayData.main.temp_min}°</p>`;
    newDayDiv.innerHTML += `<p>${dayData.weather[0].description}</p>`;
    let modal = document.createElement("div");
    modal.setAttribute("id", "today");
    modal.classList.add("modal", "fade");
    modal.setAttribute("role", "dialog");
    modal.innerHTML =
      '<div class="modal-dialog" role="document">' +
      '<div class="modal-content">' +
      '<div class="modal-header">' +
      '<h5 class="modal-title" id="myModal">' +
      "Weather Details" +
      "</h5>" +
      '<button type="button" class="btn-close" data-bs-dismiss="modal"></button>' +
      "</div>" +
      '<div class="modal-body" id="modal-body">' +
      '<div class="modalClouds">' +
      `<img class="weatherIcon img-fluid" type="image/svg+xml" src="../../assets/icons/overcast.svg" />` +
      "<p>" +
      "Cloud Coverage: " +
      `${dayData.clouds.all}%` +
      "</p>" +
      "</div>" +
      '<div class="modalWind">' +
      `<img class="weatherIcon img-fluid" type="image/svg+xml" src="../../assets/icons/wind.svg" />` +
      "<p>" +
      "Wind Speed: " +
      `${dayData.wind.speed} mph` +
      "</p>" +
      "</div>" +
      '<div class="modalHumidity">' +
      `<img class="weatherIcon img-fluid" type="image/svg+xml" src="../../assets/icons/humidity.svg" />` +
      "<p>" +
      "Humidity " +
      `${dayData.main.humidity}%` +
      "</p>" +
      "</div>" +
      "</div>" +
      '<div class="modal-footer">' +
      '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">' +
      "Close" +
      "</button>" +
      "</div>" +
      "</div>" +
      "</div>";
    outerContainer.append(newDayDiv, modal);

    for (let i = 0; i < weekData.list.length; i++) {
      const time = "12:00:00";
      if (weekData.list[i].dt_txt.includes(time)) {
        let date = moment(new Date(weekData.list[i].dt_txt)).format(
          "ddd, MMM Do"
        );
        let newDiv = document.createElement("div");
        newDiv.className = "card";
        let modal = document.createElement("div");
        newDiv.setAttribute("data-bs-toggle", "modal");
        newDiv.setAttribute("data-bs-target", `#myModal${i}`);
        modal.setAttribute("id", `myModal${i}`);
        modal.setAttribute("class", "modal-style");
        modal.classList.add("modal", "fade");
        modal.setAttribute("role", "dialog");

        modal.innerHTML =
          '<div class="modal-dialog" role="document">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
          '<h5 class="modal-title" id="myModal">' +
          "Weather Details" +
          "</h5>" +
          '<button type="button" class="btn-close" data-bs-dismiss="modal"></button>' +
          "</div>" +
          '<div class="modal-body" id="modal-body">' +
          '<div class="modalClouds">' +
          `<img class="weatherIcon img-fluid" type="image/svg+xml" src="../../assets/icons/overcast.svg" />` +
          "<p>" +
          "Cloud Coverage: " +
          `${weekData.list[i].clouds.all}%` +
          "</p>" +
          "</div>" +
          '<div class="modalWind">' +
          `<img class="weatherIcon img-fluid" type="image/svg+xml" src="../../assets/icons/wind.svg" />` +
          "<p>" +
          "Wind Speed: " +
          `${weekData.list[i].wind.speed} mph` +
          "</p>" +
          "</div>" +
          '<div class="modalHumidity">' +
          `<img class="weatherIcon img-fluid" type="image/svg+xml" src="../../assets/icons/humidity.svg" />` +
          "<p>" +
          "Humidity: " +
          `${weekData.list[i].main.humidity}%` +
          "</p>" +
          "</div>" +
          "</div>" +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">' +
          "Close" +
          "</button>" +
          "</div>" +
          "</div>" +
          "</div>";
        newDiv.innerHTML += `<p class="text-center"><strong>${date}</strong></p>`;
        let icon = IconPicker.findIcon(weekData.list[i].weather[0].description);
        console.log(icon);
        newDiv.innerHTML += `<img class="weatherIcon img-fluid" type="image/svg+xml" src="../../assets/icons/${icon}" />`;
        newDiv.innerHTML += `<p class ="tempStyle"> ${Math.ceil(
          weekData.list[i].main.temp_max
        )}°</p>`;
        newDiv.innerHTML += `<p>Low Temp: ${weekData.list[i].main.temp_min}°</p>`;
        newDiv.innerHTML += `<p>${weekData.list[i].weather[0].description}</p>`;

        outerContainer.append(newDiv, modal);
      }
    }
  }
}

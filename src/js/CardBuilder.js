import moment from "moment";
// import IconPicker from "./IconPicker";

export default class CardBuilder {
  static async buildCard(dayData, weekData) {
    let outerContainer = document.getElementById("showWeather");
    let newDayDiv = document.createElement("div");
    newDayDiv.className = "card";
    newDayDiv.setAttribute("data-bs-toggle", "modal");
    newDayDiv.setAttribute("data-bs-target", "#today");
    let dayDate = moment(new Date()).format("dddd, MMM Do");
    let imageDayID = getImageId(dayData.weather[0].id);
    // console.log(imageDayID);
    // let icon = IconPicker.findIcon(dayData.weather[0].description);
    // newDayDiv.innerHTML += `<img class="weatherIcon img-fluid" src="./assets/icons/${icon}" />`;
    newDayDiv.innerHTML += `<p class="text-center"><strong>${dayDate}</strong></p>`;
    newDayDiv.innerHTML += `<img class="weatherIcon" src='http://openweathermap.org/img/wn/${imageDayID}d@2x.png' />`;
    newDayDiv.innerHTML += `<p>Current Temp: ${dayData.main.temp}</p>`;
    newDayDiv.innerHTML += `<p>High Temp: ${dayData.main.temp_max}</p>`;
    newDayDiv.innerHTML += `<p>Low Temp: ${dayData.main.temp_min}</p>`;
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
      "<p>" +
      "Cloud Coverage: " +
      `${dayData.clouds.all}%` +
      "</p>" +
      "<p>" +
      "Description: " +
      `${dayData.weather[0].description}` +
      "</p>" +
      "<p>" +
      "Humidity " +
      `${dayData.main.humidity}%` +
      "</p>" +
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
          "dddd, MMM Do"
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
          "<p>" +
          "Cloud Coverage: " +
          `${weekData.list[i].clouds.all}%` +
          "</p>" +
          "<p>" +
          "Description: " +
          `${weekData.list[i].weather[0].description}` +
          "</p>" +
          "<p>" +
          "Precipitation: " +
          `${weekData.list[i].pop}%` +
          "</p>" +
          "</div>" +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">' +
          "Close" +
          "</button>" +
          "</div>" +
          "</div>" +
          "</div>";
        let imageID = getImageId(weekData.list[i].weather[0].id);
        newDiv.innerHTML += `<p class="text-center"><strong>${date}</strong></p>`;
        // let icon = IconPicker.findIcon(weekData.list[i].weather[0].description);
        // console.log("CardBuilder: " + icon);
        // newDiv.innerHTML += `<img class="weatherIcon img-fluid" src="../assets/${icon}" />`;
        newDiv.innerHTML += `<img class="weatherIcon" src='http://openweathermap.org/img/wn/${imageID}d@2x.png' />`;
        newDiv.innerHTML += `<p>High Temp: ${weekData.list[i].main.temp_max}</p>`;
        newDiv.innerHTML += `<p>Low Temp: ${weekData.list[i].main.temp_min}</p>`;
        newDiv.innerHTML += `<p>${weekData.list[i].weather[0].main}</p>`;

        outerContainer.append(newDiv, modal);
      }
    }
  }
}

function getImageId(id) {
  if (id >= 200 && id <= 232) return "11";
  else if (id >= 300 && id <= 321) return "09";
  else if (id >= 500 && id <= 504) return "10";
  else if (id >= 511 && id <= 531) return "09";
  else if (id >= 600 && id <= 622) return "13";
  else if (id >= 701 && id <= 781) return "50";
  else if (id === 800) return "01";
  else if (id === 801) return "02";
  else if (id === 803 || id === 804) return "04";
  else return "01";
}

import moment from "moment";
import IconPicker from "./IconPicker";

export default class CardBuilder {
  static async buildCard(dayData, weekData) {
    let outerContainer = document.getElementById("showWeather");
    let newDayDiv = document.createElement("div");
    newDayDiv.className = "card";
    let dayDate = moment(new Date()).format("dddd, MMM Do");
    let icon = IconPicker.findIcon(dayData.weather[0].description);
    newDayDiv.innerHTML += `<p class="text-center"><strong>${dayDate}</strong></p>`;
    newDayDiv.innerHTML += `<img class="weatherIcon img-fluid" src="./assets/icons/${icon}" />`;
    newDayDiv.innerHTML += `<p>Current Temp: ${dayData.main.temp}</p>`;
    newDayDiv.innerHTML += `<p>High Temp: ${dayData.main.temp_max}</p>`;
    newDayDiv.innerHTML += `<p>Low Temp: ${dayData.main.temp_min}</p>`;
    outerContainer.append(newDayDiv);

    for (let i = 0; i < weekData.list.length; i++) {
      const time = "12:00:00";
      if (weekData.list[i].dt_txt.includes(time)) {
        let date = moment(new Date(weekData.list[i].dt_txt)).format(
          "dddd, MMM Do"
        );
        // let newModal = document.getElementsByClassName("modal");
        // newModal.innerHTML += `<p>Precipitation: ${weekData.list[i].pop}%</p>`;

        let newDiv = document.createElement("div");
        newDiv.className = "card";
        newDiv.id = "something dynamic";
        // let icon = IconPicker.findIcon(weekData.list[i].weather[0].description);
        // console.log("CardBuilder: " + icon);
        newDiv.innerHTML += `<p class="text-center"><strong>${date}</strong></p>`;
        newDiv.innerHTML += `<img class="weatherIcon img-fluid" src="../assets/${icon}" />`;
        newDiv.innerHTML += `<p>High Temp: ${weekData.list[i].main.temp_max}</p>`;
        newDiv.innerHTML += `<p>Low Temp: ${weekData.list[i].main.temp_min}</p>`;
        newDiv.innerHTML += `<p>${weekData.list[i].weather[0].main}</p>`;
        newDiv.innerHTML += ` <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#myModal">Launch modal</button>`;

        outerContainer.append(newDiv);
      }
    }
  }
}

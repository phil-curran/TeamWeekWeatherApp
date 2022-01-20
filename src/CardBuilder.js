import moment from "moment";
export default class CardBuilder {
  static async buildCard(dayData, weekData) {
    let outerContainer = document.getElementById("showWeather");

    let newDayDiv = document.createElement("div");
    newDayDiv.className = "card";
    let dayDate = moment(new Date()).format("dddd, MMM Do");
    let imageDayID = getImageId(dayData.weather[0].id);
    console.log(imageDayID);
    newDayDiv.innerHTML += `<p class="text-center"><strong>${dayDate}</strong></p>`;
    newDayDiv.innerHTML += `<img class="weatherIcon img-fluid" src='http://openweathermap.org/img/wn/${imageDayID}d@2x.png' />`;
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
        let imageID = getImageId(weekData.list[i].weather[0].id);
        newDiv.innerHTML += `<p class="text-center"><strong>${date}</strong></p>`;
        newDiv.innerHTML += `<img class="weatherIcon img-fluid" src='http://openweathermap.org/img/wn/${imageID}d@2x.png' />`;
        newDiv.innerHTML += `<p>High Temp: ${weekData.list[i].main.temp_max}</p>`;
        newDiv.innerHTML += `<p>Low Temp: ${weekData.list[i].main.temp_min}</p>`;
        newDiv.innerHTML += `<p>${weekData.list[i].weather[0].main}</p>`;
        newDiv.innerHTML += ` <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#myModal">Launch modal</button>`;

        // newDiv.innerHTML += `<p>Description: ${weekData.list[i].weather[0].description}</p>`;
        // newDiv.innerHTML += `<p>Cloud Cover: ${weekData.list[i].clouds.all}%</p>`;

        outerContainer.append(newDiv);
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

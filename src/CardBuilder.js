import moment from "moment";
export default class CardBuilder {
  static async buildCard(dayData) {
    console.log(dayData);
    console.log("Moment call: " + moment().format());

    let outerContainer = document.getElementById("showWeather");

    // let temp = new Date(dayData.list[0].dt_txt);

    for (let i = 0; i < dayData.list.length; i++) {
      const time = "12:00:00";
      if (dayData.list[i].dt_txt.includes(time)) {
        let temp = moment(new Date(dayData.list[i].dt_txt)).format(
          "dddd, MMM Do"
        );
        console.log(dayData.list[i]);
        let newDiv = document.createElement("div");
        newDiv.className = "card";
        let imageID = getImageId(dayData.list[i].weather[0].id);
        console.log(imageID);
        newDiv.innerHTML += `<p class="text-center"><strong>${temp}</strong></p>`;
        newDiv.innerHTML += `<img class="weatherIcon img-fluid" src='http://openweathermap.org/img/wn/${imageID}d@2x.png' />`;
        newDiv.innerHTML += `<p>Current Temp: ${dayData.list[i].main.temp}</p>`;
        newDiv.innerHTML += `<p>High Temp: ${dayData.list[i].main.temp_max}</p>`;
        newDiv.innerHTML += `<p>Low Temp: ${dayData.list[i].main.temp_min}</p>`;
        newDiv.innerHTML += `<p>Current Weather: ${dayData.list[i].weather[0].main}</p>`;
        newDiv.innerHTML += `<p>Description: ${dayData.list[i].weather[0].description}</p>`;
        newDiv.innerHTML += `<p>Cloud Cover: ${dayData.list[i].clouds.all}%</p>`;
        newDiv.innerHTML += `<p>Precipitation: ${dayData.list[i].pop}%</p>`;

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

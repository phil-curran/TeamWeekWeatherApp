export default class CardBuilder {
  static async buildCard(dayData) {
    console.log(dayData);
    let outerContainer = document.getElementById("showWeather");

    let temp = new Date(dayData.list[0].dt_txt);

    let newDiv = document.createElement("div");
    let newDiv1 = document.createElement("div");
    let newDiv2 = document.createElement("div");
    let newDiv3 = document.createElement("div");
    let newDiv4 = document.createElement("div");

    newDiv.className = "card";
    newDiv1.className = "card";
    newDiv1.innerHTML += `<p>Date: ${temp}</p>`;
    newDiv2.className = "card";
    newDiv2.innerHTML += `<p>Date: ${temp}</p>`;
    newDiv3.className = "card";
    newDiv3.innerHTML += `<p>Date: ${temp}</p>`;
    newDiv4.className = "card";
    newDiv4.innerHTML += `<p>Date: ${temp}</p>`;

    let imageID = getImageId(dayData.list[0].weather[0].id);
    console.log(imageID);
    newDiv.innerHTML += `<img class="weatherIcon img-fluid" src='http://openweathermap.org/img/wn/${imageID}d@2x.png' />`;
    newDiv.innerHTML += `<p>Date: ${temp}</p>`;
    newDiv.innerHTML += `<p>Current Temp: ${dayData.list[0].main.temp}</p>`;
    newDiv.innerHTML += `<p>High Temp: ${dayData.list[0].main.temp_max}</p>`;
    newDiv.innerHTML += `<p>Low Temp: ${dayData.list[0].main.temp_min}</p>`;
    newDiv.innerHTML += `<p>Current Weather: ${dayData.list[0].weather[0].main}</p>`;
    newDiv.innerHTML += `<p>Description: ${dayData.list[0].weather[0].description}</p>`;
    newDiv.innerHTML += `<p>Cloud Cover: ${dayData.list[0].clouds.all}%</p>`;
    newDiv.innerHTML += `<p>Precipitation: ${dayData.list[0].pop}%</p>`;

    outerContainer.append(newDiv, newDiv2, newDiv3, newDiv4);
    outerContainer.append(newDiv1);
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

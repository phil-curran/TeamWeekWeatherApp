export default class IconPicker {
  static findIcon(keyword) {
    let icon = "";
    switch (keyword) {
      case "thunderstorm with light rain":
        icon = "thunderstorms-night-rain.svg";
        break;
      case "thunderstorm with rain":
        icon = "thunderstorms-night-rain.svg";
        break;
      case "thunderstorm with heavy rain":
        icon = "thunderstorms-night-extreme-rain.svg";
        break;
      case "light thunderstorm":
        icon = "thunderstorms-night.svg";
        break;
      case "thunderstorm":
        icon = "thunderstorms-night.svg";
        break;
      case "heavy thunderstorm":
        icon = "thunderstorms-night-extreme.svg";
        break;
      case "ragged thunderstorm":
        icon = "thunderstorms.svg";
        break;
      case "thunderstorm with light drizzle":
        icon = "thunderstorms-night-rain.svg";
        break;
      case "thunderstorm with drizzle":
        icon = "thunderstorms-night-rain.svg";
        break;
      case "thunderstorm with heavy drizzle":
        icon = "thunderstorms-night-rain.svg";
        break;
      case "light intensity drizzle":
        icon = "drizzle.svg";
        break;
      case "drizzle":
        icon = "drizzle.svg";
        break;
      case "heavy intensity drizzle":
        icon = "extreme-drizzle.svg";
        break;
      case "light intensity drizzle rain":
        icon = "drizzle.svg";
        break;
      case "drizzle rain":
        icon = "rain.svg";
        break;
      case "heavy intensity drizzle rain":
        icon = "extreme-drizzle.svg";
        break;
      case "shower rain and drizzle":
        icon = "rain.svg";
        break;
      case "heavy shower rain and drizzle":
        icon = "extreme-drizzle.svg";
        break;
      case "shower drizzle":
        icon = "rain.svg";
        break;
      case "light rain":
        icon = "rain.svg";
        break;
      case "moderate rain":
        icon = "rain.svg";
        break;
      case "heavy intensity rain":
        icon = "extreme-night-rain.svg";
        break;
      case "very heavy rain":
        icon = "extreme-night-rain.svg";
        break;
      case "extreme rain":
        icon = "extreme-night-rain.svg";
        break;
      case "freezing rain":
        icon = "extreme-night-sleet.svg";
        break;
      case "light intensity shower rain":
        icon = "rain.svg";
        break;
      case "shower rain":
        icon = "rain.svg";
        break;
      case "heavy intensity shower rain":
        icon = "extreme-night-rain.svg";
        break;
      case "ragged shower rain":
        icon = "extreme-night-rain.svg";
        break;
      case "light snow":
        icon = "snow.svg";
        break;
      case "Snow":
        icon = "snow.svg";
        break;
      case "Heavy snow":
        icon = "extreme-night-snow.svg";
        break;
      case "Sleet":
        icon = "sleet.svg";
        break;
      case "Light shower sleet":
        icon = "sleet.svg";
        break;
      case "Shower sleet":
        icon = "sleet.svg";
        break;
      case "Light rain and snow":
        icon = "sleet.svg";
        break;
      case "Rain and snow":
        icon = "sleet.svg";
        break;
      case "Light shower snow":
        icon = "sleet.svg";
        break;
      case "Shower snow":
        icon = "sleet.svg";
        break;
      case "Heavy shower snow":
        icon = "extreme-night-sleet.svg";
        break;
      case "mist":
        icon = "mist.svg";
        break;
      case "Smoke":
        icon = "smoke-particles.svg";
        break;
      case "Haze":
        icon = "haze-night.svg";
        break;
      case "sand/ dust whirls":
        icon = "dust-wind.svg";
        break;
      case "fog":
        icon = "fog-night.svg";
        break;
      case "sand":
        icon = "dust-wind.svg";
        break;
      case "dust":
        icon = "dust-night.svg";
        break;
      case "volcanic ash":
        icon = "dust-wind.svg";
        break;
      case "squalls":
        icon = "wind.svg";
        break;
      case "tornado":
        icon = "tornado.svg";
        break;
      case "clear sky":
        icon = "clear-night.svg";
        break;
      case "few clouds: 11-25%":
        icon = "partly-cloudy-night.svg";
        break;
      case "scattered clouds: 25-50%":
        icon = "partly-cloudy-night.svg";
        break;
      case "broken clouds: 51-84%":
        icon = "overcast-night.svg";
        break;
      case "overcast clouds: 85-100%":
        icon = "overcast-night.svg";
        break;
      default:
        icon = "clear-day.svg";
        break;
    }
    return icon;
  }
}

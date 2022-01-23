export default class IconPicker {
  static findIcon(keyword) {
    let icon = "";
    switch (keyword) {
      case "thunderstorm with light rain":
        icon = "../assets/thunderstorms-night-rain.svg";
        break;
      case "thunderstorm with rain":
        icon = "../assets/thunderstorms-night-rain.svg";
        break;
      case "thunderstorm with heavy rain":
        icon = "../assets/thunderstorms-night-extreme-rain.svg";
        break;
      case "light thunderstorm":
        icon = "../assets/thunderstorms-night.svg";
        break;
      case "thunderstorm":
        icon = "../assets/thunderstorms-night.svg";
        break;
      case "heavy thunderstorm":
        icon = "../assets/thunderstorms-night-extreme.svg";
        break;
      case "ragged thunderstorm":
        icon = "../assets/thunderstorms.svg";
        break;
      case "thunderstorm with light drizzle":
        icon = "../assets/thunderstorms-night-rain.svg";
        break;
      case "thunderstorm with drizzle":
        icon = "../assets/thunderstorms-night-rain.svg";
        break;
      case "thunderstorm with heavy drizzle":
        icon = "../assets/thunderstorms-night-rain.svg";
        break;
      case "light intensity drizzle":
        icon = "../assets/drizzle.svg";
        break;
      case "drizzle":
        icon = "../assets/drizzle.svg";
        break;
      case "heavy intensity drizzle":
        icon = "../assets/extreme-drizzle.svg";
        break;
      case "light intensity drizzle rain":
        icon = "../assets/drizzle.svg";
        break;
      case "drizzle rain":
        icon = "../assets/rain.svg";
        break;
      case "heavy intensity drizzle rain":
        icon = "../assets/extreme-drizzle.svg";
        break;
      case "shower rain and drizzle":
        icon = "../assets/rain.svg";
        break;
      case "heavy shower rain and drizzle":
        icon = "../assets/extreme-drizzle.svg";
        break;
      case "shower drizzle":
        icon = "../assets/rain.svg";
        break;
      case "light rain":
        icon = "../assets/rain.svg";
        break;
      case "moderate rain":
        icon = "../assets/rain.svg";
        break;
      case "heavy intensity rain":
        icon = "../assets/extreme-night-rain.svg";
        break;
      case "very heavy rain":
        icon = "../assets/extreme-night-rain.svg";
        break;
      case "extreme rain":
        icon = "../assets/extreme-night-rain.svg";
        break;
      case "freezing rain":
        icon = "../assets/extreme-night-sleet.svg";
        break;
      case "light intensity shower rain":
        icon = "../assets/rain.svg";
        break;
      case "shower rain":
        icon = "../assets/rain.svg";
        break;
      case "heavy intensity shower rain":
        icon = "../assets/extreme-night-rain.svg";
        break;
      case "ragged shower rain":
        icon = "../assets/extreme-night-rain.svg";
        break;
      case "light snow":
        icon = "../assets/snow.svg";
        break;
      case "Snow":
        icon = "../assets/snow.svg";
        break;
      case "Heavy snow":
        icon = "../assets/extreme-night-snow.svg";
        break;
      case "Sleet":
        icon = "../assets/sleet.svg";
        break;
      case "Light shower sleet":
        icon = "../assets/sleet.svg";
        break;
      case "Shower sleet":
        icon = "../assets/sleet.svg";
        break;
      case "Light rain and snow":
        icon = "../assets/sleet.svg";
        break;
      case "Rain and snow":
        icon = "../assets/sleet.svg";
        break;
      case "Light shower snow":
        icon = "../assets/sleet.svg";
        break;
      case "Shower snow":
        icon = "../assets/sleet.svg";
        break;
      case "Heavy shower snow":
        icon = "../assets/extreme-night-sleet.svg";
        break;
      case "mist":
        icon = "../assets/mist.svg";
        break;
      case "Smoke":
        icon = "../assets/smoke-particles.svg";
        break;
      case "Haze":
        icon = "../assets/haze-night.svg";
        break;
      case "sand/ dust whirls":
        icon = "../assets/dust-wind.svg";
        break;
      case "fog":
        icon = "../assets/fog-night.svg";
        break;
      case "sand":
        icon = "../assets/dust-wind.svg";
        break;
      case "dust":
        icon = "../assets/dust-night.svg";
        break;
      case "volcanic ash":
        icon = "../assets/dust-wind.svg";
        break;
      case "squalls":
        icon = "../assets/wind.svg";
        break;
      case "tornado":
        icon = "../assets/tornado.svg";
        break;
      case "clear sky":
        icon = "../assets/clear-night.svg";
        break;
      case "few clouds: 11-25%":
        icon = "../assets/partly-cloudy-night.svg";
        break;
      case "scattered clouds: 25-50%":
        icon = "../assets/partly-cloudy-night.svg";
        break;
      case "broken clouds: 51-84%":
        icon = "../assets/overcast-night.svg";
        break;
      case "overcast clouds: 85-100%":
        icon = "../assets/overcast-night.svg";
        break;
      default:
        icon = "../assets/clear-day.svg";
        break;
    }
    return icon;
  }
}

export default class WeatherData3 {
  static async getWeather(cityData) {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${cityData}&key=AIzaSyARVoVKSYKp7tpdrjpshunZ9ctgijv3bmw`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}

export class WeatherData {
  static async getWeather(lat, lng) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=imperial&lang=en&appid=${process.env.API_KEY}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}

export class WeatherData2 {
  static async getWeather(lat, lng) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&lang=en&appid=${process.env.API_KEY}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}

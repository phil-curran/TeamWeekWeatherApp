export default class WeatherData {
  static async getWeather(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&lang=en&appid=${process.env.API_KEY}`
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
  static async getWeather(city) {
    try {
      const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&lang=en&appid=${process.env.API_KEY}`
      );
      if (!response2.ok) {
        throw Error(response2.statusText);
      }
      return response2.json();
    } catch (error) {
      return error.message;
    }
  }
}

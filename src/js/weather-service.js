export default class WeatherData {
  static async getWeather(city, state, country) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},${country}&units=imperial&lang=en&appid=c5a484c5c3125843e3a5fc1dbfe66e1b`
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
  static async getWeather(city, state, country) {
    try {
      const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&lang=en&appid=c5a484c5c3125843e3a5fc1dbfe66e1b`
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

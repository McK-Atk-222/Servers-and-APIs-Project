import dotenv from 'dotenv';
dotenv.config();

class WeatherService {
  // Defines the baseURL, API key, and city name properties
baseURL?: string;
apiKey?: string;
cityName?: string;

  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';
    this.cityName =  '';
  }
 
  async getWeatherForCity(city: string) {

    const geoCodeResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}&units=imperial`);
    const geoCodeData = await geoCodeResponse.json();

    const lat = geoCodeData[0].lat;
    const lon = geoCodeData[0].lon;

    const currentWeatherQuery = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=imperial`

    const currentWeatherResponse = await fetch(currentWeatherQuery);
    const currentWeatherData = await currentWeatherResponse.json();

    // parse the data
    // city, date, icon, iconDescription, tempF, windSpeed, humidity 
    const parsedCurrentWeather = {
      city: currentWeatherData.name,
      date: new Date().toDateString(),
      icon: currentWeatherData.weather[0].icon,
      iconDescription: currentWeatherData.weather[0].description,
      tempF: currentWeatherData.main.temp,
      windSpeed: currentWeatherData.wind.speed,
      humidity: currentWeatherData.main.humidity,
    }

    // five day forecast
    const forecastQuery = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=imperial`

    const forecastResponse = await fetch(forecastQuery);
    const forecastData = await forecastResponse.json();

    const filteredForecastData = forecastData.list.filter((data: any) => {
      return data.dt_txt.includes("12:00:00")
    })

    //parse the data
    const parsedForecastData = filteredForecastData.map((data: any) => {
      return {
          city: city,
          date: data.dt_txt,
          icon: data.weather[0].icon,
          iconDescription: data.weather[0].description,
          tempF: data.main.temp,
          windSpeed: data.wind.speed,
          humidity: data.main.humidity,
      }
    })

    return [parsedCurrentWeather, ...parsedForecastData]
  }
}

export default new WeatherService();
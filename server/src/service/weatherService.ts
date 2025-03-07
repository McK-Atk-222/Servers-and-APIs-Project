import dotenv from 'dotenv';
dotenv.config();

// The WeatherService class
class WeatherService {
  // Defines the baseURL and API key properties
baseURL?: string;
apiKey?: string;
  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';
  }
  
  async getWeatherForCity(city: string) {

    const geoCodeQuery = `${this.baseURL}/geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}&units=imperial`;
    const geoCodeResponse = await fetch(geoCodeQuery);
    const geoCodeData = await geoCodeResponse.json();

    const lat = geoCodeData[0].lat;
    const lon = geoCodeData[0].lon;

    const currentWeatherQuery = `${this.baseURL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=imperial`;
    const currentWeatherResponse = await fetch(currentWeatherQuery);
    const currentWeatherData = await currentWeatherResponse.json();

    //console.log(currentWeatherData);

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
    const forecastQuery = `${this.baseURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=imperial`;
    const forecastResponse = await fetch(forecastQuery);
    const forecastData = await forecastResponse.json();

    // console.log(forecastData);

    const filteredForecastData = forecastData.list.filter((data: any) => {
      return data.dt_txt.includes("12:00:00")
    })

    // console.log(filteredForecastData)

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

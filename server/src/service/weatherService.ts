import dotenv from 'dotenv';
dotenv.config();

// Defines an interface for the Coordinates object
interface Coordinates {
    lat: number;
    lon: number;
}

// Defines a class for the Weather object
class Weather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
  date: string;

  constructor(temperature: number, humidity: number, windSpeed: number, description: string, date: string, icon:string ) {
      this.temperature = temperature;
      this.humidity = humidity;
      this.windSpeed = windSpeed;
      this.description = description;
      this.icon = icon;
      this.date = date;
  }
}

// The WeatherService class
class WeatherService {
  // Defines the baseURL, API key, and city name properties
baseURL?: string;
apiKey?: string;
cityName?: string;
  constructor(cityName: string) {
    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';
    this.cityName = cityName || '';
  }

  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {

  }

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {

  }
  
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {

  }
 
  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {

  }
  
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {

  }
  
  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {

  }
  
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {

  }
  
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {

  }
  
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {

  }
}

export default new WeatherService();














































//   // TODO: Create fetchLocationData method
//   private async fetchLocationData(query: string) {
//     try {
//       const response = await fetch(this.baseURL);
//       if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       return data; // Return the weather data
//   } catch (error) {
//       console.error('Error fetching location data:', error);
//       throw error; // Rethrow the error for further handling if necessary
//   }
//   }


//   // TODO: Create destructureLocationData method
//   private destructureLocationData(locationData: Coordinates): Coordinates {
//     if (!data || !data.list || data.list.length === 0) {
//       throw new Error('Invalid data structure');
//   }
//   // Extract relevant data from the API response
//   const locationData = {
//       city: data.city.name,
//       country: data.city.country,
//       current: {
//           temperature: data.list[0].main.temp,
//           humidity: data.list[0].main.humidity,
//           windSpeed: data.list[0].wind.speed,
//           weatherDescription: data.list[0].weather[0].description,
//           icon: data.list[0].weather[0].icon,
//       },
//       forecast: data.list.slice(1, 6).map((forecast: any) => ({
//           date: forecast.dt_txt,
//           temperature: forecast.main.temp,
//           weatherDescription: forecast.weather[0].description,
//           icon: forecast.weather[0].icon,
//       })),
//   };
//   return locationData; // Return the structured data
// }
//   }


//   // TODO: Create buildGeocodeQuery method
// private buildGeocodeQuery(city: string, state?: string, country?: string): string {
//  // Initialize the base query with the city name
//  let query = city;
//  // If a state is provided, append it to the query
//  if (state) {
//      query += `,${state}`;
//  }
//  // If a country is provided, append it to the query
//  if (country) {
//      query += `,${country}`;
//  }
//  return query; // Return the constructed query string
//   }


//   // TODO: Create buildWeatherQuery method
//   private buildWeatherQuery(coordinates: Coordinates): string {
//     const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
//     return `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`;
//   }


//   // TODO: Create fetchAndDestructureLocationData method
//   private async fetchAndDestructureLocationData() {
//     try {
//       // Fetch the weather data from your server-side API
//       const response = await fetch(`/api/weather?city=${city}`);
//       // Check if the response is ok (status in the range 200-299)
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//       // Convert the response to JSON
//       const data = await response.json();
//       // Destructure the relevant data from the response
//       const { cityName, temperature, humidity, windSpeed, description } = data;
//       // Return the destructured data
//       return { cityName, temperature, humidity, windSpeed, description };
//   } catch (error) {
//       console.error('Error fetching location data:', error);
//       return null; // or handle the error as needed
//   }
//   }


//   // TODO: Create fetchWeatherData method
//   private async fetchWeatherData(coordinates: Coordinates) {
//     try {
//       // Build the weather query URL using the provided latitude, longitude, and API key
//       const url = buildWeatherQuery(lat, lon, apiKey);
//       // Fetch the weather data from the OpenWeather API
//       const response = await fetch(url);
//       // Check if the response is ok (status in the range 200-299)
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//       // Convert the response to JSON
//       const data = await response.json();
//       // Return the relevant weather data
//       return data; // or you can return specific properties from data if needed
//   } catch (error) {
//       console.error('Error fetching weather data:', error);
//       return null; // or handle the error as needed
//   }
//   }


//   // TODO: Build parseCurrentWeather method
//   private parseCurrentWeather(response: any) {
//  // Check if the data is valid
//     if (!data || !data.main || !data.weather || !data.wind) {
//         throw new Error("Invalid weather data");
//     }
//     // Extract relevant data
//     const temperature = data.main.temp; // Temperature
//     const humidity = data.main.humidity; // Humidity
//     const windSpeed = data.wind.speed; // Wind Speed
//     const weatherDescription = data.weather[0].description; // Weather description
//     const weatherIcon = data.weather[0].icon; // Weather icon
//     // Return an object with the relevant weather data
//     return {
//         temperature,
//         humidity,
//         windSpeed,
//         weatherDescription,
//         weatherIcon
//     };
//   }


//   // TODO: Complete buildForecastArray method
//   private buildForecastArray(currentWeather: Weather, weatherData: any[]) {
//  // Check if the data is valid
//  if (!data || !data.list) {
//   throw new Error("Invalid forecast data");
// }
// const forecastArray = [];
// const dailyData = {};
// // Loop through the list of forecast data
// data.list.forEach(item => {
//   // Extract the date from the timestamp
//   const date = new Date(item.dt * 1000).toLocaleDateString();
//   // If the date is not already in the dailyData object, initialize it
//   if (!dailyData[date]) {
//       dailyData[date] = {
//           temperature: 0,
//           humidity: 0,
//           weatherDescription: item.weather[0].description,
//           count: 0 // To calculate the average temperature and humidity
//       };
//   }
//   // Accumulate temperature and humidity for averaging
//   dailyData[date].temperature += item.main.temp;
//   dailyData[date].humidity += item.main.humidity;
//   dailyData[date].count += 1; // Increment count for averaging
// });
// // Convert dailyData object into an array
// for (const date in dailyData) {
//   const dayData = dailyData[date];
//   forecastArray.push({
//       date: date,
//       temperature: (dayData.temperature / dayData.count).toFixed(2), // Average temperature
//       humidity: (dayData.humidity / dayData.count).toFixed(2), // Average humidity
//       weatherDescription: dayData.weatherDescription
//   });
// }
// return forecastArray;
//   }
  

//   // TODO: Complete getWeatherForCity method
//   async getWeatherForCity(city: string) {
// try {
//         // Step 1: Fetch coordinates for the city
//         const geoResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
//         const geoData = await geoResponse.json();

//         // Check if the city was found
//         if (geoData.cod !== 200) {
//             throw new Error(`City not found: ${geoData.message}`);
//         }

//         const { lat, lon } = geoData.coord;

//         // Step 2: Fetch weather data using the coordinates
//         const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
//         const weatherData = await weatherResponse.json();

//         // Step 3: Process the data
//         const currentWeather = parseCurrentWeather(geoData);
//         const forecastArray = buildForecastArray(weatherData);

//         // Step 4: Return the processed data
//         return {
//             currentWeather,
//             forecast: forecastArray
//         };
//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//         throw error; // Re-throw the error for further handling
//     }
//   }

// export default new WeatherService();

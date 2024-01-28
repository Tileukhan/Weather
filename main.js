const { OpenWeatherAPI } = require("openweather-api-node");

const apiKey = "0ef54575ccd38ce7641e302427ec9e64"; // Replace with your OpenWeatherMap API key
const locationName = "Nur-Sultan";
const units = "imperial";

let weather = new OpenWeatherAPI({
    key: apiKey,
    locationName: locationName,
    units: units
});

weather.getCurrent().then(data => {
    console.log(`Current temperature in ${locationName} is: ${data.weather.temp.cur}\u00B0F`);
    console.log(`Description: ${data.weather.description}`);
    console.log(`Icon: ${data.weather.icon}`);
    console.log(`Coordinates: Lat ${data.coord.lat}, Lon ${data.coord.lon}`);
    console.log(`Feels-like temperature: ${data.weather.feels_like}\u00B0F`);
    console.log(`Humidity: ${data.weather.humidity}%`);
    console.log(`Pressure: ${data.weather.pressure} hPa`);
    console.log(`Wind Speed: ${data.weather.wind.speed} mph`);
    console.log(`Country Code: ${data.sys.country}`);
    console.log(`Rain Volume (last 3 hours): ${data.weather.rain["3h"]} mm`);
}).catch(error => {
    console.error("Error fetching weather data:", error.message);
});

## Setup

1. Clone the repository: `git clone https://github.com/your-username/weather-app.git`
2. Navigate to the project folder: `cd weather-app`
3. Install dependencies: `npm install`

### API Keys Setup

#### OpenWeatherMap API Key

4. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api).
5. Create a file named `.env` in the project root.
6. Inside the `.env` file, add the following line with your OpenWeatherMap API key:

    ```plaintext
    OPENWEATHERMAP_API_KEY=your-openweathermap-api-key
    ```

#### Google Maps API Key

7. Obtain an API key from the [Google Cloud Console](https://console.cloud.google.com/).
8. Enable the "Google Maps JavaScript API" for your project.
9. Add the following line to your `.env` file with your Google Maps API key:

    ```plaintext
    GOOGLE_MAPS_API_KEY=your-google-maps-api-key
    ```

#### NASA API Key

10. Obtain an API key from [NASA API Key](https://api.nasa.gov/).
11. Add the following line to your `.env` file with your NASA API key:

    ```plaintext
    NASA_API_KEY=your-nasa-api-key
    ```

#### Open Exchange Rates API Key

12. Obtain an API key from [Open Exchange Rates](https://open.er-api.com/).
13. Add the following line to your `.env` file with your Open Exchange Rates API key:

    ```plaintext
    OPEN_EXCHANGE_RATES_API_KEY=your-open-exchange-rates-api-key
    ```

### Run the Server

14. Run the server: `node server.js`
15. Open the application in your browser: [http://localhost:3000](http://localhost:3000)

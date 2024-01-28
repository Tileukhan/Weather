//Weather
function showWeather() {
    const apiKey = "0ef54575ccd38ce7641e302427ec9e64"; 
    const locationInput = document.getElementById("location-input").value;
    const weatherContainer = document.getElementById("weather-container");
    const errorMessage = document.getElementById("error-message");

   
    errorMessage.textContent = "";
    weatherContainer.innerHTML = "";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&units=imperial&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            
            if (data.cod !== 200) {
                errorMessage.textContent = `Error: ${data.message}`;
                return;
            }

            
            const cityDiv = document.createElement("div");
            cityDiv.className = "weather-container";

            
            const temperature = document.createElement("p");
            temperature.textContent = `Current temperature: ${data.main.temp}°F`;

            const description = document.createElement("p");
            description.textContent = `Description: ${data.weather[0].description}`;

            const weatherIcon = document.createElement("img");
            weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            weatherIcon.alt = "Weather Icon";

            const coordinates = document.createElement("p");
            coordinates.textContent = `Coordinates: Lat ${data.coord.lat}, Lon ${data.coord.lon}`;

            const feelsLike = document.createElement("p");
            feelsLike.textContent = `Feels-like temperature: ${data.main.feels_like}°F`;

            const humidity = document.createElement("p");
            humidity.textContent = `Humidity: ${data.main.humidity}%`;

            const pressure = document.createElement("p");
            pressure.textContent = `Pressure: ${data.main.pressure} hPa`;

            const windSpeed = document.createElement("p");
            windSpeed.textContent = `Wind Speed: ${data.wind.speed} mph`;

            const countryCode = document.createElement("p");
            countryCode.textContent = `Country Code: ${data.sys.country}`;

            const rainVolume = document.createElement("p");
            rainVolume.textContent = `Rain Volume: ${data.rain ? data.rain["1h"] : 0} mm`;

            cityDiv.appendChild(temperature);
            cityDiv.appendChild(description);
            cityDiv.appendChild(weatherIcon);
            cityDiv.appendChild(coordinates);
            cityDiv.appendChild(feelsLike);
            cityDiv.appendChild(humidity);
            cityDiv.appendChild(pressure);
            cityDiv.appendChild(windSpeed);
            cityDiv.appendChild(countryCode);
            cityDiv.appendChild(rainVolume);
            weatherContainer.appendChild(cityDiv);
        })
        .catch(error => {
            errorMessage.textContent = `Error fetching weather data: ${error.message}`;
        });
}
//geolocation
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(userLocation);

            var userMarker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'Your Location',
                icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png' 
            });
        }, function() {
            handleLocationError(true, map.getCenter());
        });
    } else {
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 12
    });

    var infoWindow = new google.maps.InfoWindow({
        content: browserHasGeolocation ?
                    'Error: The Geolocation service failed.' :
                    'Error: Your browser doesn\'t support geolocation.'
    });

    var posMarker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Default Location'
    });

    posMarker.addListener('click', function() {
        infoWindow.open(map, posMarker);
    });
}
//NASA
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'U11uGcRZ7EebSzwCDHtWDams4HwCvQO0cNDJZD3O'; 
    const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    
    fetch(apodUrl)
        .then(response => response.json())
        .then(data => {
          
            updateUI(data);
        })
        .catch(error => {
            console.error('Error fetching APOD data:', error);
        });

    function updateUI(apodData) {
        const apodImageElement = document.getElementById('apod-image');
        const apodTitleElement = document.getElementById('apod-title');
        const apodExplanationElement = document.getElementById('apod-explanation');
        apodImageElement.src = apodData.url;
        apodImageElement.alt = apodData.title;

        apodTitleElement.textContent = apodData.title;
        apodExplanationElement.textContent = apodData.explanation;
    }
});
//EXCHANGE
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'U11uGcRZ7EebSzwCDHtWDams4HwCvQO0cNDJZD3O'; // Replace with your Open Exchange Rates API key
    const exchangeRatesContainer = document.getElementById('exchange-rates-container');
    const baseCurrencySelect = document.getElementById('baseCurrency');

   
    fetchExchangeRates();

    function fetchExchangeRates() {
        const baseCurrency = baseCurrencySelect.value;
        const currencies = ['EUR', 'USD', 'KZT', 'RUB'];
        const exchangeRatesUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${apiKey}`;

      
        fetch(exchangeRatesUrl)
            .then(response => response.json())
            .then(data => {
               
                const filteredRates = {};
                currencies.forEach(currency => {
                    if (data.rates[currency]) {
                        filteredRates[currency] = data.rates[currency];
                    }
                });

                updateUI(filteredRates, baseCurrency);
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
            });
    }

    function updateUI(rates, baseCurrency) {
       
        let html = `<h2>Exchange Rates (Base: ${baseCurrency})</h2>`;
        html += '<ul>';
        for (const currency in rates) {
            html += `<li>${currency}: ${rates[currency]}</li>`;
        }
        html += '</ul>';

       
        exchangeRatesContainer.innerHTML = html;
    }

    
    baseCurrencySelect.addEventListener('change', fetchExchangeRates);
});



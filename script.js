// Using WeatherAPI.com
const apiKey = "92e2f056cd5c4f9288360608251308";

document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("City not found");
                return;
            }

            document.getElementById("cityName").textContent = `${data.location.name}, ${data.location.country}`;
            document.getElementById("temperature").textContent = `🌡 ${data.current.temp_c}°C`;
            document.getElementById("description").textContent = data.current.condition.text;
            document.getElementById("weatherIcon").src = `https:${data.current.condition.icon}`;
            document.getElementById("weatherResult").classList.remove("hidden");
        })
        .catch(error => console.error("Error:", error));
}


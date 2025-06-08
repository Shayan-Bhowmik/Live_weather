async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY_HERE";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>${data.main.temp}°C</p>
            <p>${data.weather[0].main} - ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed}m/s</p>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
        `;
    } else {
        document.getElementById("weatherResult").innerHTML = `<p>City not found</p>`;
    }
}

document.getElementById("cityInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        getWeather();
    }
});
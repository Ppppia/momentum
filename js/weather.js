const API_KEY = "fae5c26f0a7d901d636d95f2cf3191ef";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = `${Math.round(data.main.temp)}°C ${
        data.weather[0].main
      } / `;
      const city = document.querySelector("#weather span:last-child");
      city.innerText = ` ${data.name}`;
    });
}

function onGeoError() {
  alert("Unable to locate where you are at☹️");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

// Отримати погоду за допомогою OpenWeatherMap API Опис:
// Використайте публічне API OpenWeatherMap для отримання поточної погоди.
// Зробіть GET - запит за адресою https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY},
// де { city } - назва міста, а { API_KEY } - ваш ключ API OpenWeatherMap.
// Перегляньте отримані дані щодо погоди.

const cityName = document.querySelector("input");
const boxEl = document.querySelector(".box");
const countryVal = document.querySelector(".country");
const capitalVal = document.querySelector(".capital");
const temperatureVal = document.querySelector(".temperature");
// let city = cityName.value;
cityName.addEventListener("change", onInput);

function onInput(e) {
  e.preventDefault();
  const city = e.target.value;
  getWeather(city);
}

function getWeather(city) {
  const API_KEY = "25a7c18f58b647208eb125059242501";
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  return fetch(url)
    .then((data) => data.json())
    .then((data) => markUp(data))
    .catch((error) => "Error");
}

function markUp(data) {
  //   console.log(data.location.country);
  console.log(data);

  countryVal.textContent = data.location.country;
  capitalVal.textContent = data.location.name;
  temperatureVal.textContent = data.current.temp_c;
  //   boxEl.innerHTML = `<h2>country</h2>
  //         <p class="country">${data.location.country}</p>
  //         <h2>capital</h2>
  //         <p class="capital">${data.location.name}</p>
  //         <h2>temperature</h2>
  //         <p class="temperature">${data.current.temp_c}</p>`;
  //   return boxEl;
}

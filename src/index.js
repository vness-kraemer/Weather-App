function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
  console.log(response);
  document.querySelector("#city").textContent = response.data.name;
  document.querySelector("#temperature").textContent = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").textContent =
    response.data.weather[0].main;
  document.querySelector("#humidity").textContent = response.data.main.humidity;
  document.querySelector("#wind").textContent = Math.round(
    response.data.wind.speed
  );
}

document.addEventListener("DOMContentLoaded", function () {
  function search(event) {
    event.preventDefault();
    let apiKey = "8dbc36ba471db85fd697a87348283258";
    let city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }

  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);

  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
});

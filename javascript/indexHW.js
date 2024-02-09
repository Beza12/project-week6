function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#current-city");
  city.innerHTML = searchInput.value;

  let nowDate = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[nowDate.getDay()];
  let hours = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let span = document.querySelector("#detail");
  span.innerHTML = `${day} ${hours}:${minutes}`;
}

let form = document.querySelector("#city-search");
form.addEventListener("submit", citySearch);

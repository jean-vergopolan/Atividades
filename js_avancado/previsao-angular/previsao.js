const apikey = "105b657fca9749045614e835e80e17e3";
const lang = "pt_br";
const units = "metric";

const cardEl = document.querySelector (".card")
const iconEl = document.querySelector(".icon");
const tempEl = document.querySelector("h2");
const feelsLikeEl = document.querySelector(".feels-like span");
const tempMinEl = document.querySelector(".min");
const tempMaxEl = document.querySelector(".max");
const humidityEl = document.querySelector(".humidity span");
const windImgEl = document.querySelector(".wind img");
const windTextEl = document.querySelector(".wind span")
const inputEl = document.querySelector(".input input");
const buttonEl = document.querySelector(".input button");

function callApi() {
    const city = inputEl.value || 'São Paulo';

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}&lang=${lang}`
    )
        .then((response) => response.json())
        .then((response) => {
            const icon = response.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
            iconEl.src = iconUrl;

            tempEl.innerHTML = response.main.temp;
            feelsLikeEl.innerHTML = response.main.feels_like;
            tempMinEl.innerHTML = response.main.temp_min;
            tempMaxEl.innerHTML = response.main.temp_max;
            humidityEl.innerHTML = response.main.humidity;
            windTextEl.innerHTML = response.wind.speed;
            windImgEl.style.transform = `rotate(${response.wind.deg}deg)`;
            cardEl.classList.add("active");
        });
}

buttonEl.addEventListener("click", callApi);

callApi();
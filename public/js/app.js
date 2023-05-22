var fetchWeather = "/weather";

const weatherIcon = document.querySelector(".weatherIcon");
const locationElement = document.querySelector(".location span");
const date = document.querySelector("#date");
const temperature = document.querySelector(".temp");
const temperature_minmaxElement = document.querySelector(".temp_min_max");


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let city = search.value;
    console.log(city);

    locationElement.textContent = "Loading...";
    temperature.textContent = "";
    temperature_minmaxElement.textContent = "";

    const locationApi = `${fetchWeather}?city=${city}`;
    fetch(locationApi).then(response => {
        response.json().then(data => {
            if (data.error) {
                locationElement.textContent = data.error;
                temperature.textContent = "";
                temperature_minmax.textContent = "";
            } else {
                console.log()

                switch(data.description){
                    case "Sunny", "Clear":
                        weatherIcon.innerHTML = "<i class='fas fa-sharp fa-solid fa-sun fa-2xl' style='color: #eccc68;'></i>";
                        break;

                    case "Rainy":
                        weatherIcon.innerHTML = '<i class="fas fa-solid fa-cloud-rain fa-2xl"></i>';
                        break;

                    case "Smoke":
                        weatherIcon.innerHTML = '<i class="fas fa-solid fa-smoke fa-2xl"></i>';
                        break;

                    default:
                        weatherIcon.innerHTML = "<i class='fas fa-cloud fa-2xl' style='color:#f1f2f6;'></i>";
                }

                locationElement.textContent = data.cityName + ', ' + data.countryCode;
                temperature.textContent = data.temperature + '° C';
                temperature_minmaxElement.textContent = 'Min: ' + data.temperature_min + '° C  |  Max: ' + data.temperature_max + '° C';

            }
        })
    })
})


function getDayDateTime() {
    let current = new Date();
    var weekday = ['SUN', 'MON', 'TUS', 'WED', 'THU', 'FRI', 'SAT'];
    var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

    let currentday = current.getDay();
    let currentDate = current.getDate();
    let currentMonth = current.getMonth();

    let hours = current.getHours();
    let mins = current.getMinutes();
    let seco = current.getSeconds();

    let periods = "AM";

    if (hours > 11) {
        periods = "PM";
        if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    let currentTime = `${hours}:${mins}:${seco} ${periods}`;

    // console.log(`${weekday[currentday]} | ${month[currentMonth]} ${currentDate} | ${currentTime}`);

    date.innerHTML = `${weekday[currentday]} | ${month[currentMonth]} ${currentDate} | ${currentTime}`;

    setTimeout(getDayDateTime, 999);
}

getDayDateTime();
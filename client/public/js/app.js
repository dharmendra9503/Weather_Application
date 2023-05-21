const curDate = document.getElementById('date');
let weathercon = document.getElementById("weathercon");

const tempStatus = "{%tempstatus%}";

// condition to check sunny or cloudy
if (tempStatus == "Sunny") {
    weathercon.innerHTML =
        "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
} else if (tempStatus == "Clouds") {
    weathercon.innerHTML =
        "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
} else if (tempStatus == "Rainy") {
    weathercon.innerHTML =
        "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
} else {
    weathercon.innerHTML =
        "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
}

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

    curDate.innerHTML = `${weekday[currentday]} | ${month[currentMonth]} ${currentDate} | ${currentTime}`;

    setTimeout(getDayDateTime, 999);
}

getDayDateTime();
const request = require('request');
const constants = require('../config');

const weatherData = (city, callback) => {
    const urlPart = constants.openWeatherMap.BASE_URL;
    const cityName = encodeURIComponent(city);
    const apikey = constants.openWeatherMap.SECRET_KEY;

    const url = `${urlPart}${cityName}&units=metric&appid=${apikey}`;

    request({url, json:true}, (error, {body})=> {
        // console.log(url);
        if(error) {
            callback("Can't fetch data from open weather map api ", undefined)
        } else if(!body.main || !body.main.temp || !body.name || !body.weather) {
            callback("Unable to find required data, try another location", undefined);
        } else {
            callback(undefined, {
                temperature: body.main.temp,
                main: body.weather[0].main,
                cityName: body.name,
                temperature_min: body.main.temp_min, 
                temperature_max: body.main.temp_max,
                countryCode: body.sys.country
            })
        }
    })
}

module.exports = weatherData;
const express = require('express');
const hbs = require("hbs");
const path = require("path");
const app = express();

const PORT = 3000;

const weatherData = require('../utils/weatherData');

const publicStaticDirPath = path.join(__dirname, '../public');

const viewsPath = path.join(__dirname, '../templetes/views');

const partialsPath = path.join(__dirname, '../templetes/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App'
    })
})

app.get('/weather', (req, res) => {
    const city = req.query.city;

    if(!city) {
        return res.send({
            error: "You must enter city in search text box"
        })
    }

    weatherData(city, (error, {temperature, main, cityName, temperature_min, temperature_max, countryCode} = {}) => {
        if(error) {
            return res.send({
                error
            })
        }
        // console.log(temperature, description, cityName, temperature_min, temperature_max);
        res.send({
            temperature,
            main,
            cityName,
            temperature_min,
            temperature_max,
            countryCode
        })
    })

})


app.get("*", (req, res) => {
    // res.render('404', {
    //     title: "page not found"
    // })
})


app.listen(PORT, () => {
    console.log("Server is up and running on port: ", PORT);
})
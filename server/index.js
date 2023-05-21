const http = require('http');
var request = require('request');
var fs = require('fs');
const path = require('path');

const PORT = 3000;


const viewPath = path.resolve(__dirname, '../client/templetes/views/index.hbs');
const cssPath = path.resolve(__dirname, '../client/public/css/app.css');
const jsPath = path.resolve(__dirname, '../client/public/js/app.js');
console.log(viewPath);

const homeFile = fs.readFileSync(viewPath).toString('utf8');

const replaceVal = (tempVal, orgVal) => {
    let changes = tempVal.replace("{%tempval%}", orgVal.main.temp);
    changes = changes.replace("{%tempmin%}", orgVal.main.temp_min);
    changes = changes.replace("{%tempmax%}", orgVal.main.temp_max);
    changes = changes.replace("{%location%}", orgVal.name);
    changes = changes.replace("{%country%}", orgVal.sys.country);
    changes = changes.replace("{%tempstatus%}", orgVal.weather[0].main);

    return changes;
}

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        request(
            `https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=87701a465e8ce5ae9f78bf6a6f87a35b`
        )
            .on('data', (chunk) => {
                const objData = JSON.parse(chunk);
                const arrData = [objData];
                const realTimeData = arrData.map(val => replaceVal(homeFile, val)).join("");
                // console.log(realTimeData);
                res.write(realTimeData);
            })
            .on('end', (err) => {
                if (err) {
                    return console.log(`Connection closed due to error ${err}`);
                }
                res.end();
            });
    }
    else {
        res.end("File Not Found");
    }
});

server.listen(PORT, 'localhost', () => {
    console.log(`Server is running on port ${PORT}`);
});
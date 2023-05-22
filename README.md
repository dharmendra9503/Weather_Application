# Weather_Application
Dynamic weather application created using HTML, CSS, JavaScript, Node.js.
This application search weather based on city name.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
You will need to have Node.js installed on your machine.
### Installing
_Clone the repository_
         
      gh repo clone dharmendra9503/Weather_Application

_Run below commnd on terminal_

      npm install

### Command to run the app
    node src/app.js -e js,hbs

OR

    npx nodemon src/app.js -e js,hbs



# Note
_create config.js and below code in config.js_ || **Path: Weather-Application/config.js**

    const constants = {
         openWeatherMap: {
                  BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
                  SECRET_KEY: "Place Your API Key"
         }
    }
    module.exports = constants;



# Preview
![image](https://github.com/dharmendra9503/Weather_Application/assets/106586865/94af566a-6d62-4521-adf6-4c79104e4e77)

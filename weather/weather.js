// darkskyAPI or forecast.io LINK-> Structure of API for fetching weather: 
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

// API key:
// 43717681acf2765e19b3ab44e0acfdc5

// *****************************************************************
const request = require("request");

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/43717681acf2765e19b3ab44e0acfdc5/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to darksky.net (forecast.io) server.");
            // console.log("Unable to connect to darksky.net (forecast.io) server.");
        }  else if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
            // console.log("Weather:", body.currently.temperature);
        } else {
            callback("Unable to fetch weather");
            // console.log("Unable to fetch weather");
        }
    });
};

module.exports.getWeather = getWeather;
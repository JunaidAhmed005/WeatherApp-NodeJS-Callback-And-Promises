const request = require("request");

var getWeather = (latitude, longitude) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/43717681acf2765e19b3ab44e0acfdc5/${latitude},${longitude}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("Unable to connect to darksky.net (forecast.io) server.");
                // console.log("Unable to connect to darksky.net (forecast.io) server.");
            }  else if (!error && response.statusCode === 200) {
                resolve({
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                });
                // console.log("Weather:", body.currently.temperature);
            } else {
                reject("Unable to fetch weather");
                // console.log("Unable to fetch weather");
            }
        });
    });
};

module.exports.getWeather = getWeather;
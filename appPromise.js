const yargs = require("yargs");

const geocodePromise = require("./geocode/geocode-promise");
const weatherPromise = require("./weather/weather-promise");

const argv = yargs
    .options({
        address: {
            describe: 'Address to fetch weather for',
            demand: true,
            alias: 'a',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);

geocodePromise.geocodeAddress(argv.address).then((location) => {
    console.log(location.address);
    return weatherPromise.getWeather(location.latitude, location.longitude);
}).then((weatherResult) => {
    console.log(`It's currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}.`);
}).catch((errorMsg) => {
    console.log(errorMsg);
}); 
// => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(results.address);
//         weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResult) => {
//             if (errorMessage) {
//                 console.log(errorMessage);
//             } else {
//                 console.log(`It's currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}.`)
//             }
//         });

//     }
// });



/**
 * and object is returned
 * we want to use latitude and longitude
 * results -> geometry -> location -> lat: and lng: data
 */

// request package/module => is used to make the http request
const request = require("request");

/**
 *  request(optionsObj, callback) 
 *  optionsObj -> configure for all source of information
 *  callback -> called once the data come back from the http end point (eg: the JSON data come back in to the node app)
 *  callback -> have 3 args. error, response, body
 */

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=paposh%20karachi',
    json: true // this tell the request that the data coming back is JSON data that convert this data to the object format
}, (error, response, body) => {
    /**
     * ********** JSON.stringify(object, filteroutProperties, formatJSON) **********
     * 
     * object -> you want to convert it in to string format
     * filteroutProperties -> not used, useless so undefined
     * foormatJSON -> how mant spaces you want to used in indentation 
     */

    console.log(JSON.stringify(body, undefined, 2)); // ********************
    
    /**
     * Body is part of http
     * Print the HTML for the Google homepage.
     * when you make a request to a website, the data that comes back is the body of request (like html <body>)
     */

    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
});

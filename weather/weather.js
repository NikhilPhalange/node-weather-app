const request = require('request');

var getWeather = (latitude, longitude,callback) => {
    request({
    url:`https://api.darksky.net/forecast/fce03a86d9f409b4cd1c099a8e2a9107/${latitude},${longitude}`,
    json:true
},(error,response,body) => {
    if(!error && response.statusCode === 200) {
        callback(undefined,{
            temperature: body.currently.temperature,
            apparentTemperature:body.currently.apparentTemperature
        });
    }
    else {
        callback('Unable to fetch weather');
    }
});
};

module.exports.getWeather = getWeather;


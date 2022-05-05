const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=00ff281cb1d4904dd392f45e40443789&query=${latitude},${longitude}&units=m`
    // console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,"The sky is " + body.current.weather_descriptions + " & current temp: " + body.current.temperature + " & feels like: " + body.current.feelslike + ". The humidity is: " + body.current.humidity)
        }
    })
}

module.exports = forecast
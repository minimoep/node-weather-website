const request = require('postman-request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com//current?access_key=a0d4a37eb2f7e1c2700d53b9d6e988cb&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'

    request({ url , json: true}, (error, {body} = {}) => {
        if (error){
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error){
            callback(body.error.info)
        } else {
            const {weather_descriptions, temperature, feelslike } = body.current
            callback(undefined, weather_descriptions[0] + '. It is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degrees.')
        }
    })
}

module.exports = forecast
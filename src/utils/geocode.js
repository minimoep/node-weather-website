const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q='+ encodeURIComponent(address) + '&limit=1&access_token=pk.eyJ1IjoibWluaW1vZXAiLCJhIjoiY2x3dDN3ZDZ4MDJtejJuczN3cnd3d3RqZSJ9.CxtoMNQGgV4it86UdFywdg'

    request({ url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to Location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Input is not valid')
        } else {
            const {full_address} = body.features[0].properties
            const {latitude, longitude} = body.features[0].properties.coordinates
            callback(undefined, {
                latitude,//: response.body.features[0].properties.coordinates.latitude,
                longitude,//: response.body.features[0].properties.coordinates.longitude,
                full_address//: response.body.features[0].properties.full_address
            })
        }
    })
}

module.exports = geocode
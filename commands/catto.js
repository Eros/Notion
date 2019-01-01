const querystring = require('querystring');
const API_URL = 'https://api.thecatapi.com/'
const r2 = require('r2');
var config = require('../config.json');

module.exports.run = (bot, message, args) => {

    try {
        var images = await loadImage(message.author.username);
        var image = images[0];
        message.channel.send({files:[image.url]});
    } catch(error) {
        console.log(error);
    }

    function loadImage(sub_id) {
        var headers = { 'X-API-KEY': config.cat_api_key, }
    
        var query_params = {
            'mime_types': 'jpg, png',
            'size': 'med',
            'sub_id': sub_id,
            'limit': 1
        }
    
        let queryString = querystring.stringify(query_params);
    
        try {
            let _url = API_URL + `v1/images/search?${queryString}`
            var response = await r2.get(_url, {headers}).json
        } catch(e) {
            console.log(e)
        }
        return response;
    }

} 

module.exports.help = {
    name: 'catto'
}


const config = require('../config.json');
const unirest = require('unirest');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        var name = "Ninja"; //for now this is just for testing, will be replaced with args
        var req = unirest("GET", "https://fortnite-api.p.rapidapi.com/stats/" + name);
        req.headers({
            "x-rapidapi-host": "fortnite-api.p.rapidapi.com",
            "x-rapidapi-key": config.rapid_api_token
        });

        req.end(function(res) {
            if(res.error) {
                console.log('[!] Error caught: ' + res.error);
            }
            message.channel.send(res.body)
        })
    }
};

module.exports.help = {
    name: 'fortnite'
};


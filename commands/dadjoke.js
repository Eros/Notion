const config = require('../config.json');
var unirest = require('unirest');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        var req = unirest("GET", "https://dad-jokes.p.rapidapi.com/random/jokes");

        req.headers({
            "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
            "x-rapidapi-key": config.rapid_api_token
        });

        req.end(function(res) {
            if(res.error) 
                console.log('[!] Caught error: ' + res.error);
            message.channel.send(res.body['setup'] + '...' + res.body['punchline']);
        })
    }
};

module.exports.help = {
    name: 'dadjoke'
};
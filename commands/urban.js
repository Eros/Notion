const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        var req = unirest("GET", "https://mashape-community-urban-dictionary.p.rapidapi.com/define");

        req.query({'term': args});

        req.headers({
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
            "x-rapidapi-key": config.rapid_api_token
        });

        req.end(function(res) {
            if(res.error)
                console.log('[X] Error caught: ' + res.error);
            console.log(res.body);
        });
    }
};

module.exports.help = {
    name: 'urban'
};
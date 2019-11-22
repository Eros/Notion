const config = require('../config.json');
const unirest = require('unirest');
module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        let first = message.mentions.members.first();
        let second = message.mentions.members.array()[1];

        if (first == null || second == null)
            message.reply('You need to tag people!');
        else {
            var req = unirest("GET", "https://love-calculator.p.rapidapi.com/getPercentage");

            req.query({'fname': first.displayName, 'sname': second.displayName});
            req.headers({
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                "x-rapidapi-key": config.rapid_api_token
            });

            req.end(function (res) {
                if (res.error)
                    console.log('[!] Error caught: ' + res.error);
                message.reply('For: ' + first.displayName + ' & ' + second.displayName + ' their percentage is ' + res.body['percentage'] + '%... I think that they ' + res.body['result']);
            });
        }
    }
};

module.exports.help = {
    name: 'lovecalc'
};
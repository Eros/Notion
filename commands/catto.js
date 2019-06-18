const request = require('request');
const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(config.prefix)) {
        request.get('http://thecatapi.com/api/images/get?format=src&type=png', {

        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                message.channel.send(response.request.uri.href);
            } else {
                console.log(error);
            }
        });
    }
}

module.exports.help = {
    name: 'catto'
}


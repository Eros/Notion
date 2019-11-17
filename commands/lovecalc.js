const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        var first = message.mentions.members.first();
        var second = message.mentions.members.array()[1];


    }
};

module.exports.help = {
    name: 'lovecalc'
};
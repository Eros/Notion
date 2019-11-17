const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if(message.contents.startWith(config.prefix)) {
        var first = message.mentions.members.first();
        var second = message.mentions.members.array()[1];

        console.log(first);
        console.log(second);
    }
};

module.exports.help = {
    name: 'lovecalc'
};
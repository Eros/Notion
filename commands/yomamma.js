const config = require('../config.json');
const yoMamma = require('yo-mamma').default;

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        let member = message.mentions.members.first();

        if(member == '' || member == null) {
            message.reply('You need to tag someone!');
        } else {
            let insult = yoMamma();
            message.channel.send(member + ' ' + insult);
        }
    }
}

module.exports.help = {
    name: 'yomamma'
}
const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix))
        message.reply('test');
}

module.exports.help = {
    name: 'test'
}
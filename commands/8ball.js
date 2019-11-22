const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        if(!args[2])
            message.reply('Not enough arguments for this command!');
        const replies = ['Yes', 'No', 'Not a clue ask me again later'];
        let result = Math.floor(Math.random() * replies.length);
        message.reply(replies[result]);
    }
};

module.exports.help = {
    name: '8ball'
};
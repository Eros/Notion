const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        if (message.member.hasPermission('MANAGE_MESSAGES', false, true)) {
            if (!args[0])
                message.reply('You need to specify an amount! (100 max)');
            else if (args[0] > 100)
                message.reply('You can only delete 100 messages at one time');
            else {
                message.channel.bulkDelete(args[0]).then(() => {
                    message.channel.send(`Cleared ${args[0]} messages!`);

                });
            } else {
                message.reply('You do not have permission to run this command!');
            }
        }
    }
};

module.exports.help = {
    name: 'purge'
};
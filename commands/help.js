const config = require('../config.json');
const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(config.prefix)) {

        const embed = new Discord.RichEmbed();
        embed.setTitle('List of commands');
        embed.addField('** Fun commands **');
        embed.addBlankField(true);
        embed.addField('&insult @name     &boomer @name', 'Generate an insult at a user!     Tell someone they\'re a boomer');

        message.channel.send(embed);
    }
};

module.exports.help = {
    name: 'help'
};
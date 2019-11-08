const config = require('../config.json');
const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(config.prefix)) {

        const embed = new Discord.RichEmbed();
        embed.setTitle('InsultBot commands')
            .setAuthor('')
            .setColor(0x00AE86)
            .addField('» &help', 'Runs this command')
            .addField('» &insult @name', 'Generates an insult the target user')
            .addField('» &sys', 'Provides stats on the bot and AWS server')
            .addField('» &cat', 'Just incase you piss someone off this will put a cat in chat')
            .addField('» &boomer @name', 'tell someone they\'re a boomer!')
            .setFooter('Developed by https://twitter.com/RapidTheNerd');
        message.channel.send(embed);
    }
}

module.exports.help = {
    name: 'help'
}
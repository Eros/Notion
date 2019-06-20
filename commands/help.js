const config = require('../config.json');
const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(config.prefix)) {
        //     message.channel.send({
        //         embed: {
        //             color: 8913151,
        //             author: {
        //                 name: bot.user.username,
        //                 icon_url: bot.user.avatarURL
        //             },
        //             title: 'Help',
        //             description: 'List of commands',
        //             fields: [{
        //                 name: '&insult @user',
        //                 value: 'Generates an insult at the targetted user'
        //             },
        //             {
        //                 name: '&help',
        //                 value: 'Prints this message'
        //             },
        //             {
        //                 name: '&sys',
        //                 value: 'Prints stats on the bot and the server.'
        //             },
        //             {
        //                 name: '&globalban',
        //                 value: 'Globally bans a user. This is only for the bot developer to use'
        //             }],
        //             footer: {
        //                 icon_url: bot.user.avatarURL,
        //                 text: ''
        //             }
        //         }
        //     });
        // }

        const embed = new Discord.RichEmbed();
        embed.setTitle('InsultBot commands')
            .setAuthor('Developed by https://twitter.com/RapidTheNerd')
            .setColor(0x00AE86)
            .addField('» &help', 'Runs this command', true)
            .addField('» &insult @name', 'Generates an insult the target user', true)
            .addField('» &sys', 'Provides stats on the bot and AWS server')
            .addField('» &cat', 'Just incase you piss someone off this will put a cat in chat');
        message.channel.send(embed);
    }
}

module.exports.help = {
    name: 'help'
}
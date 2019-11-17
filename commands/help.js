const config = require('../config.json');
const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(config.prefix)) {


        message.channel.send({embed: {
            color: 0x00AE86,
            author: {
                name: ' ',
                icon_url: bot.user.avatarURL
            },
            title: 'Help',
            description: 'Some information and commands list',
            fields: [{
                name: '» &help',
                value: 'Runs this command'
            },
            {
                name: '» &insult @name',
                value: 'Generates an insult at the targetted user'
            },
            {
                name: '» &boomer @name',
                value: 'Let someone know they\'re a boomer!'
            },
            {
                name: '» &sys',
                value: 'Provides information on the bot and server it runs on'
            },
            {
                name: '» &cat',
                value: 'Provides a picture of a cat'
            },
            {
                name: '» &dadjoke',
                value: 'Provides a terrible dadjoke'
            }],
            footer: {
                icon_url: bot.user.avatarURL,
                text: 'Developed by https://twitter.com/RapidThenerd'
            }
        }});
    }
}

module.exports.help = {
    name: 'help'
}
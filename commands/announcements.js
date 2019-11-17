const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        message.channel.send({embed: {
            color: 14177041,
            author: {
                name: 'Insult bot developer'
            },
            title: 'Announcements',
            description: 'Announcements and information from the bot developer',
            fields: [{
                name: 'Changing bot name [17th November 2019]',
                value: 'In the next couple of weeks the bot name will be changed from InsultBot to something more general (undetermined yet)'
                        + 'Because the bot originally started out as purely generating insults it has now expanded to more of a general purpose' 
                        + 'and just shitting around with some more fun components. All of the current commands will be staying, as well as a few' 
                        + ' more will be added. The bot will not be turned into a moderation bot the general idea is to allow people to mess around with' 
                        + ' it and not to be taken seriously.'
            }],
            footer: {
                icon_url: bot.user.avatarURL,
                text: 'Developed by https://twitter.com/RapidTheNerd'
            }
        }
        });
    }
}

module.exports.help = {
    name: 'announcements'
}
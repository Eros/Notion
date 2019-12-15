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
                value:  '⛏ Bot has received several new commands (run &help)\n' +
                        '⛏ Several bugs have been fixed\n' +
                        '⛏ Implementations have been added to prevent crashing\n' +
                        '⛏ Urban command now returns the URL if the text is > 1024 characters\n' +
                        '⛏ Bot has now been rebranded to Notion\n' + 
                        '⛏ Source code is available at https://github.com/Eros/Notion'
            }],
            footer: {
                icon_url: bot.user.avatarURL,
                text: 'Developed by https://twitter.com/RapidTheNerd'
            }
        }
        });
    }
};

module.exports.help = {
    name: 'announcements'
};
module.exports.run = (bot, message, args) => {
    message.channel.send({embed: {
        color: 8913151,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        title: 'Help',
        description: 'List of commands',
        fields:[{
            name: 'insult',
            value: 'Usage: &insult @name \n Insults targetted user'
        },
        {
            name: 'Help',
            value: 'Usage: &help \n Prints this message'
        },
        {
            name: 'sys',
            value: 'Usage: &sys \n Prints information on the bot and server'
        },
        {
            name: 'catto',
            value: 'Usage: &catto \n Displays a random cat picture'
        }],
        footer: {
            icon_url: bot.user.avatarURL,
            text: ''
        }
    }});
}

module.exports.help = {
    name: 'help'
}
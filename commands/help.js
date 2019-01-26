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
            name: '&insult @user',
            value: 'Generates an insult at the targetted user'
        },
        {
            name: '&help',
            value: 'Prints this message'
        },
        {
            name: '&sys',
            value: 'Prints stats on the bot and the server.'
        },
        {
            name: '&globalban',
            value: 'Globally bans a user. This is only for the bot developer to use'
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
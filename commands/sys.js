module.exports.run = (bot, message, args) => {
    message.channel.send({embed: {
        color: 3447003,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        title: 'System stats',
        description: 'Statistics of the Bot and the AWS server',
        fields: [{
            name: 'Uptime',
            value: 'Client: ' + (process.uptime() + '').toHHMMSS() + '\n Host: ' + require('os'.uptime() + '').toHHMMSS()
        },
        {
            name: 'RAM usage ',
            value: `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`
        },
        {
            name: 'Websocket',
            value: `${process.platform} (${process.arch}) `
        },
        {
            name: 'Host',
            value: `AWS Ohio Server (Ubuntu)`
        },
        {
            name: 'Ping',
            value: `${bot.ping} `
        },
        {
            name: 'DiscordJS version',
            value: `${require('discord.js').version} `
        },
        {
            name: 'Server count: ',
            value: `${bot.guilds.size} `
        }],
        footer: {
            icon_url: bot.user.avatarURL,
            text: 'Developed by https://twitter.com/RapidTheNerd'
        }
    }});
}

module.exports.help = {
    name: 'sys'
}
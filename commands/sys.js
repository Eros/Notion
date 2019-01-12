module.exports.run = (bot, message, args) => {
    message.channel.send({embed: {
        color: 3447003,
        author: {
            name: ' ',
            icon_url: bot.user.avatarURL
        },
        title: 'System stats',
        description: 'Statistics of the Bot and the AWS server',
        fields: [{
            name: 'Uptime',
            value: process.uptime().convertTime();
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

String.prototype.convertTime = function() {
    let sec = parseInt(this, 10);
    let remainder = sec % 86400;
    let days = Math.floor(sec_num / 86400);
    let hours = Math.floor(remainder / 3600);
    let minutes = Math.floor((remainder / 60) - (hours * 60));
    let seconds = Math.floor((remainder % 3600) - (minutes * 60));

    if (days > 0) {
        return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    } else if (hours > 0) {
        return hours + "h " + minutes + "m " + seconds + "s";
    } else if (minutes > 0) {
        return minutes + "m " + seconds + "s";
    } else {
        return seconds + "s";
    }
};
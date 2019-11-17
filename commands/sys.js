const config = require('../config.json');
const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(config.prefix)) {
        const embed = new Discord.RichEmbed();
        embed.setColor(3447003);
        embed.setTitle('Bot & server statistics');
        embed.addField('» Uptime', `${(process.uptime() + '').convertTime()}`);
        embed.addField('» RAM Usage', `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`);
        embed.addField('» Websocket', `${process.platform} ${process.arch}`);
        embed.addField('» Host', 'AWS EC2 Ubuntu');
        embed.addField('» Ping', `${(bot.ping).toFixed(4)}`);
        embed.addField('» Discord JS Version', `${require('discord.js').version}`);
        embed.addField('» Server count', `${bot.guilds.size}`);
        message.channel.send(embed);
    }
};

module.exports.help = {
    name: 'sys'
};

String.prototype.convertTime = function () {
    let sec = parseInt(this, 10);
    let remainder = sec % 86400;
    let days = Math.floor(sec / 86400);
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